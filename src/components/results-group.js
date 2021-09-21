
import classNames from 'classnames';

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

	const baseClass = 'results-group',
				resultsGroupClass = baseClass,
				wcagResultsClass = `${baseClass}__wcag`;

	return (
		<div className={resultsGroupClass}>
			<div className={wcagResultsClass}>
        <div>
          WCAG AA (≥ {aaThreshold}:1):{' '}
          <ResultsGroupAssessmentText hasPassingScore={contrastRatio >= aaThreshold} />
        </div>
        <div>        
  				WCAG AAA (≥ {aaaThreshold}:1):{' '}
          <ResultsGroupAssessmentText hasPassingScore={contrastRatio >= aaaThreshold} />
        </div>
			</div>
			<TextExample {...{ backgroundColor: backgroundHexValue, foregroundColor: foregroundHexValue, type }} />
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
