import { BrowserRouter,Routes,Route } from "react-router-dom";
import Page1 from "../components/Kioskhome";
import Page2 from "../components/Kioskpaage";
import Page3 from "../components/Kioskend";
export default function Navigation(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Page1/>}></Route>
            <Route path="/Questions" element={<Page2/>}></Route>
            <Route path="/Kioskend" element={<Page3/>}></Route>

        </Routes>
        </BrowserRouter>
    )
}