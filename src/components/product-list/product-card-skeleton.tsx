import { Skeleton } from '@/components/skeleton';

export const ProductCardSkeleton = () => (
  <div className="product-carousel-item pl-4">
    <div className="flex h-75 w-full flex-col items-center rounded-2xl bg-zinc-800 p-3">
      <Skeleton variant="card" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="50%" />
    </div>
  </div>
);
