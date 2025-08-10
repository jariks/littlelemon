import { H1, H2, H3, P } from "./Headings"
const Card = ({ source, name, price, content }) => {
  return (
    <div className="w-full sm:max-w-xs flex flex-col overflow-hidden">
      <img className="overflow-hidden w-full aspect-[4/3] rounded-t-[1rem] object-cover h-full" src={source} />
      <div className="bg-gray-200 flex flex-col flex-1 rounded-b-[1rem]">
        <div className="py-4 px-6 flex justify-between items-center">
          <h3 className="font-semibold leading-snug text-lg sm:text-xl font-sans">{name}</h3>
          <h3 className="font-sans font-semibold text-lg sm:text-xl leading-snug text-red-400">${price}</h3>
        </div>
        <P additional="px-6 flex-grow">{content}</P>
        <button className="box-border w-[calc(100%-1rem)] rounded-full bg-lemon-green text-white hover:bg-lemon-yellow hover:text-black p-2 mx-2 mb-4">Order delivery</button>
      </div>

    </div>
  );
}

export default Card;