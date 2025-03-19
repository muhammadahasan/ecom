import { Skeleton } from "@/components/ui/skeleton";

export default function DestinationsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="relative h-28 rounded-lg overflow-hidden">
          <Skeleton className="w-full h-full" />
          <div className="absolute inset-0 p-6 flex justify-between items-center ">
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-36 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
