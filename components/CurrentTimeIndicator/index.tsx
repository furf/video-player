import withContext from '../../hoc/withContext';
import Duration from '../Duration';
import { VideoContext } from '../VideoPlayer';

const withVideoContext = withContext(VideoContext, ['playedSeconds']);

const CurrentTimeIndicator = ({ playedSeconds, ...rest }) => (
  <Duration duration={ playedSeconds } { ...rest } />
);

export default withVideoContext(CurrentTimeIndicator);
