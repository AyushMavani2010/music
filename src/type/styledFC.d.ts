import { FC } from "react";
type StyledFC<P = {}> = FC<P & { style?: React.CSSProperties | undefined }>;