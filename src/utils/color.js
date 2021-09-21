
import { forEach, map, sortBy } from 'lodash'; // @TODO: use lodash-es

export function calculateContrastRatio(valuesArray) {
	const orderedLuminances = sortBy(map(valuesArray, calculateLuminance)),
				ratio = (orderedLuminances[1] + 0.05) / (orderedLuminances[0] + 0.05);

	return ratio.toFixed(2);
}


export function convertHexToRgb(hexString) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
	if (!result) return null;
	return {
		r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
	};
}


export function convertRgbToHex(rgbObject) {
	const generateHexString = ({ r, g, b }) => (`#${r}${g}${b}`);
	const hexObject = {};

	forEach(rgbObject, (rgbValue, key) => {
		let hexValue = rgbValue.toString(16);
		if (hexValue.length === 1) {
			hexValue = `0${hexValue}`;
		}
		hexObject[key] = hexValue;
	});

	return generateHexString(hexObject);
}


export function convertRgbToHsl(rgbObject) { // https://stackoverflow.com/questions/39118528/rgb-to-hsl-conversion
	const scaledRed = rgbObject.r / 255,
				scaledGreen = rgbObject.g / 255,
				scaledBlue = rgbObject.b / 255,
				orderedColors = sortBy([scaledRed, scaledGreen, scaledBlue]),
				min = orderedColors[0],
				max = orderedColors[2],
				chroma = max - min,
				luminosity = (max + min) / 2;

	let hue = 0,
			saturation = 0,
			segment,
			shift;

	if (chroma !== 0) {
		saturation = chroma / (1 - Math.abs(2 * luminosity - 1));
		switch(max) {
			case scaledRed:
				segment = (scaledGreen - scaledBlue) / chroma;
				shift = 0 / 60; // R° / (360° / hex sides)
				if (segment < 0) {  // hue > 180, full rotation
					shift = 360 / 60; // R° / (360° / hex sides)
				}
				hue = segment + shift;
				break;
			case scaledGreen:
				segment = (scaledBlue - scaledRed) / chroma;
				shift = 120 / 60; // G° / (360° / hex sides)
				hue = segment + shift
				break;
			case scaledBlue:
				segment = (scaledRed - scaledGreen) / chroma;
				shift = 240 / 60; // B° / (360° / hex sides)
				hue = segment + shift
				break;
		}
	}

	return {
		h: hue * 60, // hue is in [0,6], scale it up...
		s: saturation * 100,
		l: luminosity * 100,
	};
}


export function convertHslToRgb(hslObject) {
	// https://css-tricks.com/converting-color-spaces-in-javascript/
	const hue = hslObject.h,
				scaledHue = hue / 60,
				scaledSaturation = hslObject.s / 100,
				scaledLuminosity = hslObject.l / 100;

	let chroma = (1 - Math.abs(2 * scaledLuminosity - 1)) * scaledSaturation,
			secondary = chroma * (1 - Math.abs(scaledHue % 2 - 1)),
			lightness = scaledLuminosity - chroma / 2,
			r = 0,
			g = 0,
			b = 0;

	if (0 <= hue && hue < 60) {
    r = chroma;
		g = secondary;
		b = 0;
  } else if (60 <= hue && hue < 120) {
    r = secondary;
		g = chroma;
		b = 0;
  } else if (120 <= hue && hue < 180) {
    r = 0;
		g = chroma;
		b = secondary;
  } else if (180 <= hue && hue < 240) {
    r = 0;
		g = secondary;
		b = chroma;
  } else if (240 <= hue && hue < 300) {
    r = secondary;
		g = 0;
		b = chroma;
  } else if (300 <= hue && hue < 360) {
    r = chroma;
		g = 0;
		b = secondary;
  }

	return {
		r: Math.round((r + lightness) * 255),
		g: Math.round((g + lightness) * 255),
		b: Math.round((b + lightness) * 255),
	};
}


export function calculateLuminance(hexString) {
    const rgbColor = convertHexToRgb(hexString);
    const r = rgbColor.r,
					g = rgbColor.g,
					b = rgbColor.b;

    const a = [r, g, b].map(function(v) {
        v /= 255;
        return (v <= 0.03928) ?
            v / 12.92 :
            Math.pow(((v + 0.055) / 1.055), 2.4);
    });

    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};
