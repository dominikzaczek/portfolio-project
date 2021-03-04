import Article from "./Article";

export default function ArticleButton(props){
    return (<div className="mb-5 h-auto md:h-36 cursor-pointer" onClick={props.onClick} style={{ backgroundImage:`url(${props.image})` , backgroundPosition:'center'}}>
    <div className="transition duration-500 bg-black h-full w-100 p-5 bg-opacity-75 hover:bg-opacity-90 text-center">
    <p className="font-cutive text-xl font-black">{props.title}</p>
    </div>
    </div>)
}