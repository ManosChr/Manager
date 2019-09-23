import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: 'AIzaSyAwTypwF3XTBcJr1y3zrushrGz5oq5mf9k',
            authDomain: 'manager-3772a.firebaseapp.com',
            databaseURL: 'https://manager-3772a.firebaseio.com',
            projectId: 'manager-3772a',
            storageBucket: 'manager-3772a.appspot.com',
            messagingSenderId: '788219551971',
            appId: '1:788219551971:web:5316908f5f0c3031'
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
