import { Product } from "@/types/overview";
import Pagination from "../Pagination";

interface ProductsTableProps {
  data: Product[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductsTable({
  data,
  currentPage,
  totalPages,
  onPageChange,
}: ProductsTableProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm">
      <div className="mt-4 overflow-x-auto p-2">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 text-left text-sm">
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Stock</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-10 text-center text-sm text-gray-500"
                >
                  No products found.
                </td>
              </tr>
            ) : (
              data.map((product) => (
                <tr
                  key={product.id}
                  className="cursor-pointer border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                >
                  <td className="px-4 py-4 text-sm">{product.title}</td>

                  <td className="px-4 py-4 text-sm">{product.category}</td>

                  <td className="px-4 py-4 text-sm">
                    ${product.price.toLocaleString()}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-600">
                    <div className="flex flex-col gap-1">
                      <span>{product.stock} units</span>

                      <span
                        className={`w-fit rounded-full px-2 py-1 text-xs font-medium ${
                          product.stock < 10
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {product.stock < 10 ? "Low stock" : "In stock"}
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
