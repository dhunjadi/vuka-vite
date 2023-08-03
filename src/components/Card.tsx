import {PropsWithChildren} from 'react';

interface CardProps {
    title: string;
    text: string;
}

const Card = ({title, text}: PropsWithChildren<CardProps>) => {
    return (
        <div className="c-card">
            <div className="c-card__title">{title}</div>
            <div className="c-card__body">{text}</div>
        </div>
    );
};

export default Card;
