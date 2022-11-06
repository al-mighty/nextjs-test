import {StyledContainer} from "../../src/components/Container";
import SelectedParams from "./components/Filter";
import Chart from "./components/Chart";
import dynamic from 'next/dynamic'

const ChartWithNoSSR = dynamic(() => import('./components/Chart'), {
    ssr: false
})

// export default () => <DynamicComponentWithNoSSR />

const LaboratoryResultsPage = () => {
    return (
        <div>
            <StyledContainer>
                <h1>Результаты лабораторных исследований</h1>
                <SelectedParams/>
            </StyledContainer>
            <StyledContainer>
                <h2>Изменение уровня холестерина по годам</h2>
                <ChartWithNoSSR/>
            </StyledContainer>
        </div>
    )
}

export default LaboratoryResultsPage