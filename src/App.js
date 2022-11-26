import Header from './Components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from "@mui/material";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import {useState} from "react";

function App() {
    const [user, setUser] = useState(null)
    return (
        <div className="App">
            <Router>
                <Header user={user} setUser={setUser} />
                <main className="py-3">
                    <Container>
                        <Routes>
                            <Route path="/" element={<Home user={user} />} exact></Route>
                            <Route path="/signin" element={<Login setUser={setUser} />}  />
                            <Route path="/signup" element={<Signup />} />
                        </Routes>
                    </Container>
                </main>
            </Router>
        </div>
    );
}

export default App;
