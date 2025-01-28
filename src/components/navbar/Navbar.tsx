
function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-6 bg-gray-400 text-white">
                <div className="container flex justify-between antialiased text-2xl font-bold">
                    Jupy
                    <div className="flex gap-10 font-medium text-base">
                        <button className="hover:text-stone-200 ">Sobre Nós</button>
                        <button className="hover:text-stone-200">Funcionários</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar