import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducers';
import { StyledHeader } from './styles';

// type HeaderProps = {
//     auth?: Object | undefined
// }

export const Header = () => {
    const auth: any = useSelector((state: RootState) => state.auth);

    const renderContent = () => {
        switch (auth?._id) {
            case null:
                return (
                    <li>
                        <a href='/auth/google'>Login With Google</a>
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
                <Link
                    to='/'
                    className='brand-logo'
                >
                    <i className='material-icons'>email</i> countdown.app
                </Link>

                <ul>{renderContent()}</ul>
            </nav>
        </StyledHeader>
    );
};
