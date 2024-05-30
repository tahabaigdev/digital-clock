const inputScreen = document.querySelectorAll(".screen input");

const clock = () => {
  let current = new Date();
  let hour = current.getHours();
  let minute = current.getMinutes();
  let second = current.getSeconds();
  let change = "AM";

  if (hour > 12) {
    change = "PM";
  }

  if (hour > 12) {
    hour = hour % 12;
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  // Hour
  inputScreen[0].value = hour;
  // Minute
  inputScreen[1].value = minute;
  // Second
  inputScreen[2].value = second;
  //   Change
  inputScreen[3].value = change;
};

// initial call
clock();

setInterval(() => {
  clock();
}, 1000);
