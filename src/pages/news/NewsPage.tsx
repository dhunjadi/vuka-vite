import {useEffect, useState} from 'react';
import {NewsType} from '../../types';
import Card from '../../components/Card';
import Tabs from '../../components/Tabs';
import Button from '../../components/Button';
import {addNewNewsAction, deleteNewsAction, fetchNewsByTypeAction} from '../../store/actions/newsActions';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../../store/reducers/rootReducer';

const NewsPage = () => {
    const dispatch = useDispatch();
    const {newsList} = useSelector((state: StoreState) => state.newsReducer);

    const newsTypes: NewsType[] = ['general', 'professor'];
    const [selectedNewsType, setSelectedNewsType] = useState<NewsType>(newsTypes[0]);

    useEffect(() => {
        dispatch(fetchNewsByTypeAction(selectedNewsType));
    }, [selectedNewsType, dispatch]);

    const handleAddNewNews = () => {
        dispatch(addNewNewsAction());
    };

    const handleDeleteNews = (id: string) => {
        dispatch(deleteNewsAction(id));
    };

    return (
        <div className="p-news">
            <Tabs
                tabList={newsTypes}
                selectedTab={selectedNewsType}
                handleSelect={(tab) => setSelectedNewsType(tab)}
                buttons={<Button onClick={handleAddNewNews}>Add news</Button>}
            />
            {newsList.map((el) => {
                return <Card key={el._id} {...el} handleDelete={() => handleDeleteNews(el._id)} />;
            })}
        </div>
    );
};

export default NewsPage;
