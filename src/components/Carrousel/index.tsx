import { useCarousel } from '@/hooks/useCarrousel';
import {
  CarouselWrapper,
  Slides,
  Slide,
  Arrows,
  ArrowButton,
} from './styles';
import { CarouselProps } from './types';



export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = false,
  interval = 3000,
  showArrows = true,
  className = '',
}) => {
  const total = children.length;

  const { current, next, prev } = useCarousel({
    total,
    autoPlay,
    interval,
  });

  return (
    <CarouselWrapper className={className}>
      <Slides current={current}>
        {children.map((child, index) => (
          <Slide key={index}>{child}</Slide>
        ))}
      </Slides>

      {showArrows && (
        <Arrows>
          <ArrowButton onClick={prev}>‹</ArrowButton>
          <ArrowButton onClick={next}>›</ArrowButton>
        </Arrows>
      )}
    </CarouselWrapper>
  );
};
