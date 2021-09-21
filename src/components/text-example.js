
import classNames from 'classnames';

import './text-example.scss';


export default function TextExample({ backgroundColor, foregroundColor, type }) {
	const baseClass = 'text-example',
				textExampleClass = classNames(
					baseClass,
					{ [`${baseClass}--${type}`]: type },
				),

				style = {
					backgroundColor: backgroundColor,
					color: foregroundColor,
				};

	return (
		<div className={textExampleClass} style={style}>
			The quick brown fox jumps over the lazy dog
		</div>
	);
}
