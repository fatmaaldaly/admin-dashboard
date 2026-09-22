interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  switch (status) {
    case "paid":
      return (
        <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
          Paid
        </div>
      );

    case "pending":
      return (
        <div className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-600">
          Pending
        </div>
      );

    case "refunded":
      return (
        <div className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-500">
          Refunded
        </div>
      );

    default:
      return (
        <div className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {status}
        </div>
      );
  }
}
