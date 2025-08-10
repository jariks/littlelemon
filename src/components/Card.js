import { H1, H2, H3, P } from "./Headings"
const Card = ({ source, name, price, content }) => {
  return (
    <div className="max-w-xs">
      <img className="rounded-t-[1rem] w-full" src={source} />
      <div>
        <div className="py-4 px-6 flex justify-between items-center">
          <H3>Greek Salad</H3>
          <h3 className="font-sans font-semibold text-xl sm:text-2xl leading-snug text-red-400">$19.99</h3>
        </div>
        <P additional="px-6">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</P>
        <button className="rounded-full bg-lemon-green text-white hover:bg-lemon-yellow hover:text-black px-4 py-6">Order delivery</button>
      </div>

    </div>
  );
}

export default Card;