import { Skeleton } from '@/components/skeleton';
import { ProductCardSkeleton } from './product-card-skeleton';

export const ProductListSkeleton = () => (
  <>
    <div className="overflow-hidden sm:px-16">
      <div className="flex -ml-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
    <div className="mt-3 flex w-full items-center justify-center gap-2">
      <Skeleton variant="circle" width="16px" />
      <Skeleton variant="circle" width="16px" />
      <Skeleton variant="circle" width="16px" />
    </div>
  </>
);
