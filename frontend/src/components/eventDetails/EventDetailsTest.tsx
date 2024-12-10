import React from 'react';
import EventDetails from './EventDetails';

const EventDetailTest: React.FC = () => {
  const eventInfo = {
    title: "NZPMC 2024 Round 1",
    date: "02/12/2024",
    time: "3pm",
    location: "University of Auckland",
    price: 13.50,
    registrationDeadline: "31/12/2024, 11:59pm"
  };

  const examDetailsHtml = `
    <p>Register for the first round of annual New Zealand Physics and Mathematics Competition!</p>
    <p><strong>Exam duration:</strong> 2 hour</p>
    <p><strong>Timeframe:</strong> Students may take the exam in any 60-minute time slot on 4th May 2024 (open for 24 hours NZT). The latest time a student can start to have a full 60 minutes is 04/05/2024 at 11:00 PM NZT.</p>
    <p><strong>Location:</strong> Online, Education Perfect (NO teacher supervision is required)</p>
    <p><em>Students will receive their Education Perfect account details through the email they've used to register closer to the exam date.</em></p>
    <p>Resources to familiarise yourself with the Education Perfect platform for Round 1:</p>
    <ul>
      <li><a href="https://youtu.be/xJA6OKwwaT0" target="_blank">https://youtu.be/xJA6OKwwaT0</a></li>
      <li><a href="https://help.students.educationperfect.com/" target="_blank">https://help.students.educationperfect.com/</a></li>
    </ul>
    <p><strong>Questions format:</strong> 40 multi-choice questions for both Juniors and Seniors</p>
  `;

  const handleClose = () => {
    console.log('Close button clicked');
  };

  const handleJoin = () => {
    console.log('Join event button clicked');
  };

  return (
    <div className="App">
      <EventDetails
        eventDetails={eventInfo}
        examDetailsHtml={examDetailsHtml}
        onClose={handleClose}
        onJoin={handleJoin}
        admin={false}
      />
    </div>
  );
};

export default EventDetailTest;

