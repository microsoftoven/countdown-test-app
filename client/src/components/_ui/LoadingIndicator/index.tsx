import React from 'react';
import classNames from 'classnames';
import { StyledLoadingIndicator } from './styles';
import { ReactSVG } from 'react-svg';
import loadingImg from '../../../assets/images/page-loading.svg';

interface Props {
    fullscreen?: boolean;
}

export const LoadingIndicator: React.FC<Props> = ({ fullscreen }) => {
    return (
        <StyledLoadingIndicator
            className={classNames({
                fullscreen: fullscreen,
            })}
        >
            <ReactSVG src={loadingImg} />
        </StyledLoadingIndicator>
    );
};
