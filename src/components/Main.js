import heroImg from  "../assets/hero_food.jpg"
import Card from "./Card";
function Main() {
  return (
    <>
    <section className="w-full bg-lemon-green">
  <div className="max-w-4xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-5 px-4 sm:px-6 lg:px-8 py-6">
    <div className="max-w-lg">
      <h1 className="font-serif text-lemon-yellow text-3xl sm:text-5xl leading-tight font-semibold tracking-tight">
        Little Lemon
      </h1>
      <h2 className="text-2xl sm:text-3xl leading-snug text-white">Chicago</h2>
      <p className="text-[clamp(1rem,0.9rem+0.6vw,1.125rem)] leading-[1.65] text-white my-4">
        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
      </p>
      <button className="inline-flex items-center font-semibold bg-lemon-yellow p-4 text-black hover:text-white rounded-2xl">
        Reserve a table
      </button>
    </div>

    <div className="max-w-sm w-full">
      <img className="rounded-2xl w-full aspect-square object-cover" src={heroImg} alt="" />
    </div>
  </div>
</section>

    <section className="">
      <h1>This weeks specials!</h1>
      <button> online menu</button>
      <div>
        <Card/>
      </div>

    </section>
    </>
  );
}

export default Main;

