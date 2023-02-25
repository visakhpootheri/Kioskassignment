import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../components/Kioskend.css";
export default function Kioskend() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.sample);
  const [rating, setRating] = useState([]);
  const [question, setQuestion] = useState([]);
  const length = data.length;
  console.log("kjkl",data);
  useEffect(() => {
    const array = [];
    for (let i = 0; i < length; i++) {
      const temp = [...data];
      array.push(temp[i].ans);
      setRating(array);
      console.log({rating}) 
    }
    const qn = [];
    for (let i = 0; i < length; i++) {
      qn.push(data[i].question);
    }
    setQuestion(qn);
  }, []);
  const prevclick = () => {
    navigate("/Questions"); 
  };
  const clickconfirm = () => {
    let url = "http://localhost:8000/insertrating";
    let header = {};
    let req = {ans1:rating[0],ans2:rating[1],ans3:rating[2],ans4:rating[3],ans5:rating[4]};
    console.log("req",req);
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data);
      })
      .catch();
    setTimeout(function () {
      navigate("/");
    }, 5000);
  };
  return (
    <div className="Kioskend">
      <div className="Kioskend_row1">
        <label className="Kioskend_row1_label1">THANK YOU</label>
        <label className="Kioskend_row1_label2">for being with us</label>
        <label className="Kioskend_row1_label3">Confirm your feedback</label>
        <div className="Kioskend_row2">
          <div className="Kioskend_row2_left">
            {question.map((itm, inx) => {
              return (
                <>
                  <label>{itm}</label>
                </>
              );
            })}
          </div>
          <div className="Kioskend_row2_right">
            {rating.map((item, indx) => {
              return (
                <>
                  <label>:{item}</label>
                </>
              );
            })}
          </div>
        </div>
        <div className="Kioskend_row1_button">
          <button onClick={(e) => prevclick()}>Review</button>
          <button onClick={(e) => clickconfirm()}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
