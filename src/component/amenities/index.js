import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import Pool from "./pictrures/pool.svg";
import Breakfast from "./pictrures/breakfast.svg";
import Childrens from "./pictrures/children.svg";
import Concierge from "./pictrures/concierge.svg";
import Gym from "./pictrures/gym.svg";
import Parking from "./pictrures/parking.svg";
import Pets from "./pictrures/pets.svg";
import Roomservice from "./pictrures/roomservice.svg";
import Shuttle from "./pictrures/shuttle.svg";
import Wifi from "./pictrures/wifi.svg";

export default function Amenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <Box className="amneties">
      <Heading border>{"Зручності"}</Heading>
      <ul className="amneties__list">
        {hasPool && <ListItem imageSrc={Pool}>басейн</ListItem>}
        {hasGym && <ListItem imageSrc={Gym}>спортивний зал</ListItem>}
        {hasFreeBreakfast && (<ListItem imageSrc={Breakfast}>Безкоштовний сніданок</ListItem>)}
        {hasFreeWiFi && <ListItem imageSrc={Wifi}>Безкоштовний Wi-Fi</ListItem>}
        {hasParking && (
          <ListItem imageSrc={Parking}>Безкоштовний вуличний паркінг</ListItem>
        )}
        {hasPetsAllowed && (
          <ListItem imageSrc={Pets}>
            Дозволено розміщення з домашніми тваринами
          </ListItem>
        )}
        {hasAirportShuttle && (
          <ListItem imageSrc={Shuttle}>Трансфер до/з аеропорту</ListItem>
        )}
        {hasConciergeService && (
          <ListItem imageSrc={Concierge}> Консьєрж-сервіс</ListItem>
        )}
        {hasRoomService && (
          <ListItem imageSrc={Roomservice}>Обслуговування номерів</ListItem>
        )}
        {hasChildFriendly && (
          <ListItem imageSrc={Childrens}>Підходить для дітей</ListItem>
        )}
      </ul>
    </Box>
  );
}
