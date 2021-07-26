import logo from './logo.svg';

import joypixels from 'emoji-toolkit';
import './App.css';
import EmojiAsset from './EmojiAsset';
const App = () => {
  const emoji1 = (a, t) => {
    const output = `${joypixels.toImage(a)}<label>${t}$</label>`;
    console.log('output', output);
    return { __html: `${output}` };
  };
  return (
    <div>
      <div className='picker'>
        <span className='b' dangerouslySetInnerHTML={emoji1(':medal:', '10')} />
        <span
          className='b'
          dangerouslySetInnerHTML={emoji1(':zany_face:', '10')}
        />
        <span
          className='b'
          dangerouslySetInnerHTML={emoji1(':raised_hands:', '10')}
        />

        <span className='b' dangerouslySetInnerHTML={emoji1(':pray:', '10')} />
      </div>

      <div className='picker'>
        <span className='b' dangerouslySetInnerHTML={emoji1(':medal:', '10')} />
        <span
          className='b'
          dangerouslySetInnerHTML={emoji1(':zany_face:', '10')}
        />
        <span
          className='b'
          dangerouslySetInnerHTML={emoji1(':raised_hands:', '10')}
        />

        <span className='b' dangerouslySetInnerHTML={emoji1(':pray:', '10')} />
      </div>
    </div>
  );
};

export default App;
