import EmojiItem from "./EmojiItem";

export default function Emojilist(props){

    const data = props.data;
    // console.log(data)
    return(
        <>
        <div className="componenet-emoji-results"></div>
        {
            data.map(function(item)
            {
                return(
                    <EmojiItem title = {item.title}  symbol={item.symbol} />
                )
            })
        }

        </>
    );
}