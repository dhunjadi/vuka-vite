import {useEffect, useState} from 'react';
import Card from '../../components/Card';
import Tabs from '../../components/Tabs';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import {useNavigate} from 'react-router-dom';
import {NewsType} from '../../types/newsTypes';
import {RootState, useAppDispatch, useAppSelector} from '../../store/store';
import {deleteNews, fetchNews} from '../../store/thunks/newsThunks';

const NewsPage = () => {
    const {newsList} = useAppSelector((state: RootState) => state.news);
    const {loggedInUser} = useAppSelector((state: RootState) => state.user);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const newsTypes: NewsType[] = loggedInUser.role !== 'student' ? ['all'] : ['general', loggedInUser.studyProgram];
    const [selectedNewsType, setSelectedNewsType] = useState<NewsType>(newsTypes[0]);
    const [isDeleteNewsModalOpen, setIsDeleteNewsModalOpen] = useState<boolean>(false);
    const [clickedNewsId, setClickedNewsId] = useState<string>('');

    useEffect(() => {
        dispatch(fetchNews(selectedNewsType));
    }, [selectedNewsType, dispatch]);

    const handleAddNewNews = () => {
        navigate('add');
    };

    const handleDeleteNews = (id: string) => {
        dispatch(deleteNews(id));
        setIsDeleteNewsModalOpen(false);
        dispatch(fetchNews(selectedNewsType));
    };

    return (
        <>
            <div className="p-news">
                <Tabs
                    tabList={newsTypes}
                    selectedTab={selectedNewsType}
                    handleSelect={(tab) => setSelectedNewsType(tab)}
                    buttons={loggedInUser.role !== 'student' ? <Button onClick={handleAddNewNews}>Add news</Button> : <></>}
                />
                {newsList.map((el) => {
                    return (
                        <Card
                            key={el._id}
                            {...el}
                            handleDelete={() => {
                                setClickedNewsId(el._id);
                                setIsDeleteNewsModalOpen(true);
                            }}
                            handleEdit={() => navigate(`edit/${el._id}`)}
                        />
                    );
                })}
            </div>
            <Modal
                isOpen={isDeleteNewsModalOpen}
                onCancel={() => setIsDeleteNewsModalOpen(false)}
                onConfirm={() => handleDeleteNews(clickedNewsId)}
                showCancel
                showConfirm
                header={'Delete news?'}
            >
                Are you sure you want to delete &quot;{newsList.find((news) => news._id === clickedNewsId)?.title}&quot;?
            </Modal>
        </>
    );
};

export default NewsPage;
