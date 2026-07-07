import { CSSProperties } from 'react';

interface ISkeletonProps {
  variant: 'card' | 'text' | 'circle';
  width?: CSSProperties['width'];
}

const variantClasses: Record<ISkeletonProps['variant'], string> = {
  card: 'h-full mb-1',
  text: 'h-4 mt-1 text-center',
  circle: 'aspect-square rounded-full',
};

export const Skeleton = ({ variant, width = '100%' }: ISkeletonProps) => {
  return (
    <div
      className={`h-auto w-full rounded animate-skeleton ${variantClasses[variant]}`}
      style={{ width }}
    />
  );
};
