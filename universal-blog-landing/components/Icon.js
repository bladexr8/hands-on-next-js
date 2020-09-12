import React from 'react';

export default ({ user, logo, clock, ...props }) => (
  <svg className="icon" {...props}>
    {user && (
      <path d="M12,15 L0,15 L0.01,14.11 C0.11,11.46 1.983,9.39 4.273,9.39 L7.733,9.39 C10.086,9.39 12,11.6 12,14.31 L12,15 L12,15 L12,15 Z M0.838,14.03 L11.146,14.02 C11.1407275,12.0968886 9.65143219,10.504176 7.733,10.37 L4.273,10.37 C2.34655312,10.5029286 0.848599489,12.0990015 0.838,14.03 L0.838,14.03 Z M6.012,8.47 C3.97491009,8.36473538 2.3978733,6.64657348 2.4671616,4.60794279 C2.5364499,2.56931211 4.22650529,0.962191038 6.26604144,0.995481419 C8.30557758,1.0287718 9.94228209,2.69019399 9.945,4.73 C9.88665421,6.8465945 8.12885124,8.51813864 6.012,8.47 L6.012,8.47 Z M6.012,1.95 C4.49273643,2.03183097 3.31938812,3.31619195 3.37485864,4.8366462 C3.43032917,6.35710045 4.69414795,7.55254659 6.21533554,7.52345319 C7.73652312,7.4943598 8.95370751,6.25146337 8.951,4.73 C8.90307771,3.15254052 7.58968537,1.91020275 6.012,1.95 L6.012,1.95 Z" />
    )}
    {clock && (
      <path
        d="M10.0001,8 L9.0001,8 L9.0001,6 C9.0001,5.448 8.5531,5 8.0001,5 C7.4471,5 7.0001,5.448 7.0001,6 L7.0001,9 C7.0001,9.553 7.4471,10 8.0001,10 L10.0001,10 C10.5531,10 11.0001,9.553 11.0001,9 C11.0001,8.447 10.5531,8 10.0001,8 M8.0001,15 C4.6911,15 2.0001,12.309 2.0001,9 C2.0001,5.691 4.6911,3 8.0001,3 C11.3091,3 14.0001,5.691 14.0001,9 C14.0001,12.309 11.3091,15 8.0001,15 M8.0001,1 C3.5891,1 0.0001,4.589 0.0001,9 C0.0001,13.411 3.5891,17 8.0001,17 C12.4111,17 16.0001,13.411 16.0001,9 C16.0001,4.589 12.4111,1 8.0001,1"
        id="Fill-5"
      />
    )}
    {logo && (
      <g>
        <polygon
          id="Shape"
          points="152.9 0 193.25 69.95 152.9 139.85 72.15 139.85 61.7 121.75 131.9 0"
        />
        <polygon id="Shape" points="111.9 0 51.7 104.45 31.8 69.95 72.15 0" />
      </g>
    )}
  </svg>
);