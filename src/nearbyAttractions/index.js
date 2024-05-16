import "./index.css"
import Box from "../component/box"
import ListItem from "../component/list-item"
import Heading from "../component/heading"
import { Fragment } from "react"

export default function NearbyAttractions ({list}){
return (
	<Box className="near-by-attractions">
	<Heading>Пам'ятки поблизу</Heading>
	
	{list.map(({ id, name, link }) => (
          <Fragment key={id}>
           <ListItem className="near-by-attractions__list">
		   <a href={"https://"+link} className="near-by-attractions__link">{name}</a>
			</ListItem>
          </Fragment>
        ))}
		</Box>
)
}