const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  export const timeConvert = (defaultTime) => {
    const time = new Date(defaultTime);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    return `${hours} : ${minutes}`;
  };
  
  export const fullTime = (startDateTime, endDateTime) => {
    return `${timeConvert(startDateTime)}  -  ${timeConvert(endDateTime)}`;
  };


  export const fullDate = (dateTime, withYear = false) => {
    const date = new Date(dateTime);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return !withYear ? `${day} ${month},  ${year}` : `${day} ${month}`;
  };


  export const dateTimeConvert = (defaultTime) => {
    const date = new Date(defaultTime)
    const day = date.getDate();
    let month = date.getMonth() + 1;
    if(month < 10){ 
      month = '0' + month
    }
    const year = date.getFullYear();
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day}/${month}/${year} ${hours}:${minutes}`
  }