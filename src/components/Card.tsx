import {PropsWithChildren} from 'react';
import Button from './Button';
import {useSelector} from 'react-redux';
import {News} from '../types/newsTypes';
import {RootState} from '../store/store';

interface CardProps extends Omit<News, '_id'> {
    handleEdit?: () => void;
    handleDelete?: () => void;
}

const Card = ({title, text, type, isPublished, handleEdit, handleDelete}: PropsWithChildren<CardProps>) => {
    const {loggedInUser} = useSelector((state: RootState) => state.user);

    return (
        <div className="c-card">
            <div className="c-card__title">{title}</div>
            {loggedInUser.role !== 'student' && (
                <div className="c-card__info">
                    <div className="c-card__info_pair">
                        <span>{type}</span>
                    </div>

                    <div className="c-card__info_pair">
                        <span>{isPublished ? 'Published' : 'Not published'} </span>
                    </div>
                </div>
            )}
            <div className="c-card__body">{text}</div>
            {loggedInUser.role !== 'student' && (
                <div className="c-card__buttons">
                    <Button onClick={handleEdit}>Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
            )}
        </div>
    );
};

export default Card;
