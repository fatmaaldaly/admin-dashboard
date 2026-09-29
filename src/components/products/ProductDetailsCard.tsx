import Image from "next/image";
import { Product } from "@/types/overview";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProductDetailsCardProps {
  product: Product;
}

export default function ProductDetailsCard({
  product,
}: ProductDetailsCardProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Product image */}
          <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-100 md:w-64">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-contain p-4"
            />
          </div>

          {/* Product information */}
          <div className="flex-1">
            <p className="mb-2 text-sm font-medium capitalize text-gray-500">
              {product.category}
            </p>

            <h1 className="text-2xl font-semibold text-gray-900">
              {product.title}
            </h1>

            <p className="mt-4 text-2xl font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>

            {/* product details */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Product Details
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {product.description}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-500">Brand</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.brand}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.rating} / 5
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Discount</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.discountPercentage.toFixed(1)}%
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Stock</p>

                  <div className="mt-1 flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-900">
                      {product.stock} units
                    </p>

                    <span
                      className={`w-fit rounded-full px-2 py-1 text-xs font-medium ${
                        product.stock < 10
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {product.stock === 0
                        ? "Out of stock"
                        : product.stock < 10
                          ? "Low stock"
                          : "In stock"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => router.back()}
        className="flex h-10 w-fit cursor-pointer items-center gap-1 rounded-2xl border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
      >
        <ArrowLeft size={16} />
        Back
      </button>
    </div>
  );
}
