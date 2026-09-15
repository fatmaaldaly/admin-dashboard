interface InitialsBadgeProps {
  name: string;
}

export default function InitialsBadge({ name }: InitialsBadgeProps) {
  return (
    <div className="w-9 h-9 rounded-full border border-gray-300 font-medium bg-blue-100 flex items-center justify-center text-sm">
      {name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()}
    </div>
  );
}
