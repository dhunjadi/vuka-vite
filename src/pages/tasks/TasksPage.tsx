import {useEffect} from 'react';
import {useAppSelector, RootState, useAppDispatch} from '../../store/store';
import {fetchAllTasks} from '../../store/thunks/tasksThunks';

const TasksPage = () => {
    const {taskList} = useAppSelector((state: RootState) => state.tasks);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllTasks());
    }, [dispatch]);
    return (
        <div className="p-tasks">
            TasksPage,{' '}
            {taskList.map((task) => (
                <span key={task._id}>{task.title}</span>
            ))}
        </div>
    );
};

export default TasksPage;
