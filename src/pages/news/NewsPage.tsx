import React from 'react';
import {useSelector} from 'react-redux';
import {StoreState} from '../../store/reducers/rootReducer';

const NewsPage: React.FC = () => {
  const {loggedInUser} = useSelector<StoreState, StoreState['userReducer']>((state) => state.userReducer);
  return <div>{loggedInUser.fName}</div>;
};

export default NewsPage;
