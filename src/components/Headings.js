
const H1 = ({ children, additional = " " }) => {
   return (
      <>
         <h1 className={`font-serif text-3xl sm:text-5xl leading-tight font-semibold tracking-tight ${additional}`}>
            {children}
         </h1>
      </>
   );
}
const H2 = ({ children, additional }) => {
   return (
      <>
         <h2 className={`font-serif font-semibold text-2xl sm:text-3xl leading-snug ${additional}`}>
            {children}
         </h2>
      </>
   );
}
const H3 = ({ children, additional }) => {
   return (
      <>
         <h3 className={`font-serif font-semibold text-xl sm:text-2xl leading-snug ${additional}`}>
            {children}
         </h3>
      </>
   );
}
const P = ({ children, color = "black", additional = " " }) => {
   return (
      <>
         <p className={`text-[clamp(1rem,0.9rem+0.6vw,1.125rem)] leading-[1.65] text-${color} my-4 ${additional}`}>
            {children}
         </p>
      </>
   );
}
const ButtonPrimary = ({ children }) => {
   return (
      <>
         <button className="inline-flex items-center font-semibold bg-lemon-yellow p-4 text-black hover:text-white rounded-2xl">
            {children}
         </button>
      </>
   );
}


export { H1, H2, H3, P, ButtonPrimary };