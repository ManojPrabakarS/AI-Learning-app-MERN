import React from 'react'
import { RingLoader } from 'react-spinners'

const Spinner = ({
  color = '#8424FE',
  size = 100,
  loading = true,
  fullScreen = false,
}) => {
  const loaderProps = { color, size, loading };

  const containerClass = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-white/50 z-50'
    : 'flex items-center justify-center';

  return (
    <div className={containerClass}>
      <RingLoader {...loaderProps} />
    </div>
  );
};

export default Spinner
