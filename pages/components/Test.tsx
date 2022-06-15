import { useState, useEffect } from "react";
import axios from "axios";

export const Test = ({ data, setData }: any) => {
  const [inputData, setInputData] = useState("");
  /* useEffect(() => {
    axios
      .get(
        process.env.API_URL + "/getFile/" + "1aT103Ucj0UvC7gbNcsavVDevY3K0mI_o"
      )
      .then((res) => {
        console.log("data", res.data);

        setData(res.data.data);
      });
  }); */

  const doRequest =()=>{
    axios.defaults.baseURL=process.env.API_URL
    axios
      .get("/getFile/" + inputData)
      .then((res) => {
        console.log("data", res.data);

        setData(res.data);
      });
  }
  return (
    <div>
      
      <p>Ingrese el id del archivo</p>
      <input
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      ></input>
      <button
      onClick={doRequest}
      >Consultar
      </button>
      {data&&data.type==='image/jpeg'?
      <p>
        <h4>Es una foto</h4>
        <img src={'http://drive.google.com/uc?export=view&id='+data.data}></img>
      </p>
      
      :
      data&&
      <div>
        <h4>Info del archivo: </h4>
        <p>{JSON.stringify(data.data)}</p>
      </div> }

    </div>
  );
};
