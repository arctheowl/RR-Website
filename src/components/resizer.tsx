import screenshotReporting from "../images/screenshots/reporting.png";
import Image from "next/image";
import screenshotVatReturns from "../images/screenshots/vat-returns.png";
import {
  Container as ResizeContainer,
  Section,
  Bar,
} from "react-simple-resizer";

type Props = {};

const containerStyle = {
  height: "75vh",
  userSelect: "none",
  fontSize: "16px",
  fontFamily: "sans-serif",
  textAlign: "center",
  whiteSpace: "nowrap",
};

const resizer = (props: Props) => {
  return (
    <ResizeContainer style={containerStyle}>
      <div className="absolute z-0">
        <Image src={screenshotReporting} width={1115} height={750} />
      </div>

      <Section className="bg-red-300" />
      <Bar className="bg-gray-400" size={10} />
      <Section className="z-10 resize-none bg-blue-300"></Section>
    </ResizeContainer>
  );
};

export default resizer;
