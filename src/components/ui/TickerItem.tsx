
const TickerItem = ({ text, img }) => (
  <div className="flex items-center justify-center lg:justify-start gap-4">

    <div className="rounded-xl overflow-hidden flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
      <img src={img} alt={text} className="w-full h-full object-contain" />
    </div>

    <span
      className="text-navy-dark font-['DM_Sans']"
      style={{
        fontSize: "clamp(26px,4vw,40px)",
        fontWeight: "500",
        fontStyle: "normal",
      }}
    >
      {text}
    </span>

  </div>
);

export default TickerItem;