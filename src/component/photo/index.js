import"./index.css";
// import house from "./house.png"
export default function Photo ({src, name}){
	return 	<img src={src} alt={name} className="photo"/>;
	
}