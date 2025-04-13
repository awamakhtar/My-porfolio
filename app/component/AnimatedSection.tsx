import React, { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

type Direction = 'up' | 'down' | 'left' | 'right'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: string
  direction?: Direction
}

const getTransformClasses = (inView: boolean, direction: Direction) => {
    const transform = {
        up: 'translate-y-12',
        down: '-translate-y-12',
        left: 'translate-x-12',
        right: '-translate-x-12',
      }
    
      return inView
        ? 'opacity-100 translate-x-0 translate-y-0'
        : `opacity-0 ${transform[direction]}`
  
  
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = '',
  direction = 'up',
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const transformClass = getTransformClasses(inView, direction)

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out transform ${delay} ${className} ${transformClass}`}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
