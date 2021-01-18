import { Match } from '@testing-library/react';
import React from 'react';
import { match } from 'react-router-dom';

interface Props {
    match: any;
}

export const Deadline: React.FC<Props> = (props) => {
    const { id } = props.match.params;

    console.log(id);

    return <div>Single deadline</div>;
};
