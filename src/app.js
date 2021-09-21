
import { useState } from 'react';

import Background from './components/background';
import Body from './components/body';
import Card from './components/card';
import ColorFieldset from './components/color-fieldset';
import Footer from './components/footer';
import Heading from './components/heading';
import ResultsGroup from './components/results-group';
import { calculateContrastRatio } from './utils/color';

export default function App() {
  const [foregroundHexValue, setForegroundHexValue] = useState('#e6e6e6'),
        [backgroundHexValue, setBackgroundHexValue] = useState('#2e4d5e');

  const swapHexValues = e => {
    if (e) e.preventDefault();
    setForegroundHexValue(backgroundHexValue);
    setBackgroundHexValue(foregroundHexValue);
  };

  const contrastRatio = calculateContrastRatio([foregroundHexValue, backgroundHexValue]);

  return (
    <>
      {/* <header></header> */}
      <Background backgroundColor={backgroundHexValue} foregroundColor={foregroundHexValue} />
      <main>
        <div className="container text-center">
          <Heading backgroundColor={backgroundHexValue} foregroundColor={foregroundHexValue} />
          <Body backgroundColor={backgroundHexValue} foregroundColor={foregroundHexValue} />
          <Card label="Color Contrast Tool">
            <form onSubmit={e => e.preventDefault()}>
              <ColorFieldset hexValue={foregroundHexValue} updateHexValue={setForegroundHexValue} type="foreground" />
              <ColorFieldset hexValue={backgroundHexValue} updateHexValue={setBackgroundHexValue} type="background" />
              <button className="form__button" onClick={swapHexValues} type="button">
                Swap Colors
              </button>
            </form>
            <h2 className="sr-only">Results</h2>
            <p className="contrast-ratio" role="status">
              Contrast Ratio: <strong>{contrastRatio}</strong>:1
            </p>
            <div className="d-flex">
              <h3>Normal Text</h3>
              <ResultsGroup
                {...{
                  aaThreshold: 4.5,
                  aaaThreshold: 7.1,
                  backgroundHexValue,
                  contrastRatio,
                  foregroundHexValue,
                  type: 'normal'
                }}
              />
            </div>
            <div className="d-flex">
              <h3>Large Text</h3>
              <ResultsGroup
                {...{
                  aaThreshold: 3.1,
                  aaaThreshold: 4.5,
                  backgroundHexValue,
                  contrastRatio,
                  foregroundHexValue,
                  type: 'large'
                }}
              />
            </div>
          </Card>
        </div>
      </main>
      <Footer backgroundColor={backgroundHexValue} foregroundColor={foregroundHexValue} />
    </>
  );
}
