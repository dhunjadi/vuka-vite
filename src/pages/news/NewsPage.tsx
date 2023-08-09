import {useEffect, useState} from 'react';
import {NewsType} from '../../types';
import Card from '../../components/Card';
import Tabs from '../../components/Tabs';
import Button from '../../components/Button';
import {deleteNewsAction, fetchNewsByTypeAction} from '../../store/actions/newsActions';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../../store/reducers/rootReducer';
import Modal from '../../components/Modal';
import {useNavigate} from 'react-router-dom';

const NewsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {newsList} = useSelector((state: StoreState) => state.newsReducer);

    const newsTypes: NewsType[] = ['general', 'professor'];
    const [selectedNewsType, setSelectedNewsType] = useState<NewsType>(newsTypes[0]);
    const [isDeleteNewsModalOpen, setIsDeleteNewsModalOpen] = useState<boolean>(false);
    const [clickedNewsId, setClickedNewsId] = useState<string>('');

    useEffect(() => {
        dispatch(fetchNewsByTypeAction(selectedNewsType));
    }, [selectedNewsType, dispatch]);

    const handleAddNewNews = () => {
        navigate('add');
    };

    const handleDeleteNews = (id: string) => {
        dispatch(deleteNewsAction(id));
        setIsDeleteNewsModalOpen(false);
    };

    return (
        <>
            <div className="p-news">
                <Tabs
                    tabList={newsTypes}
                    selectedTab={selectedNewsType}
                    handleSelect={(tab) => setSelectedNewsType(tab)}
                    buttons={<Button onClick={handleAddNewNews}>Add news</Button>}
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
