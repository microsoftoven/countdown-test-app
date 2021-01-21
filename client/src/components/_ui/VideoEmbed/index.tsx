import React from 'react';
import { StyledEmbedContainer } from './styles';

interface Props {
    url: string;
    title: string;
}

export const VideoEmbed: React.FC<Props> = ({ url, title }) => {
    return (
        <StyledEmbedContainer data-testid='video-embed'>
            <iframe
                data-testid='video-embed-iframe'
                src={url}
                frameBorder='0'
                allowFullScreen
                title={title}
            ></iframe>
        </StyledEmbedContainer>
    );
};
