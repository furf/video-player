import { formatDateTime, formatTime } from '../../lib/formatTime';

const Duration = ({ duration, ...rest }) => (
  <time dateTime={ formatDateTime(duration) } { ...rest }>
    { formatTime(duration) }
  </time>
);

export default Duration;