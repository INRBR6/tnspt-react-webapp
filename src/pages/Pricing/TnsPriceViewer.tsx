import { useState } from 'react';
import { 
    Tabs, 
    Text,
    TabPane, 
    Flexbox,
    Button
} from '@sede-x/shell-ds-react-framework';
import styled from 'styled-components';
import {
    TnsSelectedQuotePricesModal,
    TnsFilteredQuotesModal
} from "../../modals";
import { priceViewerSections } from '../../constants/priceViewer';

const TnsPriceViewerPage = (): JSX.Element => {
    const [openSelectedQuotes, setOpenSelectedQuotes] = useState(false);
    const [openFilteredQuotes, setOpenFilteredQuotes] = useState(false);

    return (
        <PriceViewerTabs defaultActiveKey="A">
            {priceViewerSections.map(section => {
                const { title, PageComponent } = section;
                return (
                    <PriceViewTabPane key={title} tab={<Text size='small'>{title}</Text>}>
                        <PriceViewerContentContainer>
                            <PageComponent />
                            <ButtonContainer>
                                <QuoteButton
                                    size="small"
                                    variant="outlined"
                                    onClick={() => setOpenSelectedQuotes(!openSelectedQuotes)}
                                >
                                    View Selected Quotes/Prices
                                </QuoteButton>
                                <QuoteButton
                                    size="small"
                                    variant="filled"
                                    onClick={() => setOpenFilteredQuotes(!openFilteredQuotes)}
                                >
                                    Search for Quotes
                                </QuoteButton>
                            </ButtonContainer>
                            <TnsSelectedQuotePricesModal 
                                openQuotePrices={openSelectedQuotes}
                                onClose={() => setOpenSelectedQuotes(!openSelectedQuotes)}
                            />
                            <TnsFilteredQuotesModal 
                                openFilteredQuotes={openFilteredQuotes}
                                onClose={() => setOpenFilteredQuotes(!openFilteredQuotes)}
                            />
                        </PriceViewerContentContainer>
                    </PriceViewTabPane>
                )
            })}
        </PriceViewerTabs>
    )
};

export default TnsPriceViewerPage;

const PriceViewerContentContainer = styled(Flexbox)`
    padding: 15px;
`;

const PriceViewerTabs = styled(Tabs)`
    margin:10px 0px;
`;

const PriceViewTabPane = styled(TabPane)``;

const ButtonContainer = styled(Flexbox)`
    flex-direction: row;
    align-content: flex-end;
    justify-content: center;
    vertical-align:middle;
    border-top:1px solid #ddd;
    position:fixed;
    bottom:0px;
    width:100%;
`;

const QuoteButton = styled(Button)`
    margin: 5px;
`;