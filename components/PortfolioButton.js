import Link from 'next/link'
export default function PortfolioButton(props){
    return <img src={props.imageSource} onClick={props.onClick} className="cursor-pointer hover:animate-pulse hover:scale-50 mb-10 xl:ml-2 md:ml-10 flex-1 xl:w-1/5 md:w-1/3 sm:w-100"/>
}