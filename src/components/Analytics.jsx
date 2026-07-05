export default function Analytics() {
  const YM_ID = 123456
  const GA_ID = ''

  return (
    <>
      {/* Yandex.Metrica */}
      {YM_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(${YM_ID}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });
            `,
          }}
        />
      )}
      {YM_ID && (
        <noscript>
          <div>
            <img src={`https://mc.yandex.ru/watch/${YM_ID}`} style={{ position:'absolute', left:-9999 }} alt="" />
          </div>
        </noscript>
      )}

      {/* Google Analytics */}
      {GA_ID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `,
            }}
          />
        </>
      )}
    </>
  )
}
