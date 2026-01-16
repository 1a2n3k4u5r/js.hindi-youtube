 //dates

 let myDate = new Date()   // here date is a object
 console.log(myDate.toString()); // Fri Jan 16 2026 16:36:28 GMT+0530 (India Standard Time)
 console.log(myDate.toLocaleString()); //1/16/2026, 4:40:20 PM
 console.log(myDate.toDateString()); // Fri Jan 16 2026
 console.log(typeof myDate);

  //let myCreatedDate = new Date (2023, 0, 23) // Mon Jan 23 2023
  // console.log(myCreatedDate.toDateString());

   // let myCreatedDate = new Date(2023, 0, 23, 5, 23)
   //console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:23:00 AM
   //let myCreatedDate = new Date ("2023-01-14")
   let myCreatedDate = new Date ("01-14-2023")
   // console.log(myCreatedDate.toLocaleString());

   let myTimeStamp = Date.now()

   //console.log(myTimeStamp); // 1768563332049  millisecond value of the date and time
   //console.log(myCreatedDate.getTime());
    // console.log(Math.floor(Date.now()/1000));  //1768564604 time in second in minimum value without decimal

    let newDate = new Date()
    console.log(newDate);
    console.log(newDate.getMonth() + 1);
    console.log(newDate.getDay());

    newDate.toLocaleString('default',{
      weekday: "long",
      
    })




 



