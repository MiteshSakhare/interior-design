import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (options = {}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px',
    ...options
  });

  return [ref, inView];
};
