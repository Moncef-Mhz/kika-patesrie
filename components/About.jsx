import React from "react";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center p-10 md:p-20  text-background"
    >
      <div className="flex flex-col space-y-7  md:pr-5">
        <div className="flex flex-col space-y-5">
          <h1 className="md:text-4xl text-xl md:text-start text-center font-bold">
            Découvrez les saveurs exquises <br />
            de notre pâtisserie.
          </h1>
          <p className="md:text-base md:pr-10 md:text-start text-center">
            Régalez-vous de nos délicieuses pâtisseries, confectionnées avec des
            ingrédients spéciaux et des techniques de cuisson uniques.
          </p>
        </div>
        <div className="flex items-center flex-col md:flex-row space-y-4 w-full justify-center md:pb-0 pb-4">
          <div className="space-y-2 ">
            <h1 className="font-bold text-lg">Ingrédients spéciaux</h1>
            <p className="text-sm w-[80%]">
              Nous n'utilisons que les meilleurs ingrédients pour créer nos
              pâtisseries alléchantes
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-lg">Techniques uniques</h1>
            <p className="text-sm  w-[80%]">
              Nos chefs pâtissiers utilisent des techniques innovantes pour
              révéler les meilleures saveurs
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
        <img src="/pastry.jpg" alt="pastry" className="rounded-sm" />
      </div>
    </div>
  );
}

export default About;
