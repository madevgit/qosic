export default function Pretitle({
  dataName,
  iconStyle = false,
  titleStyle = false,
}) {
  return (
    <div
      className={`"mb-2 md:mb-4 flex items-center ${
        iconStyle ? iconStyle : ""
      }`}
    >
      <i className="fi fi-rr-arrow-left inline-block hidden" />
      <h4
        className={`inline-block ml-2 text-opacity-70 ${
          titleStyle ? titleStyle : "text-qosblue"
        }`}
      >
        {" "}
        {dataName}{" "}
      </h4>
    </div>
  );
}
