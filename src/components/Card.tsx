import {PropsWithChildren} from 'react';
import Button from './Button';

interface CardProps {
    title: string;
    text: string;
    handleEdit?: () => void;
    handleDelete?: () => void;
}

const Card = ({title, text, handleEdit, handleDelete}: PropsWithChildren<CardProps>) => {
    return (
        <div className="c-card">
            <div className="c-card__title">{title}</div>
            <div className="c-card__body">{text}</div>
            <div className="c-card__buttons">
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={handleDelete}>Delete</Button>
            </div>
        </div>
    );
};

export default Card;
