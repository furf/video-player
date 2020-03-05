export const formatTime = (duration: number): string => {
  const hours = Math.trunc(duration / 3600);
  const minutes = Math.trunc((duration % 3600) / 60);
  const seconds = Math.trunc(duration % 60);
  if (hours >  0) {
    return `${hours}:${padZero(minutes)}:${padZero(seconds)}`;
  }
  return `${minutes}:${padZero(seconds)}`;
};

export const formatDateTime = (duration: number): string => `PT${Math.round(duration)}S`;

export const padZero = (n: number): string => `${Math.abs(n) < 10 ? '0' : ''}${n}`;

