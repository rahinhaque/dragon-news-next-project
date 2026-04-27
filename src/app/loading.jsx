import React from 'react';

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <span className="loading loading-spinner loading-lg text-error"></span>
    </div>
  );
};

export default loading;