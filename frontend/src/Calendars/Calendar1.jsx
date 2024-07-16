import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "@demark-pro/react-booking-calendar";
import "@demark-pro/react-booking-calendar/dist/react-booking-calendar.css";
import { getByLabelText } from "@testing-library/react";
import { getDateFormat } from "./functions/getDateFormat";

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






const currentDateFormat = '16.07.2024';
let tick = 1;

while(tick < 1000)
{
 
 //const dateData = new Date(globalStartDate + oneDay * tick).getDate(); // day
 //const dateData = new Date(globalStartDate + oneDay * tick).getMonth(); // m
 const dateData = new Date(globalStartDate + oneDay * tick); //

 //console.log( getDateFormat(dateData));

  if(getDateFormat(dateData) === currentDateFormat)
  {
    //console.log("Is worcking ! ", dateData); // ok !!!
    break
  }
tick++;
}



const startDate = new Date(today + oneDay * 8 );

const reserved = [
    // {
    //     startDate: new Date(today - oneDay * 10),
    //     endDate: new Date(startDate.getTime() + oneDay)
    // }
];





const Calendar1 = function () {
  const [selectedDates, setSelectedDates] = useState([]);
  const [month, setMonth] = useState(0);
  const el = useRef();
  const [cal, setCal] = useState(null);
  const [ariaLabel, setAriaLebale] = useState('');
  //console.log(month); // ok
    // setTimeout(() => {
    //   console.log(el.current.firstChild)
    // }, 1000);

useEffect(() => {
 setCal(el.current.firstChild.lastChild);
//console.log(cal);
}, [el]);



setTimeout(() => {
  if(cal)
    {
       // console.log(ariaLabel);
       // console.log(cal.childNodes);
       for(let i = 0; i < cal.childNodes.length; i++)
        {
           if(cal.childNodes[i].ariaLabel === ariaLabel)
           {
            cal.childNodes[i].style.backgroundColor = "red";
           }
           else {
            cal.childNodes[i].style.backgroundColor = "";
           }
        }
    }
}, 0);


  return (
    <div ref={el}>
      <Calendar
        initialDate={null}
        onMonthChange={setMonth}
       // month={month}
        selected={selectedDates}
        reserved={reserved}
        onChange={
          // setSelectedDates
          (e) => {
            console.log(getDateFormat(e[0]));
          }
        }
        
        onClick={(e) => {
          
            if(e.target.parentNode.ariaLabel 
              && e.target.classList.contains('calendar__day-content')
            )
            {
                //console.log(e.target.parentNode.ariaLabel[0]);
                setAriaLebale(e.target.parentNode.ariaLabel);
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
    </div>
  );
};

export default Calendar1;
