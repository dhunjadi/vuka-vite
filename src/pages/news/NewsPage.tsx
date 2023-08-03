import {useEffect, useState} from 'react';
import {getAllNews} from '../../services/newsService';
import {News} from '../../types';

const NewsPage = () => {
    const [newsList, setNewsList] = useState<News[]>([]);

    useEffect(() => {
        getAllNews().then((res) => setNewsList(res.data));
    }, []);

    return (
        <div className="p-news">
            {newsList.map((el) => {
                return <div>{JSON.stringify(el)}</div>;
            })}
        </div>
    );
};

export default NewsPage;
