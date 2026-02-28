import React from 'react'
import { RingLoader } from 'react-spinners'

// simplified spinner: ring loader only, color/size/loading/fullScreen props
const Spinner = ({
  color = '#a32bc3',
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
