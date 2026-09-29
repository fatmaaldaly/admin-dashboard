"use client";

import ProductsTable from "@/components/products/ProductsTable";
import ProductsTableSkeleton from "@/components/products/ProductsTableSkeleton";
import { getProducts } from "@/services/dashboardServices";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PRODUCTS_PER_PAGE = 5;

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const router = useRouter();
  const pathname = usePathname();
  const categoryFilter = searchParams.get("category") ?? "all";
  const sort = searchParams.get("sort") ?? "default";

  // All fetched products
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  // Search + category filter
  const filteredProducts = (data?.products ?? []).filter((product) => {
    const matchsSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;

    return matchsSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") {
      return a.price - b.price;
    }

    if (sort === "price-desc") {
      return b.price - a.price;
    }

    if (sort === "stock-asc") {
      return a.stock - b.stock;
    }

    if (sort === "stock-desc") {
      return b.stock - a.stock;
    }

    return 0;
  });

  // Pagination
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    params.delete("page");

    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (sort === "default") {
      params.delete("sort");
    } else {
      params.set("sort", String(sort));
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  const categories = [
    ...new Set((data?.products ?? []).map((product) => product.category)),
  ].sort();

  const startItem = sortedProducts.length === 0 ? 0 : startIndex + 1;

  const endItem = Math.min(
    startIndex + currentProducts.length,
    sortedProducts.length,
  );

  if (isLoading) {
    return (
      <div className="p-10">
        <ProductsTableSkeleton />
      </div>
    );
  }

  if (isError || !data) {
    return <div>error fetching products</div>;
  }

  return (
    <div className="p-10">
      <div className="mb-4 flex justify-between">
        <p className="text-sm">
          {`Showing ${startItem} – ${endItem} of ${sortedProducts.length} products`}
        </p>
        <div className="flex gap-2">
          <select
            value={categoryFilter}
            onChange={(event) => handleCategoryChange(event.target.value)}
            className="cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="all" className="bg-white text-gray-700">
              Category: all
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0) + category.slice(1)}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(event) => handleSortChange(event.target.value)}
            className="cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="stock-asc">Stock: Low to High</option>
            <option value="stock-desc">Stock: High to Low</option>
          </select>
        </div>
      </div>

      <ProductsTable
        data={currentProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
