import { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image'

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
        console.log("data", res);

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
      
      {data&&(data.type==='image/jpeg'?
      <p>
        <h4>Es una foto</h4>
        <Image src={'http://drive.google.com/uc?export=view&id='+data.fileId}></Image>
      </p>
      
      :
      <div>
        <h4>Info del archivo: </h4>
        tipo de archivo: {JSON.stringify(data.type)}
        {data.type==='text/plain'?<p>{JSON.stringify(data.data)}</p>:null}
        <a href={`https://drive.google.com/uc?export=view&id=${data.fileId}&confirm=t`}>click para descargar</a>
      </div> )}

    </div>
  );
};
