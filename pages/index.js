// pages/index.js

import Timeline from '../components/Timeline';
import events from '../data/events';

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Danmark i Middelalderen</h1>
      <Timeline events={events} />
    </div>
  );
}
