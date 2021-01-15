import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './styles';

interface Props {
    user: IUser
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
                        <a href='/deadlines'>deadlines</a>
                    </li>,
                    <li key='header-2'>
                        <a href='/api/logout'>logout</a>
                    </li>,
                ];
        }
    };

    return (
        <StyledHeader>
            <nav className=''>
                <Link to='/' className='brand-logo'>
                    countdown.app
                </Link>

                <ul>{renderContent()}</ul>
            </nav>
        </StyledHeader>
    );
};