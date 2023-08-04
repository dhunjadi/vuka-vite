import {useEffect, useState} from 'react';
import {addNewNews, deleteNews, getNewsByType} from '../../services/newsService';
import {News} from '../../types';
import Card from '../../components/Card';
import Tabs from '../../components/Tabs';
import Button from '../../components/Button';

const NewsPage = () => {
    const newsTypes = ['general', 'professor'];
    const [newsList, setNewsList] = useState<News[]>([]);
    const [selectedNewsType, setSelectedNewsType] = useState(newsTypes[0]);

    useEffect(() => {
        loadNews(selectedNewsType);
    }, [selectedNewsType]);

    const loadNews = (type: string) => {
        getNewsByType(type).then((res) => setNewsList(res));
    };

    const handleAddNewNews = async () => {
        await addNewNews();
        loadNews(selectedNewsType);
    };

    const handleDeleteNews = async (id: string) => {
        await deleteNews(id);
        loadNews(selectedNewsType);
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
