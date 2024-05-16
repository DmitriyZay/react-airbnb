import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import { Fragment } from "react";

export default function GuestReviews ({list}) {
  return (
    <div className="room__block">
      <Heading> Відкуки клієнтів</Heading>
      <div className="room__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest}/>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item ({guestName,rating,review}){
	return(
		<Box className="gues-reviews">
			<div className="gues-reviews__header"> 
			<span className="gues-reviews__name"> {guestName}</span>
			<span className="gues-reviews__rating">Рейтинг: {rating} </span>
			</div>
	
			<span className="gues-reviews__text"> {review}</span>
	

		</Box>
	)
}
