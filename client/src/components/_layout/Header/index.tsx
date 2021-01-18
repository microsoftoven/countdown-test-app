import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import {
    StyledHeader,
    StyledNav,
    AppLogo,
    StyledMenu,
    StyledMenuItem,
    StyledTitleContainer,
    SignInButtonWrapper,
} from './styles';

import signinButton from '../../../assets/images/btn_google_signin.svg';
import logo from '../../../assets/images/logo-countdown.svg';
import { Button } from '../../_ui/Button';

interface Props {
    user: IUser;
}

export const Header: React.FC<Props> = ({ user }) => {
    const renderContent = () => {
        switch (user._id) {
            case null:
                return (
                    <li>
                        <a href='/auth/google'>
                            <SignInButtonWrapper>
                                <ReactSVG
                                    src={signinButton}
                                    alt='Sign in with Google'
                                />
                            </SignInButtonWrapper>
                        </a>
                    </li>
                );
            default:
                return [
                    <StyledMenuItem key='header-1'>
                        <Link to='/deadlines'>deadlines</Link>
                    </StyledMenuItem>,
                    <StyledMenuItem key='header-2'>
                        <a href='/api/logout'>logout</a>
                    </StyledMenuItem>,
                ];
        }
    };

    return (
        <StyledHeader>
            <StyledNav>
                <Link to='/' className='ctdn__logo'>
                    <StyledTitleContainer>
                        <AppLogo src={logo} alt='countdown app clock logo' />
                    </StyledTitleContainer>
                </Link>

                <StyledMenu>{renderContent()}</StyledMenu>
            </StyledNav>
        </StyledHeader>
    );
};
