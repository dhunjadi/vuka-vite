import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {News} from '../../types';
import {newsActionsPageValidationSchema} from './NewsActionsPageValidations';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import ToggleSwitch from '../../components/ToggleSwitch';
import Button from '../../components/Button';
import {addNewNewsAction} from '../../store/actions/newsActions';

const NewsActionsPage = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<News>({
        resolver: zodResolver(newsActionsPageValidationSchema),
        defaultValues: {title: 'News Title', text: 'News Text', type: 'general', isPublished: false},
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const watchFields = watch();

    const newsTypes = [
        {id: '1', value: '', label: '---'},
        {id: '2', value: 'general', label: 'General'},
        {id: '3', value: 'student', label: 'Student'},
        {id: '4', value: 'professor', label: 'Professor'},
    ];

    const onSubmit = () => {
        dispatch(addNewNewsAction(watchFields));
        navigate(-1);
    };

    const handleCancel = (): void => {
        navigate(-1);
    };

    return (
        <div className="p-newsActions">
            <div className="p-newsActions__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Enter Article Title..." {...register('title')} />
                    {errors.title && <p>{errors.title.message}</p>}

                    <textarea cols={30} rows={10} placeholder="Enter Article Text..." {...register('text')} />
                    {errors.text && <p>{errors.text.message}</p>}

                    <div className="p-newsActions__form_pair">
                        Type:
                        <select {...register('type')}>
                            {newsTypes.map((option) => (
                                <option key={option.id} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        {errors.type && <p>{errors.type.message}</p>}
                        Published:
                        <ToggleSwitch id="published" isOn={watchFields.isPublished} {...register('isPublished')} />
                        {errors.isPublished && <p>{errors.isPublished.message}</p>}
                    </div>

                    <div className="p-newsActions__form_buttons">
                        <Button onClick={handleCancel}>Cancel</Button>

                        <Button type="submit" onClick={onSubmit}>
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsActionsPage;
