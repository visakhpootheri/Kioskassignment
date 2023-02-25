import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Kioskpage.css";
export default function Kioskpaage() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.sample);
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const nextclick = () => {
    if (current + 1 < data.length) {
      setCurrent(current + 1);
    } else {
      setCurrent(current);
      navigate("/Kioskend");
    }
  };
  const prevclick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(current);
    }
  };
  const selectrating = (index, item) => {
    const temp = [...data];
    for (const iterator of temp[current].answers) {
      iterator.isselected = false;
    }
    for (let i = 0; i <= index; i++) {
      temp[current].answers[i].isselected = true;
    }
    temp[current].ans = index+1;
    dispatch({ type: "setSample", payload: temp });
    console.log("kk", data);
  };
  const setFeedback = (e) => {
    const temp = [...data];
    temp[current].ans = e.target.value;
    dispatch({ type: "setSample", payload: temp });
  };
  return (
    <div className="Kiosk_Qpage">
      <div className="Kioskpage">
        <div className="Kioskpage_row1">
          <label>Customer Survey</label>
        </div>
        <div className="Kioskpage_row2">
          <label>
            {current + 1}/{data.length}
          </label>
        </div>
        <div className="Kioskpage_row3">
          <>{data[current].question}</>
        </div>
        <div className="Kioskpage_row4">
          {data[current].type == "rating" ? (
            <>
              {data[current].answers.map((item, index) => {
                return (
                  <button
                    style={{
                      backgroundColor: item.isselected ? "gold" : "white",
                    }}
                    onClick={(e) => {
                      selectrating(index, item);
                    }}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </>
          ) : (
            <textarea
              placeholder="write your feedback..."
              value={data[current].answer}
              onChange={(e) => setFeedback(e)}
            ></textarea>
          )}
        </div>
        <div className="Kioskpage_row5">
          <div className="Kioskpage_row5_box">
            <button onClick={(e) => prevclick()}>Prev</button>
            <button onClick={(e) => nextclick()}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
