import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const DaysContext = createContext();


const Weather = ({ children }) => {


  const [days, setDays] = useState({});
  const [status, setStatus] = useState({});
  const [city, setCity] = useState({});
  const [degrees, setDegrees] = useState({});
  const [getCity, setGetCity] = useState("balikesir");
  const pickCity = {
    getCity,
    setGetCity
  }


  useEffect(() => {


    axios
      .get(`http://api.openweathermap.org/geo/1.0/direct?q=${getCity}&appid=67b2bb4b11167d936d935be3058f04f1`)
      .then(response => {
        const lon = Number(response.data[0].lon).toFixed(2);
        const lat = Number(response.data[0].lat).toFixed(2);

        axios
          .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=67b2bb4b11167d936d935be3058f04f1`)
          .then(response => {
            const day1 = new Date(response.data.list[0].dt_txt).toLocaleDateString('tr-tr', { weekday: 'long' });

            const day2 = new Date(response.data.list[8].dt_txt).toLocaleDateString('tr-tr', { weekday: 'long' });

            const day3 = new Date(response.data.list[16].dt_txt).toLocaleDateString('tr-tr', { weekday: 'long' });

            const day4 = new Date(response.data.list[24].dt_txt).toLocaleDateString('tr-tr', { weekday: 'long' });

            const day5 = new Date(response.data.list[32].dt_txt).toLocaleDateString('tr-tr', { weekday: 'long' });

            const status1 = response.data.list[0].weather[0].main
            const status2 = response.data.list[8].weather[0].main
            const status3 = response.data.list[16].weather[0].main
            const status4 = response.data.list[24].weather[0].main
            const status5 = response.data.list[32].weather[0].main


            function convertToCelsiusAndFindMax(dataList) {
              let maxTemp = -Infinity;

              for (let i = 0; i < dataList.length; i++) {
                const kelvin = dataList[i].main.temp_max;
                const celsius = kelvin - 273.15;

                if (celsius > maxTemp) {
                  maxTemp = celsius;
                }
              }

              return maxTemp;
            }

            function convertToCelsiusAndFindMin(dataList) {
              let minTemp = Infinity;

              for (let i = 0; i < dataList.length; i++) {
                const kelvin = dataList[i].main.temp_max;
                const celsius = kelvin - 273.15;

                if (celsius < minTemp) {
                  minTemp = celsius;
                }
              }

              return minTemp;
            }


            const datamaxd1 = [

              response.data.list[0],
              response.data.list[1],

            ];
            const maxTemperatured1 = convertToCelsiusAndFindMax(datamaxd1);
            const datamind1 = [

              response.data.list[0],
              response.data.list[1],

            ];
            const minTemperatured1 = convertToCelsiusAndFindMin(datamind1);

            const datamaxd3 = [

              response.data.list[10],
              response.data.list[11],
              response.data.list[12],
              response.data.list[13],
              response.data.list[14],
              response.data.list[15],
              response.data.list[16],
              response.data.list[17]
            ];

            const maxTemperatured3 = convertToCelsiusAndFindMax(datamaxd3);

            const datamind3 = [

              response.data.list[10],
              response.data.list[11],
              response.data.list[12],
              response.data.list[13],
              response.data.list[14],
              response.data.list[15],
              response.data.list[16],
              response.data.list[17]
            ];
            const minTemperatured3 = convertToCelsiusAndFindMin(datamind3);

            const datamaxd4 = [

              response.data.list[18],
              response.data.list[19],
              response.data.list[20],
              response.data.list[21],
              response.data.list[22],
              response.data.list[23],
              response.data.list[24],
              response.data.list[25]
            ];

            const maxTemperatured4 = convertToCelsiusAndFindMax(datamaxd4);

            const datamind4 = [

              response.data.list[18],
              response.data.list[19],
              response.data.list[20],
              response.data.list[21],
              response.data.list[22],
              response.data.list[23],
              response.data.list[24],
              response.data.list[25]
            ];
            const minTemperatured4 = convertToCelsiusAndFindMin(datamind4);

            const datamaxd5 = [

              response.data.list[26],
              response.data.list[27],
              response.data.list[28],
              response.data.list[29],
              response.data.list[30],
              response.data.list[31],
              response.data.list[32],
              response.data.list[33]
            ];

            const maxTemperatured5 = convertToCelsiusAndFindMax(datamaxd5);

            const datamind5 = [

              response.data.list[26],
              response.data.list[27],
              response.data.list[28],
              response.data.list[29],
              response.data.list[30],
              response.data.list[31],
              response.data.list[32],
              response.data.list[33]
            ];
            const minTemperatured5 = convertToCelsiusAndFindMin(datamind5);

            const datamaxd2 = [

              response.data.list[2],
              response.data.list[3],
              response.data.list[4],
              response.data.list[5],
              response.data.list[6],
              response.data.list[7],
              response.data.list[8],
              response.data.list[9]
            ];

            const maxTemperatured2 = convertToCelsiusAndFindMax(datamaxd2);

            const datamind2 = [

              response.data.list[2],
              response.data.list[3],
              response.data.list[4],
              response.data.list[5],
              response.data.list[6],
              response.data.list[7],
              response.data.list[8],
              response.data.list[9]
            ];
            const minTemperatured2 = convertToCelsiusAndFindMin(datamind2);

            setDegrees({
              degree1max: maxTemperatured1.toFixed(),
              degree1min: minTemperatured1.toFixed(),
              degree2max: maxTemperatured2.toFixed(),
              degree2min: minTemperatured2.toFixed(),
              degree3max: maxTemperatured3.toFixed(),
              degree3min: minTemperatured3.toFixed(),
              degree4max: maxTemperatured4.toFixed(),
              degree4min: minTemperatured4.toFixed(),
              degree5max: maxTemperatured5.toFixed(),
              degree5min: minTemperatured5.toFixed()
            })

            setCity({ name: response.data.city.name });
            setDays(prevDays => ({
              ...prevDays,
              day1,
              day2,
              day3,
              day4,
              day5
            }));

            setStatus(prevstatus => ({
              ...prevstatus,
              status1,
              status2,
              status3,
              status4,
              status5
            }))
          });
      });

  }, [getCity]);

  return (
    <DaysContext.Provider value={{ days, status, city, degrees, pickCity }}>
      {children}
    </DaysContext.Provider>
  );

};

const useDays = () => useContext(DaysContext);

export { useDays, Weather };

