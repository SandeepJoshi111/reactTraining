import filterEmoji from "../filterEmoji";

export default function Searchbar(props){

function handleChange(event){
  const values = event.target.value;
  const filterEmojis = filterEmoji(values,20);
  props.setEmoji(filterEmojis);
  

}
    return(
        <div className="component-search-input">
        <div>
          <input onChange={handleChange}/>
        </div>
      </div>
    );
  
}