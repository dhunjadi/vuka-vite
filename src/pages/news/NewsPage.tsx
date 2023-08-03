import {useEffect, useState} from 'react';
import {getNewsByType} from '../../services/newsService';
import {News} from '../../types';
import Card from '../../components/Card';
import Tabs from '../../components/Tabs';
import Button from '../../components/Button';

const NewsPage = () => {
    const newsTypes = ['general', 'professor'];
    const [newsList, setNewsList] = useState<News[]>([]);
    const [selectedNewsType, setSelectedNewsType] = useState(newsTypes[0]);

    useEffect(() => {
        getNewsByType(selectedNewsType).then((res) => setNewsList(res));
    }, [selectedNewsType]);

    return (
        <div className="p-news">
            <Tabs
                tabList={newsTypes}
                selectedTab={selectedNewsType}
                handleSelect={(tab) => setSelectedNewsType(tab)}
                buttons={<Button>Add news</Button>}
            />
            {newsList.map((el) => {
                return <Card key={el._id} {...el} />;
            })}
        </div>
    );
};

export default NewsPage;
