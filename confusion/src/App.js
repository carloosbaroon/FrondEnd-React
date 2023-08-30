import {Component} from "react";
import Main from "./components/MainComponent";
import './App.css';

class App extends Component {
//Testing email for github
    render() {
        return (
            //These classNames are defined in the App.css
            <div className="App">
                {/* Using props to pass the DISHES to MenuComponent */}
                <Main/>
            </div>

        );
    }
}

export default App;
