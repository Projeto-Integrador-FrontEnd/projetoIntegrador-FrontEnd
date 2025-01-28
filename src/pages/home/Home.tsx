import { useState } from "react";

function Home() {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <div className="bg-gray flex justify-center">
                <div className='container grid grid-cols-2 text-deep-navy'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        Olá! Você acessou o sistema JUPY
                        </h2>
                        <p className='text-xl'>
                        A solução que você precisava para uma gestão mais humana e eficiente.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/sanmi/Jupy-Sistema-de-RH-removebg.png?updatedAt=1738080459832"
                            alt="Logo do sistema JUPY"
                            className={`w-3/4 ${hovered ? "grayscale-0" : "grayscale"} transition-filter duration-500`}
                            aria-label="Logo do sistema JUPY escrito sistema de RH"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(true)}
                        />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;
