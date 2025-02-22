export default function ScreenSizeIndicator() {
  return (
    <div className="fixed z-[1000] bottom-4 right-4 bg-gray-800 text-white py-2 px-4 rounded shadow">
      {/* Default: dibawah sm */}
      <div className="block sm:hidden">xs</div>
      {/* Breakpoint sm */}
      <div className="hidden sm:block md:hidden">sm</div>
      {/* Breakpoint md */}
      <div className="hidden md:block lg:hidden">md</div>
      {/* Breakpoint lg */}
      <div className="hidden lg:block xl:hidden">lg</div>
      {/* Breakpoint xl */}
      <div className="hidden xl:block 2xl:hidden">xl</div>
      {/* Breakpoint 2xl */}
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
