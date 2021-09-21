
import './heading.scss';

export default function Heading({ backgroundColor = '#fff', foregroundColor = '#000' }) {
  return (
    <h1 className="heading" style={{ color: foregroundColor }}>
      iro-iro
    </h1>
  );
}
