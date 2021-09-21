
import './background.scss';

export default function Background({ backgroundColor = '#fff', foregroundColor = '#000' }) {
  return (
    <svg aria-hidden="true" className="background" height="100%" width="100%" id="background-gradient">
      <defs>
        <filter id="blur" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
        </filter>
        <linearGradient
          id="linear-gradient"
          x1="0%"
          y1="100%"
          x2="0%"
          y2="0%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={foregroundColor} />
          <stop offset="100%" stopColor={backgroundColor} />
        </linearGradient>
        <radialGradient
          id="radial-gradient"
          cx="50%"
          cy="50%"
          r="75%"
          fx="50%"
          fy="0"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor={backgroundColor} />
          <stop offset="100%" stopColor={foregroundColor} />
        </radialGradient>
      </defs>
      <rect
        className="background__radial-gradient"
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#radial-gradient)"
      />
      <rect
        className="background__linear-gradient"
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
}
