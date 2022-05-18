import { Flexbox, Modal, Menu, MenuItem, Text } from "@sede-x/shell-ds-react-framework";
import styled from 'styled-components';

interface ITnsFilteredQuotesModal {
    openFilteredQuotes: boolean;
    onClose:() => void;
    onQuoteSelection?: (value: any) => void;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
}

const TnsFilteredQuotesModal = ({ 
    openFilteredQuotes = false,
    onQuoteSelection,
    onClose,
    onPrimaryClick,
    onSecondaryClick
}: ITnsFilteredQuotesModal): JSX.Element => {
    return (
        <Modal
            open={openFilteredQuotes}
            description="Please select Quotes/Prices from the list"
            onClose={onClose}
            title="Filtered Quotes/Prices"
            showFooter={false}
        >
            <FilteredQuotesMainContainer>
                <FilteredQuotesMenu mode='vertical'>
                    <FilteredQuotedMenuItem>
                        <Text size="small">APSCAN_AG_Premia_1</Text>
                    </FilteredQuotedMenuItem>
                    <FilteredQuotedMenuItem>
                        <Text size="small">APSCAN_AG_Premia_2</Text>
                    </FilteredQuotedMenuItem>
                    <FilteredQuotedMenuItem>
                        <Text size="small">APSCAN_AG_Premia_3</Text>
                    </FilteredQuotedMenuItem>
                    <FilteredQuotedMenuItem>
                        <Text size="small">APSCAN_AG_Premia_4</Text>
                    </FilteredQuotedMenuItem>
                </FilteredQuotesMenu>
            </FilteredQuotesMainContainer>
        </Modal>
        
    )
}

export default TnsFilteredQuotesModal;

const FilteredQuotesMainContainer = styled(Flexbox)`
    flex-direction: column;
`;

const FilteredQuotesMenu = styled(Menu)`
`;

const FilteredQuotedMenuItem = styled(MenuItem)`
    border-bottom: 2px solid #ddd !important;
    margin: 5px 0px;
`;