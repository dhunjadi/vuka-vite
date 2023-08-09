import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import NewsPage from './pages/news/NewsPage';
import Navbar from './components/navbar/Navbar';
import TasksPage from './pages/tasks/TasksPage';
import NewsActionsPage from './pages/news/NewsActionsPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route element={<Navbar />}>
                        <Route path="/news">
                            <Route index element={<NewsPage />} />
                            <Route path="add" element={<NewsActionsPage />} />
                            <Route path="edit/:id" element={<NewsActionsPage />} />
                        </Route>
                        <Route path="/tasks" element={<TasksPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
