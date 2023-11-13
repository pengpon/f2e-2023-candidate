import { ReactSVG } from "react-svg";

export default function Icon({content}) {
  return (
    <>
      <span className="icon">
        <ReactSVG src={`./icons/${content}.svg`} />
      </span>
    </>
  )
}