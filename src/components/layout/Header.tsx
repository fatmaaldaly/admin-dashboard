export default function Header() {
  return (
    <header className="flex h-16 items-center border-b border-gray-300 bg-white px-6">
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">Overview</h1>
        <p className="text-xs text-gray-500">
          Welcome back, here is what is happening today.
        </p>
      </div>
    </header>
  );
}
