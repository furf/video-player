import { useState } from 'react';
import Head from 'next/head';
import CustomPlayer from '../components/CustomPlayer';

const urls = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://watch.redd.it/hls/b22c7b08-2e01-467f-ba9a-adc10b166e16/index.m3u8',
  'https://www.youtube.com/watch?v=kVkT2VySizA',
];

const HomePage = () => {
  const [url, setUrl] = useState(urls[0]);
  const handleChange = event => setUrl(event.target.value);

  return (
    <div className="container">
      <Head>
        <title>Video Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main>
        <CustomPlayer url={ url } />
        <select onChange={ handleChange }>
          { urls.map(u => (
            <option selected={ u === url }>{ u }</option>
          )) }
        </select>
      </main>
    </div>
  );  
};

export default HomePage;
