
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';

import './color-picker.scss';


export default function ColorPicker({ id, onChange, value }) {
  return (
    <div className="color-picker">
      <label className="color-picker__label" htmlFor={id}>
        <span className="sr-only">Color Picker</span>
      </label>
      <input className="color-picker__input" id={id} onChange={onChange} type="color" value={value} />
      <FontAwesomeIcon className="color-picker__icon" icon={faEyeDropper} />
    </div>
  );
}
