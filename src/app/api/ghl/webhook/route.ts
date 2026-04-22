import { NextRequest, NextResponse } from 'next/server'
import { ghlAddTags, ghlCreateOpportunity, ghlSendSms } from '@/lib/ghl'

const LOCATION_ID = process.env.GHL_LOCATION_ID!.trim()
const WEBHOOK_SECRET = process.env.GHL_WEBHOOK_SECRET?.trim()
const PLUMBING_FORM_ID = process.env.GHL_PLUMBING_FORM_ID?.trim()
const PIPELINE_ID = process.env.GHL_PIPELINE_ID!.trim()
const STAGE_ID = process.env.GHL_STAGE_ID!.trim()

export async function POST(req: NextRequest) {
  // Verify shared secret
  if (WEBHOOK_SECRET) {
    const secret = req.nextUrl.searchParams.get('secret')
    if (secret !== WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const eventType = body.type as string

  // Only process contact creation or form submission
  if (!['ContactCreate', 'FormSubmitted'].includes(eventType)) {
    return NextResponse.json({ received: true, skipped: true })
  }

  // If form submission, filter to only the plumbing demo form
  if (eventType === 'FormSubmitted' && PLUMBING_FORM_ID) {
    if (body.formId !== PLUMBING_FORM_ID) {
      return NextResponse.json({ received: true, skipped: true, reason: 'different form' })
    }
  }

  const contactId = (body.id ?? body.contactId) as string
  if (!contactId) {
    return NextResponse.json({ error: 'Missing contactId' }, { status: 400 })
  }

  const firstName = (body.firstName as string) ?? ''
  const lastName = (body.lastName as string) ?? ''
  const contactName = `${firstName} ${lastName}`.trim() || 'New Lead'
  const phone = (body.phone as string) ?? ''

  // 1. Tag the contact
  const tagRes = await ghlAddTags(contactId, ['PLUMBING_DEMO'])
  const tagAdded = tagRes.ok

  // 2. Create opportunity in pipeline stage
  const oppRes = await ghlCreateOpportunity({
    title: `${contactName} — Plumbing Demo`,
    pipelineId: PIPELINE_ID,
    pipelineStageId: STAGE_ID,
    contactId,
    locationId: LOCATION_ID,
    status: 'open',
    source: 'Plumbing Demo Form',
  })
  const opportunityCreated = oppRes.ok

  // 3. Send SMS confirmation
  let smsSent = false
  if (phone) {
    const smsRes = await ghlSendSms({
      type: 'SMS',
      contactId,
      locationId: LOCATION_ID,
      message: `Hi ${firstName || 'there'}, thanks for reaching out! Our plumbing team will call you within 15 minutes. For emergencies call now: +12184384180`,
    })
    smsSent = smsRes.ok
  }

  console.log(
    `[GHL Webhook] type=${eventType} contact=${contactId} tagAdded=${tagAdded} oppCreated=${opportunityCreated} smsSent=${smsSent}`
  )

  return NextResponse.json({ received: true, tagAdded, opportunityCreated, smsSent })
}
