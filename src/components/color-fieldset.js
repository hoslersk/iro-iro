
import { useState } from 'react';
import { startCase, sum, values } from 'lodash'; // @TODO: use lodash-es


import ColorPicker from './color-picker';
import HexInput from './hex-input';
import { convertHexToRgb, convertHslToRgb, convertRgbToHex, convertRgbToHsl } from '../utils/color';

import './color-fieldset.scss';


export default function ColorFieldset({ hexValue, updateHexValue, type }) {
	const [userInputValue, setUserInputValue] = useState(hexValue);

	const [hasError, setHasError] = useState(false);
	//
	// const textInputValue = useMemo(() => {
	// 	setUserInputValue(hexValue);
	// }, [hexValue]);

  const baseClass = 'color-fieldset';
	const colorFieldsetClass = baseClass;
	const legendClass = `${baseClass}__legend`;
	const labelClass = `${baseClass}__label`;
	const inputClass = `${baseClass}__input`;
	const rowClass = `${baseClass}__row`;
	const lightnessGradientClass = `${baseClass}__lightness-gradient`;

	const legendText = startCase(type); // `${startCase(type)} Color`,
  const hexId = `${type}-hex`;
  const pickerId = `${type}-picker`;
  const lightnessId = `${type}-lightness`;

	const rgbValue = convertHexToRgb(hexValue);
	const hslValue = convertRgbToHsl(rgbValue);

	const onChange = e => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.target.value);
		setUserInputValue(e.target.value);
		if (!result) setHasError(true);
		if (result) {
			setHasError(false);
			updateHexValue(e.target.value);
		}
	};

	const rgbSum = sum(values(rgbValue));

	const isBlack = rgbSum === 0;
	const isWhite = rgbSum === (255 * 3);
	const isColor = !isBlack && !isWhite;

	const style = {
		background: `linear-gradient(
			to right,
			rgb(0, 0, 0),
			${isColor ? `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b}),` : ''}
			rgb(255, 255, 255)
		)`,
	};

	const updateLightness = e => {
		const newLuminosity = e.target.value,
					adjustedHslValue = {...hslValue, ...{ l: newLuminosity }},
					newRgbValue = convertHslToRgb(adjustedHslValue),
					newHexValue = convertRgbToHex(newRgbValue);

		updateHexValue(newHexValue);
	}

  return (
    <fieldset className={colorFieldsetClass}>
			<legend className={legendClass}>{legendText}</legend>
			<div className={labelClass}>Color</div>
			<div className={rowClass}>
				<ColorPicker id={pickerId} onChange={onChange} value={hexValue} />
				<HexInput id={hexId} onChange={onChange} value={userInputValue} hasError={hasError} />
			</div>

      <label className={labelClass} htmlFor={lightnessId}>Lightness</label>
      <input className={inputClass} id={lightnessId} value={hslValue.l} min="0" max="100" onChange={updateLightness} step="1" type="range" />
      <div className={lightnessGradientClass} style={style} />
    </fieldset>
  );
}
