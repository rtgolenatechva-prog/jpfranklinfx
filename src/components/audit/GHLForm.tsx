'use client'

import Script from 'next/script'

export function GHLForm() {
  return (
    <div className="w-full min-h-[620px]">
      <iframe
        src="https://links.aiagenticworkflow.ai/widget/form/lvMcrmODABlbVT6dgZ8q"
        style={{ width: '100%', height: '620px', border: 'none', borderRadius: '12px' }}
        id="inline-lvMcrmODABlbVT6dgZ8q"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 1"
        data-height="620"
        data-layout-iframe-id="inline-lvMcrmODABlbVT6dgZ8q"
        data-form-id="lvMcrmODABlbVT6dgZ8q"
        title="Strategy Audit Form"
      />
      <Script src="https://links.aiagenticworkflow.ai/js/form_embed.js" strategy="lazyOnload" />
    </div>
  )
}
