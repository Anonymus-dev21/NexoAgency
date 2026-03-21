import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const OptimizedImage = ({ src, alt, className, priority = false, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  const shouldLoad = priority || isInView;

  const { imgClassName, ...rest } = props;

  return (
    <div ref={ref} className={`relative overflow-hidden aspect-video bg-white/5 ${className}`}>
      {shouldLoad && (
        <motion.img
          src={src}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover ${imgClassName || ''}`}
          {...rest}
        />
      )}
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-white/3 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
