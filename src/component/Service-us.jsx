import React from 'react'

function Service() {
  return (
    <div>
    <div>
      <h1>Admissions</h1>
      <p>Apply for admission into various programs offered by our school.</p>

      <h3>Requirements:</h3>
      <ul>
        <li>Birth Certificate</li>
        <li>Previous School Record</li>
        <li>2 Passport Photos</li>
      </ul>
    </div>
    </div>

  )
}
const timetable = [
  { subject: "Math", time: "9:00 AM" },
  { subject: "Science", time: "10:00 AM" },
  { subject: "English", time: "11:00 AM" },
  { subject: "History", time: "1:00 PM" },
];
 function Timetable() {
  return (
    <div>
      <h1>Daily Timetable</h1>
      <ul>
        {timetable.map((item, index) => (
          <li key={index}>
            <strong>{item.subject}</strong> — {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
const teachers = [
  { name: "Mr. Johnson", subject: "Math" },
  { name: "Ms. Sarah", subject: "Science" },
  { name: "Mr. Lee", subject: "English" },
];
 function Teachers() {
  return (
    <div>
      <h1>Teachers</h1>
      <ul>
        {teachers.map((t, i) => (
          <li key={i}>
            <strong>{t.name}</strong> — {t.subject}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Service
