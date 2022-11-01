import Header from './Components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from "@mui/material";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <main className="py-3">
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home />} exact></Route>
                            <Route path="/signin" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </Routes>
                    </Container>
                </main>
            </Router>
        </div>
    );
}

export default App;
