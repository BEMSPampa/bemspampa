import './Event.scss'
import {  events } from '../../UI/strings'
import { useParams } from "react-router-dom";
const Event: React.FC = () => {

  const { url } = useParams();
  //const { state } = useLocation();
  //const event: EventData = state?.event;

  const eventData = events.find((event) => event.url === url);
  console.log(eventData);


  return (
    <div className="event-container">
      <h1>evento</h1>
      <h1>{url}</h1>
      <h1>{eventData?.description}</h1>
    </div>
  )
}

export default Event