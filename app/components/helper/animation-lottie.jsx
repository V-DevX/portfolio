// app/components/helper/animation-lottie.jsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import lottie-react so it never runs on the server
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

/**
 * A wrapper around lottie-react that only loads on the client.
 */
const AnimationLottie = ({ animationPath, width = '100%' }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width,
      margin: '0 auto',
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
