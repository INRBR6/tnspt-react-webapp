import { useHistory } from "react-router-dom";
import { Menu, MenuItem, Text, Flexbox } from '@sede-x/shell-ds-react-framework';
import styled from 'styled-components';
import TnsPageContainer from '../components/TnsPageContainer';
import { pricingMainMenu } from '../constants/pricingHome';
import TnsPricingRouter from '../routes/PricingRouter'

const PricingNavMenu = (): JSX.Element => {
    const history = useHistory();
    return (
        <PricingMenuContainer>
            <PricingMenu mode="vertical">
                {pricingMainMenu.map(menuItem => 
                    <PricingMenuItem 
                        key={menuItem.title}
                        onClick={() => history.push(menuItem.toRoute)}
                    >
                        <PricingMenuText size="small">{menuItem.title}</PricingMenuText>
                    </PricingMenuItem>
                )}
            </PricingMenu>
        </PricingMenuContainer>
    )
};


const TnsPricingPage = (): JSX.Element => {
    return (
        <PricingContentContainer>
            <PricingNavMenu />
            <TnsPageContainer>
                <TnsPricingRouter />
            </TnsPageContainer>
        </PricingContentContainer>
    )
};

export default TnsPricingPage;

const PricingContentContainer = styled(Flexbox)`
    flex-direction:row;
    height:100%;
`;

const PricingMenuContainer = styled(Flexbox)`
    height:100%;
`;

const PricingMenu = styled(Menu)`
    border-right:2px solid #ddd;
`;

const PricingMenuItem = styled(MenuItem)`
    border-bottom: 1px solid #ddd !important;
    margin: 5px 0px !important;
    &:hover {
        background: #ddd;
    }
`;

const PricingMenuText = styled(Text)`
   
`;