import heroImg from "../assets/hero_food.jpg";
import card1 from "../assets/bruchetta.svg"
import card2 from "../assets/greek salad.jpg"
import card3 from "../assets/lemon dessert.jpg"
import { ButtonPrimary, H1, H2, P } from "./Headings";
import Card from "./Card";
function Main() {
  return (
    <>
      <section className="w-full bg-lemon-green">
        <div className="max-w-4xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-5 px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-lg">
            <H1 additional="text-lemon-yellow">Little lemon</H1>
            <H2 additional="text-white">Chicago</H2>
            <P additional="text-white">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
            </P>
            <ButtonPrimary>Reserve a table</ButtonPrimary>
          </div>

          <div className="max-w-sm w-full">
            <img className="rounded-2xl w-full aspect-square object-cover" src={heroImg} alt="" />
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="w-full flex gap-4 justify-between items-center mb-4">
            <H2>Reserve a table</H2>
            <ButtonPrimary> online menu</ButtonPrimary>
          </div>
          <div className="grid grid-rows-3 grid-cols-1 sm:grid-rows-1 sm:grid-cols-3 gap-6 items-stretch">
            <Card source={card1} name="Greek Salad" price="12.99" content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
            <Card source={card2} name="Bruchetta" price="5.99" content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
            <Card source={card3} name="Lemon Dessert" price="8.99" content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;

