import styled, { css } from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const Slides = styled.div<{ current: number }>`
  display: flex;
  transform: ${({ current }) => `translateX(-${current * 100}%)`};
  transition: transform 0.5s ease;
`;

export const Slide = styled.div`
  min-width: 100%;
  flex-shrink: 0;
  transition: opacity 0.5s ease;
`;

export const Arrows = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const ArrowButton = styled.button`
  pointer-events: all;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;
