import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { Button } from '@/components/button';

interface CarouselArrowButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
}

export const CarouselArrowButton = ({
  direction,
  onClick,
  disabled,
}: CarouselArrowButtonProps) => {
  const isPrev = direction === 'prev';

  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 cursor-pointer rounded-full border-white bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 disabled:cursor-not-allowed disabled:opacity-40 sm:flex ${isPrev ? 'left-2' : 'right-2'}`}
    >
      {isPrev ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </Button>
  );
};
