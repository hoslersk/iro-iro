
import classNames from 'classnames';

import './hex-input.scss';


export default function HexInput({ hasError, hexValue, id, onChange, value }) {

  const helpTextClass = classNames(
		'hex-input__help-text',
		{ 'hex-input__help-text--active': hasError },
	);

  return (
    <div className="hex-input">
      <label className="hex-input__label sr-only" htmlFor={id}>
        Hex Value
      </label>
      <input
        className="hex-input__input"
        id={id}
        maxLength="7"
        onChange={onChange}
        required
        type="text"
        value={hexValue || value}
        size="7"
      />
      <span className={helpTextClass}>
        Enter valid hex value (Example: #ffffff)
      </span>
    </div>
  );
}
