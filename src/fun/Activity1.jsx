import React, { useEffect } from 'react';

const Activity1Page = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'ParticleEffect.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="container">
      <script src="ParticleEffect.js"></script>
    </div>
  );
};

export default Activity1Page;
