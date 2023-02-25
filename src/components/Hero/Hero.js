// import React from "react";

// function Hero() {
//   const initialAppartments = 0;
//   const numberOfAvalibleAppartments = 2000;

//   // Determine the space the counter needs by 1, 10, 100, 1000 etc
//   const space = Math.floor(Math.log10(numberOfAvalibleAppartments) + 1);

//   // Count from initialAppartments to numberOfAvalibleAppartments
//   const [appartments, setAppartments] = React.useState(initialAppartments);
//   const [time, setTime] = React.useState(2000 / numberOfAvalibleAppartments);

//   React.useEffect(() => {
//     if (appartments < numberOfAvalibleAppartments) {
//       setTimeout(() => {
//         setAppartments(appartments + 1);
//         if (appartments > numberOfAvalibleAppartments - 5) {
//           setTime(time + 75);
//         } else if (appartments > numberOfAvalibleAppartments - 25) {
//           setTime(time + 10);
//         } else if (appartments > numberOfAvalibleAppartments - 75) {
//           setTime(time + 1);
//         }
//       }, time);
//     }
//   }, [appartments]);

//   const titleCounter = <span className={`row-${space}`}>{appartments}</span>;

//   const title = (
//     <>Välkommen till {titleCounter} Rikshem lägenheter i Stockholm</>
//   );

//   return (
//     <section className={styles.PageHero}>
//       <h1>{title}</h1>
//       <button className="btn">Primary button</button>
//     </section>
//   );
// }

// export default Hero;
