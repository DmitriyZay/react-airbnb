import"./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import LogoGuests from "./guest.svg";
import Bedrooms from "./bedrooms.svg";
import Beds from "./beds.svg";
import Baths from "./baths.svg";
export default function Properties ({
	guests,
	bedrooms,
	beds,
	baths,
}){
	return (
<Box className="properties">
<Heading border>{"Деталі властивості:"}</Heading>
<ul className="properties__list"> 
{guests && (<ListItem imageSrc={LogoGuests}>{guests} гості</ListItem>)}
{guests && (<ListItem imageSrc={Bedrooms}>{bedrooms} спальня</ListItem>)}
{guests && (<ListItem imageSrc={Beds}>{beds} ліжко</ListItem>)}
{guests && (<ListItem imageSrc={Baths}>{baths} ванна кімната</ListItem>)}
</ul>

</Box>
	)
}