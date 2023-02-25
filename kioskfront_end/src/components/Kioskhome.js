import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../components/Kioskhome.css";
export default function Kioskhome(){
    const data=useSelector((state) => state.sample);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        const temp=[...data]
        for (let i=0;i<data.length-1;i++) {
          for (const iterator of temp[i].answers) {
            iterator.isselected = false;
          }   
        }
        dispatch({ type: "setSample", payload: temp });

    },[])
    const startclick=()=>{
        navigate("./Questions")
    }
    return(
        <div className="Kioskhome">
            <div className="Kioskhome_row1">
                <label className="Kioskhome_row1_label1">Hello!!!</label>
                <label className="Kioskhome_row1_label2">Please rate your experience</label>
                <button onClick={startclick}>START</button>
            </div>
        </div>
    );
}