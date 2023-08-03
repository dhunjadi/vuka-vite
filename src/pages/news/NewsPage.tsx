import {useEffect, useState} from 'react';
import {getAllNews} from '../../services/newsService';
import {News} from '../../types';
import Card from '../../components/Card';

const NewsPage = () => {
    const [newsList, setNewsList] = useState<News[]>([]);

    useEffect(() => {
        getAllNews().then((res) => setNewsList(res));
    }, []);

    return (
        <div className="p-news">
            {newsList.map((el) => {
                return <Card key={el._id} {...el} />;
            })}
        </div>
    );
};

export default NewsPage;
