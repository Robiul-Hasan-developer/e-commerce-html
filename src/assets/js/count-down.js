function initializeCountdown(elementId, endDate) {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const countDown = new Date(endDate).getTime();
  
  setInterval(function() {
      const now = new Date().getTime(),
            distance = countDown - now;

      document.querySelector(`#${elementId} .days`).innerText = Math.floor(distance / (day));
      document.querySelector(`#${elementId} .hours`).innerText = Math.floor((distance % (day)) / (hour));
      document.querySelector(`#${elementId} .minutes`).innerText = Math.floor((distance % (hour)) / (minute));
      document.querySelector(`#${elementId} .seconds`).innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
          document.querySelector(`#${elementId}`).style.display = "none";
          clearInterval(this);
      }
  }, 1000);
}

// Initialize countdowns
initializeCountdown('countdown1', '2025-12-30');
initializeCountdown('countdown2', '2025-12-20');
initializeCountdown('countdown3', '2025-12-24');
