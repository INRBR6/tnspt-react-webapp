import { Flexbox, Card, Text } from "@sede-x/shell-ds-react-framework";
import styled from "styled-components";
import TnsLinkText from "../components/TnsLinkText";
import TnsPageContainer from "../components/TnsPageContainer";
import { homeIntroCards } from "../constants/tnsHome";

const TnsHomePage = (): JSX.Element => {
    return (
        <TnsPageContainer>
            <HomePageContainer>
                <HomePageBox>
                    {homeIntroCards.map(introInfo => 
                        <IntroCard
                            header={{
                                description: introInfo.description,
                                title: introInfo.title,
                                content: introInfo?.linkContent ? 
                                <>
                                    <Text size="small">{introInfo.linkContent.text}{` `}</Text>
                                    <TnsLinkText
                                        size="small" 
                                        url={introInfo.linkContent.url} 
                                        content={introInfo.linkContent.tag}
                                    />
                                </> : null
                            }}
                        >
                        </IntroCard>
                    )}
                </HomePageBox>
            </HomePageContainer>
        </TnsPageContainer>
    )
}

const HomePageContainer = styled(Flexbox)`
    flex-direction: row;
    background-image: url(shell_bg.webp);
    background-size: cover;
    width:100%;
`
const HomePageBox = styled(Flexbox)`
    flex-direction: column;
    padding: 100px 50px;
    align-self:stretch;
    justify-content:space-between;
`;

const IntroCard = styled(Card)`
    width:100%;
`;

export default TnsHomePage;