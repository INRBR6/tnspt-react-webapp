import { IProps } from './types';
import { Text } from '@sede-x/shell-ds-react-framework';

const TnsLinkText = ({ url = "", content, size}: IProps): JSX.Element => {
    return (
        <a target="_blank" href={url}>
            <Text size={size}>{content}</Text>
        </a>
    )
};

export default TnsLinkText