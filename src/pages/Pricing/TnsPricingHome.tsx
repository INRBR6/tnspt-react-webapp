import { Flexbox, Card } from "@sede-x/shell-ds-react-framework";
import styled from "styled-components";

const TnsPricingHomePage = (): JSX.Element => {
    return (
        <PricingHomeContainer>
            <PricingHomeIntroContainer>
                <IntroCard 
                    header={{
                        description: `The Pricing Application is a modular system supporting forward price sets generation & transfer prices at the Manufacturing - Supply interface at the refinery gate. The former are published for input to supply / refinery LPs, whilst the latter allow for plan GRM reporting and feed to GSAP of actual transfer prices. Price sets are generated for prices at supply nodes for both a forward planning view as per the weekly GPSS / ZPSS process and for historic "actuals". 

                        Users are reminded that all prices in the Pricing Application are for internal Shell use only and must not be communicated outside the company, please contact your local Pricing Application Super User if you have any questions on this. 
                        
                        The Price Viewer is a web based application that allows to display these historical and future quotes and prices, in either graphical or tabular format. 
                        `,
                        title: 'Welcome to the Pricing Application'
                    }}
                ><></></IntroCard>
                <IntroCard 
                    header={{
                        description: `To get access to the Pricing Application, Click on the "Shell Application Manager" web page and select : Request Access, and select the GSE Pricing application for your Region and follow the instructions.`,
                        title: 'Access'
                    }}
                ><></></IntroCard>
                <IntroCard 
                    header={{
                        description: `All necessary support documentation (cookbooks, user guides, etc...) can be found by clicking the link below Support Documentation`,
                        title: 'Support documentation'
                    }}
                ><></></IntroCard>
            </PricingHomeIntroContainer>
        </PricingHomeContainer>
    )
};


export default TnsPricingHomePage;

const PricingHomeContainer = styled(Flexbox)`
    flex-direction: row;
    background-image: url(pricing_bg.png);
    background-size: cover;
    width:100%;
`;

const PricingHomeIntroContainer = styled(Flexbox)`
    flex-direction: column;
    padding: 100px 50px;
    align-self:stretch;
    justify-content:space-between;
`;

const IntroCard = styled(Card)`
    width:100%;
`;