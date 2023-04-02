import React from 'react';
import Footer from './Components/Footer/Footer';
import Global from './Components/Global/globalstyles';
import Header from './Components/Header/header';
import Main from './Components/Main/main';

const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
            <Global />
        </div>
    );
}

export default App;
