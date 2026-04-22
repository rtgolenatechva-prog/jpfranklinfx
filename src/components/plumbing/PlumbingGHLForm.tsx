'use client'

import Script from 'next/script'

const FORM_ID = 'XOr0eWukDIWa4yZsXuPn'

export function PlumbingGHLForm() {
  return (
    <div className="w-full min-h-[620px]">
      <iframe
        src="https://links.aiagenticworkflow.ai/widget/form/XOr0eWukDIWa4yZsXuPn"
        style={{ width: '100%', height: '620px', border: 'none', borderRadius: '12px' }}
        id={`inline-${FORM_ID}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Plumbing Demo Lead Form"
        data-height="620"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="Plumbing Demo Lead Form"
      />
      <Script
        src="https://links.aiagenticworkflow.ai/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
