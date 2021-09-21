
import { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';

import './card.scss';

// @TODO: Add easter eggs when clicking on mock buttons
export default function Card({ children, label = 'Color Contrast Tool' }) {
  const [isMinimized, setIsMinimized] = useState(false);

  const componentClass = classNames(
    'card',
    {
      'card--minimized': isMinimized,
    },
  );

  return (
    <div className={componentClass}>
      <div className="card__mock-bar">
        <div className="card__mock-buttons">
          <div className="card__mock-button card__mock-button--close">
            <FontAwesomeIcon className="card__icon" icon={faTimes} />
          </div>
          <div className="card__mock-button card__mock-button--minimize" onClick={() => setIsMinimized(true)}>
            <FontAwesomeIcon className="card__icon" icon={faMinus} />
          </div>
          <div className="card__mock-button card__mock-button--maximize">
            <FontAwesomeIcon className="card__icon" icon={faSort} />
          </div>
        </div>
        <div className="card__label">
          Color Contrast Tool
        </div>
      </div>
      <div className="card__content">
        {children}
      </div>
    </div>
  );
}
