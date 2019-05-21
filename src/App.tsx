import React from 'reactn';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import PropTypes from "prop-types";
import t from "./utils/localization/Localization";

class App extends React.Component{

    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        t.setLanguage(this.global.currentLanguage)
        const children = this.props;
        return (
            <div>
                <Header/>
                {children.children}

                <body> 
                sssFFFFFFFFFFFFFFFFFF
                
                </body>
            </div>
        );
    }
}

export default App;
