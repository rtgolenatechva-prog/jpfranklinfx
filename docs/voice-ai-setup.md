# Voice AI Setup — Plumbing Demo

## Overview

Phone number **+1 (218) 438-4180** routes through **GHL Native Voice AI** (Call Forwarding).
No SIP URI or external telephony configuration required.

## Configuration

| Field | Value |
|-------|-------|
| Phone number | +12184384180 |
| Routing method | GHL Native Voice AI (Call Forwarding settings) |
| Voice provider | ElevenLabs (via GHL integration) |
| ElevenLabs Agent ID | `agent_2701kpnpcgrrfbeaqn6pnaxavce3` |
| Agent name | Plumbing Demo Agent |
| Voice | Adam (`pNInz6obpgDQGcFmaJgB`) |

## GHL Dashboard Setup

1. GHL > Settings > Phone Numbers > +12184384180
2. Call Forwarding > select **Voice AI**
3. Attach the ElevenLabs agent or configure the built-in GHL Voice AI persona
4. Save

## Agent Persona

**Name:** Mike — Professional Plumbing Specialist

**Call flow:**
1. Emergency check — is this an emergency or general inquiry?
2. Issue capture — what's the problem? (burst pipe, drain, gas, etc.)
3. Address capture — full service address
4. Safety instructions if gas/flood — shut off mains immediately
5. Callback number capture
6. Booking confirmation — "A technician will call within 15 minutes"

**Rules:** No price quotes. Responses under 3 sentences. Escalate unknowns to dispatcher.

## Automation (Webhook)

On form submission, `POST /api/ghl/webhook` handles:
- Tags contact `[PLUMBING_DEMO]`
- Creates opportunity in Marketing Pipeline > New Lead
- Sends SMS confirmation to lead

Webhook URL: `https://aiagenticworkflow.ai/api/ghl/webhook?secret=<GHL_WEBHOOK_SECRET>`
