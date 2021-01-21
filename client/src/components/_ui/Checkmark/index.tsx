import React from 'react';
import { ReactSVG } from 'react-svg';

import { StyledCheckmark } from './styles';
import { FadeInSlideUp } from '../../_utilities/animations';
import checkmark from '../../../assets/images/checkmark.svg';

interface Props {}

export const Checkmark: React.FC<Props> = () => {
    return (
        <FadeInSlideUp animationDelay='.15s'>
            <StyledCheckmark data-testid='checkmark'>
                <ReactSVG data-testid='svg' src={checkmark} />
            </StyledCheckmark>
        </FadeInSlideUp>
    );
};
