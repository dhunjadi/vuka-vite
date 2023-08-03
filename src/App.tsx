import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import NewsPage from './pages/news/NewsPage';
import Navbar from './components/navbar/Navbar';
import TasksPage from './pages/tasks/TasksPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route element={<Navbar />}>
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/tasks" element={<TasksPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
