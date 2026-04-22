const GHL_API_BASE = 'https://services.leadconnectorhq.com'

function headers() {
  return {
    Authorization: `Bearer ${process.env.GHL_API_KEY}`,
    Version: '2021-04-15' as const,
    'Content-Type': 'application/json',
  }
}

export async function ghlAddTags(contactId: string, tags: string[]) {
  return fetch(`${GHL_API_BASE}/contacts/${contactId}/tags`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ tags }),
  })
}

export async function ghlCreateOpportunity(payload: {
  title: string
  pipelineId: string
  pipelineStageId: string
  contactId: string
  locationId: string
  status?: string
  source?: string
}) {
  return fetch(`${GHL_API_BASE}/opportunities/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ status: 'open', ...payload }),
  })
}

export async function ghlSendSms(payload: {
  type: 'SMS'
  contactId: string
  locationId: string
  message: string
}) {
  return fetch(`${GHL_API_BASE}/conversations/messages`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(payload),
  })
}

export async function ghlGetPipelines(locationId: string) {
  const res = await fetch(
    `${GHL_API_BASE}/opportunities/pipelines?locationId=${locationId}`,
    { headers: headers() }
  )
  if (!res.ok) throw new Error(`GHL pipelines fetch failed: ${res.status}`)
  return res.json() as Promise<{ pipelines: Array<{ id: string; name: string; stages: Array<{ id: string; name: string }> }> }>
}
