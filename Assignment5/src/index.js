import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const DAYS_MILLISECONDS = 86400000;
const HOURS_MILLISECONDS = 3600000;
const MINUTES_MILLISECONDS = 60000;
const SECONDS_MILLISECONDS = 1000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const currentDate = new Date();
  let timeDiffFromCurrent2Xmas = xmasDay - currentDate;
  let remainDays = 0, remainHours = 0, remainMinutes = 0, remainSeconds = 0;
  while (timeDiffFromCurrent2Xmas > DAYS_MILLISECONDS){
    remainDays += 1;
    timeDiffFromCurrent2Xmas -= DAYS_MILLISECONDS;
  }
  while (timeDiffFromCurrent2Xmas > HOURS_MILLISECONDS){
    remainHours += 1;
    timeDiffFromCurrent2Xmas -= HOURS_MILLISECONDS;
  }
  while (timeDiffFromCurrent2Xmas > MINUTES_MILLISECONDS){
    remainMinutes += 1;
    timeDiffFromCurrent2Xmas -= MINUTES_MILLISECONDS;
  }
  while (timeDiffFromCurrent2Xmas > SECONDS_MILLISECONDS){
    remainSeconds += 1;
    timeDiffFromCurrent2Xmas -= SECONDS_MILLISECONDS;
  }
  const formattedDays = `${remainDays < 10 ? `0${remainDays}` : `${remainDays}`}`;
  const formattedHours = `${remainHours < 10 ? `0${remainHours}` : `${remainHours}`}`;
  const formattedMinutes = `${remainMinutes < 10 ? `0${remainMinutes}` : `${remainMinutes}`}`;
  const formattedSeconds = `${remainSeconds < 10 ? `0${remainSeconds}` : `${remainSeconds}`}`;

  ddayClockContent.innerText = `${formattedDays}d ${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`
}

const ddayClockContainer = document.querySelector(".js-clock");
const ddayClockContent = ddayClockContainer.querySelector("h2");

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

