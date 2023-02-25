const { legacy_createStore } = require("redux");

const initialState = {
  sample: [
    {
      type: "rating",
      question: "How satisfied are you with our products?",
      answers: [
        { id: 1, isselected: false },
        { id: 2, isselected: false },
        { id: 3, isselected: false },
        { id: 4, isselected: false },
        { id: 5, isselected: false },
      ],
      ans:"0"
     
    },
    {
      type: "rating",
      question: "How fair are the prices compared to similar retailers?",
      answers: [
        { id: 1, isselected: false },
        { id: 2, isselected: false },
        { id: 3, isselected: false },
        { id: 4, isselected: false },
        { id: 5, isselected: false },
      ],
      ans:"0"
      
    },
    {
      type: "rating",
      question:
        "How satisfied are you with the value for money of your purchase?",
      answers: [
        { id: 1, isselected: false },
        { id: 2, isselected: false },
        { id: 3, isselected: false },
        { id: 4, isselected: false },
        { id: 5, isselected: false },
      ],
      ans:"0"
      
    },
    {
      type: "rating",
      question:
        "On a scale of 1-10 how would you recommend us to your friends and family?",
      answers: [
        { id: 1, isselected: false },
        { id: 2, isselected: false },
        { id: 3, isselected: false },
        { id: 4, isselected: false },
        { id: 5, isselected: false },
        { id: 6, isselected: false },
        { id: 7, isselected: false },
        { id: 8, isselected: false },
        { id: 9, isselected: false },
        { id: 10, isselected: false },
      ],
      ans:"0"
      
    },
    {
      type: "descriptive",
      question: "What could we do to improve our service?",
      ans:"No Comments"
    },
  ], 
};
const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "setSample":
      return { ...prevState, sample: action.payload }; 
  }
  return prevState;
};
const redux = legacy_createStore(reducer);
export default redux;
