import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export default function ActivitiesSkeleton({ className }) {
  return (
    <div className={`grid ${className} gap-4 p-4`}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="relative overflow-hidden">
          {/* Card header skeleton */}
          {/* Top banner skeleton */}
          <div className=" absolute top-4 left-0 rounded-tr-full rounded-br-full">
            <Skeleton className="h-8 w-48 " />
          </div>

          {/* Main image skeleton */}
          <div className="relative h-[300px]">
            <Skeleton className="w-full aspect-[4/3] h-full" />
          </div>

          {/* Card footer skeleton */}
          <div className="p-4 absolute bottom-2 left-2 right-2 rounded-md bg-gray-400 opacity-30">
            <div className="w-full space-y-2">
              <Skeleton className="h-5 w-full" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
