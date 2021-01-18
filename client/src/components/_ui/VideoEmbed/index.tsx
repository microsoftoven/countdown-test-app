import React from 'react';
import { StyledEmbedContainer } from './styles';

interface Props {
    url: string;
    title: string;
}

export const VideoEmbed: React.FC<Props> = ({ url, title }) => {
    return (
        <StyledEmbedContainer>
            <iframe
                src={url}
                frameBorder='0'
                allowFullScreen
                title={title}
            ></iframe>
        </StyledEmbedContainer>
    );
};
