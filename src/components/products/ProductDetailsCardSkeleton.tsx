export default function ProductDetailsCardSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {/* Product card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Product image */}
          <div className="h-64 w-full animate-pulse rounded-xl bg-gray-200 md:w-64" />

          {/* Product information */}
          <div className="flex-1">
            {/* Category */}
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

            {/* Title */}
            <div className="mt-3 h-7 w-2/3 animate-pulse rounded bg-gray-200" />

            {/* Price */}
            <div className="mt-5 h-7 w-24 animate-pulse rounded bg-gray-200" />

            {/* Product details */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              {/* Heading */}
              <div className="h-6 w-36 animate-pulse rounded bg-gray-200" />

              {/* Description */}
              <div className="mt-3 space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
              </div>

              {/* Details grid */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Brand */}
                <div>
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                  <div className="mt-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
                </div>

                {/* Rating */}
                <div>
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                  <div className="mt-2 h-4 w-20 animate-pulse rounded bg-gray-200" />
                </div>

                {/* Discount */}
                <div>
                  <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
                  <div className="mt-2 h-4 w-16 animate-pulse rounded bg-gray-200" />
                </div>

                {/* Stock */}
                <div>
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />

                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                    <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="h-10 w-20 animate-pulse rounded-2xl bg-gray-200" />
    </div>
  );
}
