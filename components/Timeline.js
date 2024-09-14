import { useState } from 'react';

const Timeline = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div>
      {events.map((event, idx) => (
        <div key={idx} onClick={() => setSelectedEvent(event)}>
          <h2>{event.title} ({event.date})</h2>
        </div>
      ))}

      {selectedEvent && (
        <div className={styles.modal}>
          <div className={styles['modal-content']}>
            <span className={styles.close} onClick={() => setSelectedEvent(null)}>&times;</span>
            <h2>{selectedEvent.title} ({selectedEvent.date})</h2>
            <p>{selectedEvent.description}</p>
            <p><strong>Betydning:</strong> {selectedEvent.significance}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
