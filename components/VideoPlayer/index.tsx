import {
  createContext,
  useRef,
  useState,
} from 'react';
import ReactPlayer from 'react-player';

export const VideoContext = createContext(null);

const VideoPlayer = props => {
  const player = useRef(null);

  const [buffering, setBuffering] = useState(false);
  const [controls, setControls] = useState(false);
  const [duration, setDuration] = useState(0);
  const [light, setLight] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [loadedSeconds, setLoadedSeconds] = useState(0);
  const [loop, setLoop] = useState(false);
  const [muted, setMuted] = useState(false);
  const [pip, setPip] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [played, setPlayed] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [url, setUrl] = useState(props.url);
  const [volume, setVolume] = useState(0.8);

  const context = {
    buffering,
    controls,
    duration,
    light,
    loaded,
    loadedSeconds,
    loop,
    muted,
    pip,
    playbackRate,
    played,
    playedSeconds,
    playing,
    url,
    volume,
    setControls,
    setLight,
    setLoop,
    setMuted,
    setPlaybackRate,
    setPlaying,
    setUrl,
    setVolume,
  };
  
  return (
    <div style={ { width: '400px' }}>
      <ReactPlayer
        className='react-player'
        controls={ controls }
        height='100%'
        light={ light }
        loop={ loop }
        muted={ muted }
        pip={ pip }
        playbackRate={ playbackRate }
        playing={ playing }
        progressInterval={ 1000 }
        ref={ player }
        url={ props.url }
        volume={ volume }
        width='100%'
        onBuffer={ () => setBuffering(true) }
        onBufferEnd={ () => setBuffering(false) }
        onDisablePIP={ () => setPip(false) }
        onDuration={ duration => setDuration(duration) }
        onEnablePIP={ () => setPip(true) }
        onEnded={ () => setPlaying(loop) }
        onError={ console.error.bind(console) }
        onPause={ () => setPlaying(false) }
        onPlay={ () => setPlaying(true) }
        onProgress={ ({
          loaded,
          loadedSeconds,
          played,
          playedSeconds,
        }) => {
          setLoaded(loaded);
          setLoadedSeconds(loadedSeconds);
          setPlayed(played);
          setPlayedSeconds(playedSeconds);
        } }
        onReady={ () => console.log('onReady') }
        onSeek={ e => console.log('onSeek', e) }
        onStart={ () => console.log('onStart') }
      />
      <VideoContext.Provider value={ context }>
        { props.children }
      </VideoContext.Provider>
    </div>
  );
};

export default VideoPlayer;