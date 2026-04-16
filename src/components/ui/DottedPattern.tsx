export default function DottedPattern() {
  return (
    <div
      className="
      absolute left-0 bottom-0
      w-full
      max-w-[890px]

      h-[160px]
      sm:h-[180px]
      lg:h-[222px]

          overflow-hidden
      z-0
      "
      style={{
        borderTop: "1px solid transparent",
        borderImage: "linear-gradient(to right, #14B8A6, #BDFF00) 1",
      }}
    >
      {/* gradient background */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-r
        from-[#1F6F64]
        via-[#173B4B]
        to-[#0B111D]
        "
      />

      {/* dots */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle,#14B8A6_1.6px,transparent_1.6px)]
        [background-size:14px_14px]
        sm:[background-size:16px_16px]
        lg:[background-size:18px_18px]
        opacity-50
        "
      />

      {/* fade effect */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-r
        from-transparent
        via-transparent
        to-[#0B111D]
        "
      />
    </div>
  );
}
