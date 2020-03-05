import withContext from '../../hoc/withContext';
import { VideoContext } from '../VideoPlayer';

const withVideoContext = withContext(VideoContext, ['playing', 'setPlaying']);

const PlaybackToggle = ({ playing, setPlaying, ...rest }) => (
  <button onClick={ () => setPlaying(!playing) } { ...rest } >
    { playing ? 'Pause' : 'Play' }
  </button>
);

export default withVideoContext(PlaybackToggle);