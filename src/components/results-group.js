
import classNames from 'classnames';
import { startCase } from 'lodash';

import TextExample from './text-example';

import './results-group.scss';


export default function ResultsGroup(props) {
	const {
		aaThreshold,
		aaaThreshold,
		backgroundHexValue,
		contrastRatio,
		foregroundHexValue,
		type,
	} = props;

	return (
		<div className="results-group">
			<div className="results-group__label">
				{startCase(type)} Text
			</div>
			<div className="results-group__wcag">
        <div>
          WCAG AA (≥ {aaThreshold}:1):{' '}
          <ResultsGroupAssessmentText
						hasPassingScore={contrastRatio >= aaThreshold}
					/>
        </div>
        <div>
  				WCAG AAA (≥ {aaaThreshold}:1):{' '}
          <ResultsGroupAssessmentText
						hasPassingScore={contrastRatio >= aaaThreshold}
					/>
        </div>
			</div>
			<TextExample
				{...{
					backgroundColor: backgroundHexValue,
					foregroundColor: foregroundHexValue,
					type,
				}}
			/>
		</div>
	);
}


function ResultsGroupAssessmentText({ hasPassingScore }) {
  const componentClass = classNames(
    'results-group__assessment-text',
    {
      'results-group__assessment-text--pass': hasPassingScore,
      'results-group__assessment-text--fail': !hasPassingScore,
    },
  )

  return (
    <strong className={componentClass}>
      {hasPassingScore ? 'Pass' : 'Fail'}
    </strong>
  );
}
