import React, { useEffect, useState } from 'react'
import { BsFillGearFill } from 'react-icons/bs';
import "./style.css";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Pune");
  const [input, setInput] = useState(0)


  const [tempInfo, setTempInfo] = useState({ name: "", country: "", temp: "" });

  const Press = () => {
    setSearchValue(input);
  }

  const getWeatherInfo = async () => {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=05c003efc0fa12535ee00b0fcdda191b`;

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    const name = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    setTempInfo({ name, country, temp });
  };
  useEffect(() => {
    getWeatherInfo();
  }, [searchValue]);
  return (<>
    <div className='main'>

      <div className='child'>
        
        <input id="inputField" type="text"
          autoFocus placeholder='Search City'
          onChange={(e) => setInput(e.target.value)}
        />

        <BsFillGearFill onClick={Press} className='fc' />

      </div>
      <div>
        <h1>  {`${searchValue}, ${tempInfo.country}`}</h1>
      </div>
      <h2>{`${tempInfo.temp} °Cel`}</h2>
      <p>{`Min.${tempInfo.temp} °Cel | Max.${tempInfo.temp} °Cel`}</p>

    </div>
  </>
  );
};
export default Weather;






















