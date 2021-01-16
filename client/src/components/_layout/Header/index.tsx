import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, AppLogo } from './styles';
import logo from './logo-countdown.svg';

interface Props {
    user: IUser;
}

export const Header: React.FC<Props> = ({ user }) => {
    const renderContent = () => {
        switch (user._id) {
            case null:
                return (
                    <li>
                        <a href='/auth/google'>Login / Sign Up</a>
                    </li>
                );
            default:
                return [
                    <li key='header-1'>
                        <Link to='/deadlines'>deadlines</Link>
                    </li>,
                    <li key='header-2'>
                        <Link to='/api/logout'>logout</Link>
                    </li>,
                ];
        }
    };

    return (
        <StyledHeader>
            <nav className=''>
                <Link to='/' className='brand-logo'>
                    <AppLogo src={logo} alt='countdown app clock logo' />{' '}
                    countdown.app
                </Link>

                <ul>{renderContent()}</ul>
            </nav>
        </StyledHeader>
    );
};
