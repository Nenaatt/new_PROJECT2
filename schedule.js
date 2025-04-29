function findEvent() {
  const dateInput = document.getElementById("event-date").value;
  const result = document.getElementById("event-result");

  if (!dateInput) {
    result.textContent = "Please select a date.";
    return;
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const schedule = {
    "Sunday": { time: "2:00 AM", event: "Community Kitchen", location: "Pusat Komuniti Indera Mahkota" },
    "Monday": { time: "9:00 AM", event: "Tree Planting", location: "Taman Tasik Kuantan" },
    "Tuesday": { time: "2:00 PM", event: "Women's Day", location: "Women’s Aid Organisation (WAO)" },
    "Wednesday": { time: "9:00 AM", event: "Food & Supplies Distribution", location: "Orang Asli Village" },
    "Thursday": { time: "3:00 AM", event: "Food & Supplies Distribution", location: "Persatuan Kebajikan Anak-anak Yatim Islam Pulau Pinang" },
    "Friday": { time: "2:00 AM", event: "Food & Supplies Distribution", location: "Giving to Homeless" },
    "Saturday": { time: "9:00 AM", event: "Food & Supplies Distribution", location: "Pertubuhan Kebajikan Islam Malaysia (PERKIM)" },
  };

  const selectedDate = new Date(dateInput);
  const dayName = days[selectedDate.getDay()];

  const eventDetails = schedule[dayName];

  if (eventDetails) {
    result.innerHTML = `<strong>${dayName}</strong>: ${eventDetails.event} at ${eventDetails.location} (${eventDetails.time})`;
  } else {
    result.textContent = "No event scheduled for this day.";
  }
}
