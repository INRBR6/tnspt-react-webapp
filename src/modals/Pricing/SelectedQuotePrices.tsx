import { Modal, Text, Flexbox, Checkbox, Table, Grid, Select } from "@sede-x/shell-ds-react-framework";
import styled from "styled-components";

interface ITnsQuotePriceModal {
    openQuotePrices: boolean;
    onClose:() => void;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
}

const TnsSelectedQuotePricesModal = ({ 
    openQuotePrices = false,
    onClose,
    onPrimaryClick,
    onSecondaryClick
}: ITnsQuotePriceModal): JSX.Element => {
    return (
        <SelectedQuotesModal
            open={openQuotePrices}
            description="These are the selected Quotes/Prices"
            onClose={onClose}
            title="Selected Quotes/Prices"
            
        >
            <PriceOrQuotesTableContainer>
                <Table
                    size="small"
                    columns={[{
                        dataIndex: 'checked',
                        key: 'checked',
                        title:'',
                        render: () => <Grid><Checkbox size="small"/></Grid>,
                        width: '2%'
                    },{
                        dataIndex: 'quotePrice',
                        key: 'quotePrice',
                        title: 'Quote/Price',
                        width: '40%'
                    },{
                        dataIndex: 'scenario',
                        key: 'scenario',
                        title: 'Scenario',
                        render: () => <Grid><Select size="small"></Select></Grid>,
                        width: '35%'
                    },{
                        dataIndex: 'scenarioDate',
                        key: 'scenarioDate',
                        title: 'Scenario Date',
                        render: () => <Grid><Select size="small"></Select></Grid>,
                        width: '23%'
                    }]}
                    data={[{
                        checked: true,
                        quotePrice: 'PQ - Africa_Crude_Premium_Aseng_Spot_P',
                        scenario: 'Product A',
                        scenarioDate: '3.81'
                    },{
                        checked: false,
                        quotePrice: 'PQ - 11SBEMTH02_I369',
                        scenario: 'Product B',
                        scenarioDate: '2.58'
                    }]}
                />
            </PriceOrQuotesTableContainer>
        </SelectedQuotesModal>
    )
};

const PriceOrQuotesTableContainer = styled(Flexbox)`
`;

const SelectedQuotesModal = styled(Modal)`
    width:80% !important;
`;
export default TnsSelectedQuotePricesModal;