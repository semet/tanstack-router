import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export const SvgMorph = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-slate-700">
      <SvgOne />
    </section>
  )
}

const SvgOne = () => {
  const ref = useRef(null)
  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 }) // Infinite loop

      tl.to('#mobile-frame, #mobile-screen', {
        rotation: 90, // Rotate to the right
        duration: 2, // Duration of the rotation
        ease: 'power1.inOut',
        transformOrigin: 'center'
      })
        .to('#middle-card', {
          scaleY: 1.5
        })
        .to(
          '#mobile-notch',
          {
            display: 'none'
          },
          '-=' // Hide the notch
        )
        .to('#mobile-frame, #mobile-screen', {
          duration: 5 // Stay in the rotated position for 5 seconds
        })
        .to('#mobile-frame, #mobile-screen', {
          rotation: 0, // Rotate back to the original position
          duration: 2, // Duration of the rotation
          ease: 'power1.inOut',
          transformOrigin: 'center'
        })

        .to(
          '#mobile-notch',
          {
            display: 'block'
          },
          '>=' // Show the notch
        )
        .to('#middle-card', {
          scaleY: 1
        })
        .to('#mobile-frame, #mobile-screen', {
          duration: 5 // Stay in the original position for 5 seconds
        })
    },
    {
      scope: ref
    }
  )
  return (
    <svg
      ref={ref}
      width="731.50285"
      height="668.45534"
      viewBox="0 0 731.50285 668.45534"
    >
      <path
        id="mobile-frame"
        d="m507.15272,667.41724h-218.64718c-28.48961,0-51.66784-23.17792-51.66784-51.66784V51.66784c0-28.48992,23.17823-51.66784,51.66784-51.66784h218.64718c28.48992,0,51.66784,23.17792,51.66784,51.66784v564.08156c0,28.48992-23.17792,51.66784-51.66784,51.66784Z"
        fill="#2f2e41"
        strokeWidth={0}
      />
      <path
        id="mobile-screen"
        d="m507.37555,653.4731h-219.09284c-21.37703,0-38.76852-17.3918-38.76852-38.76852V49.54354c0-21.37672,17.39149-38.76852,38.76852-38.76852h219.09284c21.37672,0,38.76852,17.3918,38.76852,38.76852v565.16104c0,21.37672-17.3918,38.76852-38.76852,38.76852Z"
        fill="#fff"
        strokeWidth={0}
      />
      <path
        id="mobile-notch"
        d="m432.05565,47.53684h-69.7207c-8.03824,0-14.57796-6.53941-14.57796-14.57796s6.53972-14.57796,14.57796-14.57796h69.7207c8.03855,0,14.57796,6.53941,14.57796,14.57796s-6.53941,14.57796-14.57796,14.57796Z"
        fill="#2f2e41"
        strokeWidth={0}
      />
      <polygon
        points="181.46604 277.2319 206.72924 285.53725 206.72924 249.16597 183.80594 249.16597 181.46604 277.2319"
        fill="#a0616a"
        strokeWidth={0}
      />
      <circle
        cx="203.60508"
        cy="234.05948"
        r="25.1732"
        fill="#a0616a"
        strokeWidth={0}
      />
      <path
        d="m197.18964,236.02654l3.47127,4.21696,6.27402-10.97953s8.00965.41141,8.00965-5.52833,7.35397-6.10688,7.35397-6.10688c0,0,10.40097-18.16636-11.14666-13.38371,0,0-14.95222-10.2467-22.38332-1.49136,0,0-22.79472,11.48093-16.27644,31.47292l10.83811,20.59625,2.45561-4.66694s-1.49137-19.58058,11.40379-14.12939Z"
        fill="#2f2e43"
        strokeWidth={0}
      />
      <rect
        x="174.52349"
        y="621.77558"
        width="20.33911"
        height="28.85018"
        fill="#a0616a"
        strokeWidth={0}
      />
      <path
        d="m192.61269,667.14645c-3.48414.32141-20.87909,1.68421-21.75334-2.30134-.79711-3.66414.37284-7.49537.53997-8.00967,1.67136-16.63643,2.28847-16.82927,2.66131-16.94497.5914-.16714,2.32705.64283,5.12978,2.45561l.17999.1157.03857.20571c.05142.25715,1.29851,6.36403,7.18683,5.43835,4.03697-.64283,5.34834-1.52994,5.77261-1.96706-.34713-.15427-.7714-.42425-1.0671-.89998-.43712-.6814-.51426-1.55564-.23141-2.59702.75853-2.76416,3.03416-6.85254,3.12414-7.01969l.25713-.46282,23.11614,15.59505,14.27082,4.07556c1.07995.30855,1.94134,1.07995,2.37848,2.1085h0c.60426,1.43993.23141,3.11131-.92568,4.15269-2.59704,2.32704-7.73967,6.32546-13.15228,6.81398-1.43993.12857-3.34272.18001-5.4769.18001-8.93532,0-21.95905-.92568-22.06191-.93854h0l.01285-.00008Z"
        fill="#2f2e43"
        strokeWidth={0}
      />
      <rect
        x="115.62403"
        y="585.89138"
        width="28.85018"
        height="20.33913"
        transform="translate(-412.12016 316.32196) rotate(-50.4)"
        fill="#a0616a"
        strokeWidth={0}
      />
      <path
        d="m116.45028,624.96399c-2.87987-1.97993-17.16354-12.00805-15.29934-15.63361,1.72278-3.32985,5.0655-5.52832,5.52834-5.82403,11.89234-11.75094,12.4966-11.50666,12.85659-11.35235.56569.24428,1.37565,1.97993,2.39133,5.1555l.06429.19284-.10286.18001c-.12856.23141-3.05986,5.73403,2.06991,8.7682,3.5227,2.08276,5.10407,2.2242,5.69547,2.1599-.16713-.33428-.32141-.82284-.25713-1.37566.09-.7971.5914-1.52994,1.49137-2.14707,2.35276-1.64564,6.69828-3.34272,6.89113-3.41986l.48855-.19284,7.86823,26.75455,8.39535,12.23946c.62997.92568.80996,2.06989.48855,3.14988h0c-.44998,1.49137-1.79992,2.54562-3.36843,2.60989-3.48413.1414-9.98956-.06427-14.47652-3.13701-1.1828-.80997-2.68702-1.97993-4.33267-3.34272-6.87827-5.69546-16.32786-14.70794-16.40501-14.78507h.01286Z"
        fill="#2f2e43"
        strokeWidth={0}
      />
      <path
        d="m228.49543,399.24091h-69.75983l15.50504,230.59574h23.25756l31.01008-230.59574h-.01285Z"
        fill="#2f2e43"
        strokeWidth={0}
      />
      <polygon
        points="214.2889 411.94322 228.49543 399.24091 221.38574 526.07113 141.94489 601.64216 122.1329 585.27571 168.42946 525.20974 214.2889 411.94322"
        fill="#2f2e43"
        strokeWidth={0}
      />
      <path
        d="m214.2889,263.60392l-34.45566-5.59261-10.69668,18.70633c-13.60227,23.78468-19.14346,51.32349-15.81361,78.51518l5.41262,44.03381h69.75983l-14.20653-135.64985h0l.00002-.01286Z"
        fill="#6c63ff"
        strokeWidth={0}
      />
      <path
        id="uuid-de5a08c4-a8f0-479e-b53f-d47d7d01b14f-73-27"
        d="m186.31297,440.76769c1.42708,7.10969-1.23424,13.60227-5.92689,14.50223-4.70552.88711-9.66815-4.15267-11.09523-11.27523-.60426-2.84131-.50141-5.77261.30856-8.56249l-5.6569-30.22583,14.78508-2.30132,3.9984,30.04584c1.82563,2.30132,3.05987,4.97549,3.58698,7.82966h0v-.01285Z"
        fill="#a0616a"
        strokeWidth={0}
      />
      <path
        d="m168.32661,432.57803l-21.71477-67.08568v-.10286l8.2025-69.07843c1.25995-10.58097,10.23384-18.55205,20.8791-18.55205,6.5183,0,12.56089,2.94416,16.57214,8.08679s5.41263,11.71235,3.83126,18.05065l-14.48938,57.94464,3.45842,65.76143-16.75213,4.97549h.01286v.00002Z"
        fill="#6c63ff"
        strokeWidth={0}
      />
      <line
        id="line-1"
        x1="286.4487"
        y1="209.99252"
        x2="339.21648"
        y2="209.99252"
        fill="none"
        stroke="#090814"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <line
        id="line-2"
        x1="286.4487"
        y1="229.99252"
        x2="397.4487"
        y2="229.99252"
        fill="none"
        stroke="#090814"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <line
        id="line-3"
        x1="286.4487"
        y1="220.99252"
        x2="445.4487"
        y2="220.99252"
        fill="none"
        stroke="#090814"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx="274.4487"
        cy="214.99252"
        r={9}
        fill="#6c63ff"
        strokeWidth={0}
      />
      <defs>
        <linearGradient id="middleCardClipPath">
          <stop
            offset="20%"
            stop-color="gold"
          />
          <stop
            offset="90%"
            stop-color="red"
          />
        </linearGradient>
      </defs>
      <path
        id="middle-card"
        d="m511.24972,368.99252h-217.60205c-4.24536,0-7.69897-3.4541-7.69897-7.69922v-114.10156c0-4.24512,3.45361-7.69922,7.69897-7.69922h217.60205c4.24536,0,7.69897,3.4541,7.69897,7.69922v114.10156c0,4.24512-3.45361,7.69922-7.69897,7.69922Z"
        fill="url(#middleCardClipPath)"
        strokeWidth={0}
      />
      <path
        d="m394.58718,373.50182l-.05565-.05565-.05565.05565c-2.70778-2.70556-7.0961-2.70222-9.80166.00557-2.70556,2.7089-2.76009,7.15175-.05231,9.85731h0l9.91629,9.90628,9.90961-9.91852h0c2.70556-2.70889,2.6488-7.15175-.05787-9.85731-2.70778-2.70556-7.0961-2.70222-9.80166.00557h0l-.00111.00111Z"
        fill="#6c63ff"
        strokeWidth={0}
      />
      <polyline
        points="0 667.45534 35.54 667.45534 67.13 667.45534 68.4 667.45534 96.21 667.45534 286.66 667.45534 331.98 667.45534 731.50285 667.45534"
        fill="none"
        stroke="#090814"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  )
}
