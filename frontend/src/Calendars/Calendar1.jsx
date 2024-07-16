import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "@demark-pro/react-booking-calendar";
import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";
import { getByLabelText } from "@testing-library/react";
import { getDateFormat } from "./functions/getDateFormat";
import { addReserv, reserves, reservProg } from "./reserv";

const oneDay = 86400000;
const today = new Date().getTime() + oneDay;
const globalStartDate = new Date().getTime() - oneDay * 160;

// const reserved = Array.from({ length: 3 }, (_, i) => {
//   const daysCount = Math.floor(Math.random() * (7 - 4) + 3);
//   const startDate = new Date(today + oneDay * 8 * i);
//   console.log(startDate);
//   return {
//     startDate,
//     endDate: new Date(startDate.getTime() + oneDay * daysCount),
//   };
// });
const testDate = new Date(today);
// console.log('testDate = ', testDate);
// console.log(new Date(globalStartDate));

const currentDateFormat = "16.07.2024";
let tick = 1;

while (tick < 1000) {
  //const dateData = new Date(globalStartDate + oneDay * tick).getDate(); // day
  //const dateData = new Date(globalStartDate + oneDay * tick).getMonth(); // m
  const dateData = new Date(globalStartDate + oneDay * tick); //

  //console.log( getDateFormat(dateData));

  if (getDateFormat(dateData) === currentDateFormat) {
    //console.log("Is worcking ! ", dateData); // ok !!!
    break;
  }
  tick++;
}

const startDate = new Date(today + oneDay * 8);

const reserved = [
  // {
  //     startDate: new Date(today - oneDay * 10),
  //     endDate: new Date(startDate.getTime() + oneDay)
  // }
];

const Calendar1 = function () {
  const [draw, setDraw] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);

  const el = useRef();
  const [cal, setCal] = useState(null);
  const [ariaLabel, setAriaLebale] = useState("");

  useEffect(() => {
    setCal(el.current.firstChild.lastChild);
  }, [el]);

  setTimeout(() => {
    if (cal) {
      // console.log(ariaLabel);
      // console.log(cal.childNodes);
    // reserves.length && console.log("reserves[0].arr.length", reserves[0].datesArr.length);
      for (let i = 0; i < cal.childNodes.length; i++) {
        const div = cal.childNodes[i];
        let color = "";
        for (let k = 0; k < reserves.length; k++) {
          const reserv = reserves[k];
          for (let j = 0; j < reserv.datesArr.length; j++) {
            const reservedDay = reserv.datesArr[j];
            // console.log('reservedDay = ', reservedDay, ' div.ariaLabel', div.ariaLabel);
            // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            if (reservedDay === div.ariaLabel) {
             // console.log(div.ariaLabel);
              color = "red";
              break;
            }
          }
          if (color) {
            break;
          }
        }
        // if (div.ariaLabel === ariaLabel) {
        //   div.style.backgroundColor = "red";
        // } else {
        //   div.style.backgroundColor = "";
        // }
        div.style.backgroundColor = color;
      }
    }
  }, 0);

  // console.log(selectedDates);
  //console.log(ariaLabel);
  //console.log(selectedDates);
  //const dt = new Date();
  //console.log("date = ", dt);
  //console.log("JSON date = ", new Date(dt)); // ok
  //console.log("JSON date = ", new Date(JSON.parse(JSON.stringify(dt)))); // ok
  return (
    <div ref={el}>
      <Calendar
        protection={false}
        onMonthChange={setDraw}
        onYearChange={setDraw}
        initialDate={null}
        selected={selectedDates}
        reserved={reserved}
        onChange={
          // setSelectedDates
          (e) => {
            console.log(getDateFormat(e[0]));
           // console.log(e[0].getMonth());
            reservProg(setSelectedDates, e[0]);
          }
        }
        onClick={(e) => {
         // console.log("onClick = ", e.targe);
          if (
            e.target.parentNode.ariaLabel &&
            (e.target.classList.contains("calendar__day-content") ||
              e.target.classList.contains("calendar__day-today"))
          ) {
            // setAriaLebale(e.target.parentNode.ariaLabel); // ok
          }
          // console.log(e.target.parentNode.ariaLabel);
          //     console.log(e.target.parentNode);
          //    if(e.target.parentNode.ariaLabel)
          //    {

          //     e.target.style.backgroundColor = "red";
          //    }
          // const ariaL = e.target.parentNode.ariaLabel;
          //     if(cal)
          //     {
          //         for(let i = 0; i < cal.childNodes.length; i++)
          //             {
          //                // console.log(cal.childNodes[i].ariaLabel);
          //                 if(cal.childNodes[i].ariaLabel === ariaL)
          //                 {
          //                     console.log(ariaL);
          //                     cal.childNodes[i].style.backgroundColor = "red";
          //                 }
          //             }
          //     }
        }}
      />
      {selectedDates.length === 2 && (
        <>
          <button
            type="button"
            onClick={() => {
              console.log("here");
            }}
          >
            бронировать
          </button>

          <button
            type="button"
            onClick={() => addReserv(selectedDates, setSelectedDates, "go")}
          >
            сдать
          </button>

          <button type="button" onClick={() => setSelectedDates([])}>
            отмена выбора
          </button>
        </>
      )}
    </div>
  );
};

export default Calendar1;
