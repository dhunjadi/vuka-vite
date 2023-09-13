import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import ToggleSwitch from '../../components/ToggleSwitch';
import Button from '../../components/Button';
import {News, NewsType} from '../../types/newsTypes';
import {newsActionsPageValidationSchema} from '../../validations';
import {RootState, useAppDispatch, useAppSelector} from '../../store/store';
import {createNewNews, updateNews} from '../../store/thunks/newsThunks';

const NewsActionsPage = () => {
    const {newsList} = useAppSelector((state: RootState) => state.news);
    const {id} = useParams();
    const newsBeingEdited = newsList.find((news) => news._id === id);
    const {pathname} = useLocation();
    const isEditing = pathname.includes('edit');

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<News>({
        resolver: zodResolver(newsActionsPageValidationSchema),
        defaultValues: getDefaultValues(),
    });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const watchFields = watch();

    const newsTypes: {id: string; value: NewsType; label: string}[] = [
        {id: '1', value: 'general', label: 'General'},
        {id: '2', value: 'student', label: 'Student'},
        {id: '3', value: 'professor', label: 'Professor'},
    ];

    function getDefaultValues() {
        if (isEditing && newsBeingEdited) {
            return {
                title: newsBeingEdited.title,
                text: newsBeingEdited.text,
                type: newsBeingEdited.type,
                isPublished: newsBeingEdited.isPublished,
            };
        }

        return {
            title: 'News Title',
            text: 'News Text',
            type: 'general' as NewsType,
            isPublished: false,
        };
    }

    const onSubmit = () => {
        isEditing && id && newsBeingEdited ? dispatch(updateNews({id, data: watchFields})) : dispatch(createNewNews(watchFields));
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
