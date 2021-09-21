
import './body.scss';

export default function Body({ backgroundColor = '#fff', foregroundColor = '#000' }) {
  return (
    <p className="body" style={{ color: foregroundColor }}>
      a color contrast tool
    </p>
  );
}
