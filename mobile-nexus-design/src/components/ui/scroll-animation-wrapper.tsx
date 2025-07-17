
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  delay?: number;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className,
  animation = 'fadeIn',
  delay = 0
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    fadeIn: 'animate-fade-in',
    slideInLeft: 'animate-slide-in-left',
    slideInRight: 'animate-slide-in-right',
    scaleIn: 'animate-scale-in'
  };

  return (
    <div
      // @ts-ignore - ref is properly typed
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? animationClasses[animation] : 'opacity-0 translate-y-8',
        className
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : undefined
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
