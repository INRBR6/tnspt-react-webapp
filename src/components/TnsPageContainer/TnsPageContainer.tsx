import { IProps } from './types';
import styled from 'styled-components';
import { Flexbox } from '@sede-x/shell-ds-react-framework';

const TnsPageContainer = ({ children }: IProps): JSX.Element => {
    return (
        <PageContainer>
            {children}
        </PageContainer>
    )
};

const PageContainer = styled(Flexbox)`
    height:100%;
    width: 100%;
    flex-direction: row;
`;
export default TnsPageContainer