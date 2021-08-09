import logo from './logo.svg';

import joypixels from 'emoji-toolkit';
import './App.css';
import EmojiAsset from './EmojiAsset';
import { useState } from 'react';
const App = () => {
  const emoji1 = (a, t) => {
    const output = `${joypixels.toImage(a)}<label>${t}$</label>`;
    console.log('output', output);
    return { __html: `${output}` };
  };
  const [show, setshow] = useState(false);
  return (
    <div className='mainContainer'>
      <div className='container'>
        <span
          className='b'
          dangerouslySetInnerHTML={emoji1(':medal:', '10')}
          onClick={() => {
            setshow(!show);
          }}
        />
        {show ? (
          <div>
            <div className='picker'>
              <span
                className='b'
                dangerouslySetInnerHTML={emoji1(':medal:', '10')}
              />
              <span
                className='b'
                dangerouslySetInnerHTML={emoji1(':zany_face:', '10')}
              />
              <span
                className='b'
                dangerouslySetInnerHTML={emoji1(':raised_hands:', '10')}
              />

              <span
                className='b'
                dangerouslySetInnerHTML={emoji1(':pray:', '10')}
              />
            </div>
            <div className='picker'>
              <span
                className='b'
                dangerouslySetInnerHTML={emoji1(':medal:', '10')}
              />
              <span
                className='b'
                dangerouslySetInnerHTML={emoji1(':zany_face:', '10')}
              />
              <span
                className='b'
                dangerouslySetInnerHTML={emoji1(':raised_hands:', '10')}
              />

              <span
                className='b'
                dangerouslySetInnerHTML={emoji1(':pray:', '10')}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
