import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AddToList from './addToList.jsx';
import ListItems from './listItems.jsx';

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <AddToList/>
                <ListItems/>
            </div>
        </Provider>
    );
}
render(<App/>, document.getElementById('app'));
