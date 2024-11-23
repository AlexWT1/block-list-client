import clsx from "clsx";

export function UiLogo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-xl")}>
      <Devil className={"w-12 h-12"} />
      Easy block
    </div>
  );
}

export const Devil = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <g fill="none">
        <g clip-path="url(#f24idc)">
          <path
            fill="url(#f24id0)"
            d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"
          />
          <path
            fill="url(#f24id1)"
            fill-opacity=".6"
            d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"
          />
          <path
            stroke="url(#f24id7)"
            stroke-linecap="round"
            stroke-width="2"
            d="M12 26c.333-.667 1.6-2 4-2s3.667 1.333 4 2"
          />
          <circle cx="9" cy="19" r="5" fill="url(#f24id2)" />
          <circle cx="19.5" cy="19.5" r="4.5" fill="url(#f24id3)" />
          <path
            fill="#fff"
            d="M10.5 22a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"
          />
          <path fill="url(#f24id8)" d="M12 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
          <path fill="url(#f24id9)" d="M20 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
          <path
            stroke="url(#f24ida)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M10.25 11.25s.75 3 4 3"
          />
          <path
            stroke="url(#f24idb)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M21.75 11.25s-.75 3-4 3"
          />
          <path
            fill="url(#f24id4)"
            d="M8 6s-2.392-.733-3.542-2.773c-.28-.51-.6 0-.6 0S1.85 7 4 11c.26.69 1.51 1 2.5 1c1.79 0 3.108-1.533 3.108-3.313C9.618 7.467 9.08 6.36 8 6"
          />
          <path
            fill="url(#f24id5)"
            d="M24.006 6s2.392-.733 3.542-2.773c.28-.51.6 0 .6 0S30.156 7 28.006 11c-.26.69-1.51 1-2.5 1c-1.79 0-3.108-1.533-3.108-3.313c-.01-1.22.528-2.327 1.608-2.687"
          />
          <path
            fill="url(#f24id6)"
            d="M24.006 6s2.392-.733 3.542-2.773c.28-.51.6 0 .6 0S30.156 7 28.006 11c-.26.69-1.51 1-2.5 1c-1.79 0-3.108-1.533-3.108-3.313c-.01-1.22.528-2.327 1.608-2.687"
          />
        </g>
        <defs>
          <radialGradient
            id="f24id0"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-2 25.00003 -25.00003 -2 21.5 10)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9F70B8" />
            <stop offset=".514" stop-color="#8543A8" />
            <stop offset=".714" stop-color="#9344BB" />
            <stop offset=".889" stop-color="#6B438B" />
          </radialGradient>
          <radialGradient
            id="f24id1"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(135 6.1 10.728)scale(45.2548)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".315" stop-opacity="0" />
            <stop offset="1" />
          </radialGradient>
          <radialGradient
            id="f24id2"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(135 3.315 10.225)scale(9.74236 5.04232)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#392108" />
            <stop offset="1" stop-color="#C87928" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="f24id3"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-5.75 5.75 -3.24597 -3.24597 23 16)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#392108" />
            <stop offset="1" stop-color="#C87928" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="f24id4"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(165.379 5.904 1.52)scale(11.8849)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".473" stop-color="#8649AC" />
            <stop offset=".645" stop-color="#AE7CC7" />
            <stop offset=".759" stop-color="#9353B3" />
            <stop offset=".946" stop-color="#733295" />
          </radialGradient>
          <radialGradient
            id="f24id5"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(16.99996 -2.5 2.5 16.99996 15 5)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".473" stop-color="#613184" />
            <stop offset=".727" stop-color="#9353B8" />
            <stop offset=".946" stop-color="#792F9F" />
          </radialGradient>
          <radialGradient
            id="f24id6"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(103.134 12.215 13.36)scale(15.4029 5.28047)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B676D6" />
            <stop offset=".305" stop-color="#B676D6" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="f24id7"
            x1="16"
            x2="16"
            y1="23"
            y2="25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4F3C43" />
            <stop offset="1" stop-color="#512756" />
          </linearGradient>
          <linearGradient
            id="f24id8"
            x1="20.615"
            x2="19.927"
            y1="16"
            y2="20.03"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#553B3E" />
            <stop offset="1" stop-color="#3D2432" />
          </linearGradient>
          <linearGradient
            id="f24id9"
            x1="20.615"
            x2="19.927"
            y1="16"
            y2="20.03"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#553B3E" />
            <stop offset="1" stop-color="#3D2432" />
          </linearGradient>
          <linearGradient
            id="f24ida"
            x1="11.5"
            x2="11.5"
            y1="11"
            y2="12.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".03" stop-color="#524049" />
            <stop offset="1" stop-color="#4A2C42" />
          </linearGradient>
          <linearGradient
            id="f24idb"
            x1="20.5"
            x2="20.5"
            y1="11"
            y2="12.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".03" stop-color="#524049" />
            <stop offset="1" stop-color="#4A2C42" />
          </linearGradient>
          <clipPath id="f24idc">
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </g>
    </svg>
  );
};
