import React from "react";

function Sobre() {
  return (
    <>
      <div className="bg-gray flex justify-center rounded-b-3xl ">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4 ">
            <div className="flex flex-col  p-12   rounded-3xl bg-gray-300  justify-center ">
              <h2 className="text-4xl font-bold text-black font-mono">
                O que é Jupy?
              </h2>
              <p className="text-xl text-black text-center underline font-semibold mt-5">
                Mais que uma ferramenta, Praticidade.
              </p>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/sanmi/Jupy-Sistema-de-RH-removebg.png?updatedAt=1738080459832"
              alt="Imagem Página Home"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center my-4 bg-soft-blue rounded-3xl">
        <div className=" flex flex-col items-center w-1/2 my-8 mr-2 ml-4 bg-gray-300 rounded-4xl">
          <h2 className=" font-mono font-bold text-4xl">Sobre o Site:</h2>
          <p className=" text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            hic incidunt dolore, maiores similique quas laboriosam laudantium,
            impedit dolorum consectetur, sed veritatis? Placeat totam vel eius
            adipisci sed, nesciunt rem! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Obcaecati, sequi tempora aliquam ullam non nobis
            esse, saepe dignissimos quod assumenda dicta, eligendi iure
            doloribus quam a! Officiis voluptas laborum omnis!
          </p>
        </div>
        <div className=" flex flex-col items-center w-1/2 my-8 mr-4 ml-2 bg-gray-300 rounded-4xl">
          <h2 className=" font-mono font-bold text-4xl">Sobre o Projeto:</h2>
          <p className=" text-center ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            harum sit debitis voluptas velit corporis voluptate maiores. Impedit
            dicta deleniti officia asperiores dignissimos. Iure iste laborum
            vero quos, maxime saepe. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Velit earum at sed! Obcaecati molestias, odit
            minus perferendis nisi illo dolorum nihil amet. Maiores, consequatur
            voluptatem adipisci at veniam quo animi.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-gray rounded-t-3xl">
        <h2 className="text-white font-mono font-bold text-4xl">Desenvolvedores:</h2>
        <div className="flex flex-row items-center gap-2 mt-4 mb-2">
          <a
            href="https://www.linkedin.com/in/cttcaiquegomes/ "
            target="_blank"
          >
            <img
              className="border-6 rounded-full h-40 hover:scale-110 border-sky-blue"
              src="https://ik.imagekit.io/ix39wusls/Fotos%20PI/caique%20rec?updatedAt=1738073986570"
              alt="Logo JavaScript"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/danieldossantoslima/"
            target="_blank"
          >
            <img
              className="border-6 rounded-full h-40 hover:scale-110 border-sky-blue"
              src="https://ik.imagekit.io/ix39wusls/Fotos%20PI/daniel%20rec?updatedAt=1738073986046"
              alt="Logo TypeScript"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/adaniellasantana/"
            target="_blank"
          >
            {" "}
            <img
              className="border-6 rounded-full h-40 hover:scale-110 border-sky-blue"
              src="https://ik.imagekit.io/ix39wusls/Fotos%20PI/daniela%20rec?updatedAt=1738073986769"
              alt="Logo React"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sabrina-santoslima/"
            target="_blank"
          >
            <img
              className="border-6 rounded-full h-40 hover:scale-110 border-sky-blue"
              src="https://ik.imagekit.io/ix39wusls/Fotos%20PI/sabrina%20rec?updatedAt=1738073986447"
              alt="Logo Tailwind"
            />
          </a>
          <a href="https://www.linkedin.com/in/rodrigodevv/" target="_blank">
            <img
              className="border-6 rounded-full h-40 hover:scale-110 border-sky-blue"
              src="https://ik.imagekit.io/ix39wusls/Fotos%20PI/rodrgo%20rec?updatedAt=1738073986681"
              alt="Logo Git"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Sobre;
