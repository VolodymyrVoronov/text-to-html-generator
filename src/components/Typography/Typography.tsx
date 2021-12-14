import { FC, CSSProperties } from "react";

interface ITypographyProps {
  styles: CSSProperties;
}

const Typography: FC<ITypographyProps> = ({
  styles,
  children,
}): JSX.Element => {
  return <span style={{ ...styles }}>{children}</span>;
};

export default Typography;
