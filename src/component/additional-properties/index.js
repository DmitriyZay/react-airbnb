import "./index.css";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function AdditionalProperties({ house_rules, cancellation_policy,local_transportation, langues,special_offers, check_in_instructions }) {
  return (
    <Box className="add-properties">
      <Heading>{"Додаткові властивості"}</Heading>
      <ul className="add-properties__list">
		<ListItem title={"Правила дому"}>{house_rules}</ListItem>
		<ListItem title={"Політика скасування"}>{cancellation_policy}</ListItem>
		<ListItem title={"Місцевий транспорт"}>{local_transportation}</ListItem>
        <ListItem title={"Мови хоста"} >
          {langues.map((any) => (
            <span className="lang">{any}</span>
          ))}
        </ListItem>
		<ListItem title={"Спеціальні пропозиції:"}>{special_offers}</ListItem>
		<ListItem title={"Інструкції щодо реєстрації"}>{check_in_instructions}</ListItem>
      </ul>
    </Box>
  );
}
