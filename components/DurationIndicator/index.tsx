import withContext from '../../hoc/withContext';
import { VideoContext } from '../VideoPlayer';
import Duration from '../Duration';

const withVideoContext = withContext(VideoContext, ['duration']);

const DurationIndicator = ({ duration, ...rest }) => (
  <Duration duration={ duration } { ...rest } />
);

export default withVideoContext(DurationIndicator);