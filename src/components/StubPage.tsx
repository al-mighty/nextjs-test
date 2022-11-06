import Link from "next/link";

export const StubPage=()=>{
    return <div className={'container'}>
        <Link href={'/results'}>
            Вернуться к результатам лабораторных исследований
        </Link>
    </div>
}