import {Component} from "react";
import Main from "./components/MainComponent";
import './App.css';
import {BrowserRouter} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                {/* These classNames are defined in the App.css */}
                <div className="App">
                    <Main/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
