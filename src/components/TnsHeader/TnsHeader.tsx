import { useHistory, Link } from "react-router-dom";
import styled from 'styled-components';
import { NavBar, Menu, MenuItem, Text, Pecten, Flexbox, Heading } from '@sede-x/shell-ds-react-framework';
import { IProps } from './types';
import { headerConfig, headerPromoTitle } from '../../constants/header'

const TnsHeader = (props: IProps): JSX.Element => {
    const history = useHistory();
    return (
        <NavBarStyled 
            float
            leftArea={
                <PromoLinkWrapper to="/">
                    <PromoSection>
                        <Pecten />
                        <PromoHeading type="h2">
                            <strong>{headerPromoTitle}</strong>
                        </PromoHeading>
                    </PromoSection>
                </PromoLinkWrapper>
                
            
            }
            rightArea={
                <Menu mode="horizontal">
                    {headerConfig.map(config => 
                        <TnsMainMenuItem 
                            key={config.titleName}
                            onClick={() => history.push(config.linkTo)}
                        >
                            <TnsMenuItemText>
                                <strong>{config.titleName}</strong>
                            </TnsMenuItemText>   
                        </TnsMainMenuItem>
                    )}
                </Menu>
            }
        >
        </NavBarStyled>
    )
};

const NavBarStyled = styled(NavBar)`
    padding: 8px 12px;
    position:fixed;
    background: #373741;
    border-bottom: 3px solid #fbce07;
`;

const PromoSection = styled(Flexbox)`
    flex-direction:row;
`;

const TnsMainMenuItem = styled(MenuItem)`
    background: #373741;
    &:hover {
        background: #75757a;
    }
`;

const TnsMenuItemText = styled(Text)`
    color: white;
`;

const PromoHeading = styled(Heading)`
    margin-left:10px;
    color: white;
`;

const PromoLinkWrapper = styled(Link)`
    text-decoration: none;
`
export default TnsHeader;