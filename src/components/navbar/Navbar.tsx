import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-6 bg-deep-navy text-white">
                <div className="container flex justify-between antialiased text-3xl font-bold">
                    <Link to='/home' className='hover:text-sky-blue'>
                        Jupy
                    </Link>
                    <div className="flex gap-10 font-medium text-lg">
                        <Link to='/sobre' className='hover:text-sky-blue'>
                            Sobre nós
                        </Link>
                        <Link to='/funcionarios' className='hover:text-sky-blue'>
                            Funcionários
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
