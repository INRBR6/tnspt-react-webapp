import { Flexbox } from '@sede-x/shell-ds-react-framework';
import styled from 'styled-components';
import { IProps } from './types';

const TnsContentArea = ({ children }: IProps): JSX.Element => {
    return (
        <ContentAreaBox>
            {children}
        </ContentAreaBox>
    )
};

const ContentAreaBox = styled(Flexbox)`
    align-self: stretch;
    flex-direction:column;
    flex: 0 0 100%;
    height:100vh;
    align-items: stretch;
    padding:55px 0px 30px 0px;
`
export default TnsContentArea