import { IProps } from './types';
import { Flexbox, Tag, NavBar } from '@sede-x/shell-ds-react-framework';
import styled from 'styled-components';

const TnsFooter = (props: IProps): JSX.Element => {
    return (
        <FooterBarStyled
            float
            leftArea={
                <FooterContainer>
                    <FooterTags size="small" label="cbj-s-8455" />
                    <FooterTags size="small" label="GSA: v1.15.3.1" />
                    <FooterTags size="small" label="GSE001" />
                    <FooterTags size="small" label="ASIA-PAC\Ramchand.BR" />
                    <FooterTags size="small" label="English (United States)" />
                    <FooterTags size="small" label="CBJS8410_SIRA.WORLD" />
                    <FooterTags size="small" label="CBJS8411_SPRA.WORLD" />
                </FooterContainer>
            }
        >
        </FooterBarStyled>
    )
};

const FooterContainer = styled(Flexbox)`
    flex-direction: row;
    justify-content: space-between;
`;

const FooterTags = styled(Tag)`
    margin: 0px 10px;
`;

const FooterBarStyled = styled(NavBar)`
  padding: 8px 12px;
  position: fixed;
  bottom:0;
  background:#373741;
  border-top: 3px solid #fbce07;
`;

export default TnsFooter