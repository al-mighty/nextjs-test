import Link from "next/link";
import {StyledContainer} from "./Container";

export const StubPage=()=>{
    return <StyledContainer>
        <Link href={'/results'}>
            Вернуться к результатам лабораторных исследований
        </Link>
    </StyledContainer>
}