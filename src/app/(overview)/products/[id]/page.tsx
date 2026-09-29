"use client";

import ProductDetailsCard from "@/components/products/ProductDetailsCard";
import ProductDetailsCardSkeleton from "@/components/products/ProductDetailsCardSkeleton";
import { getProductById } from "@/services/dashboardServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams();

  const productId = params.id as string;

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  if (isLoading) {
    return (
      <div className="p-10">
        <ProductDetailsCardSkeleton />
      </div>
    );
  }

  if (isError || !product) {
    return <div className="p-10">Failed to load product.</div>;
  }

  return (
    <div className="p-10">
      <ProductDetailsCard product={product} />
    </div>
  );
}
