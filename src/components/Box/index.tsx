import { ReactNode } from "react";
import { ContainerBox } from "./styles";

interface ChildrenProps {
    children: ReactNode;
}
export function Box({children}: ChildrenProps) {
    return(
        <ContainerBox>{children}</ContainerBox>
    )
}