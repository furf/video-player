import CurrentTimeIndicator from '../CurrentTimeIndicator';
import DurationIndicator from '../DurationIndicator';
import VideoPlayer from '../VideoPlayer';
import PlaybackToggle from '../PlaybackToggle';

const CustomPlayer = props => {
  return (
    <VideoPlayer { ...props }>
      <PlaybackToggle />
      <CurrentTimeIndicator /> /
      <DurationIndicator />
    </VideoPlayer>
  );
};

export default CustomPlayer;