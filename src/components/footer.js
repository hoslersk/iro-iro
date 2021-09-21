
import './footer.scss';


export default function Footer({ backgroundColor, foregroundColor }) {
  return (
    <footer className="footer">
      <div className="container" style={{ color: backgroundColor }}>
        Created by{' '}
        <a
          className="footer__link"
          href="https://schylerhosler.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: backgroundColor }}
        >
          <span
            className="footer__link-text footer-link-text--default"
            style={{ color: backgroundColor }}
          >
            Schyler Hosler
          </span>
          <span
            aria-hidden
            className="footer__link-text footer__link-text--highlighted"
            style={{ color: foregroundColor }}
          >
            Schyler Hosler
          </span>
          <span className="footer__link-highlight" style={{ backgroundColor }}/>
        </a>
      </div>
    </footer>
  );
}
