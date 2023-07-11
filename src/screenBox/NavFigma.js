import { FcTodoList } from "react-icons/fc";
import { NavLink } from "react-router-dom";


function NavFigma() {
    return (
        <>
            <nav className="navbar">
                <input type="checkbox" id="toggler" />
                <label htmlFor="toggler"><FcTodoList /></label>
                <div className="span">
                    <NavLink className="nav-link" to="/">Drakos <span className="text-white-50">| NFT</span></NavLink>
                </div>
                <div className="menu">
                    <ul className="list">
                        <li>
                            <NavLink className="nav-link" to="burnadarko">Burn a Drako</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="eggauction">$Egg Auction</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="raffletickets">Raffle Tickets</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="p2ptranding">P2P Tranding</NavLink>
                        </li>
                        <button className="connect btn btn-info">Connect Wallet</button>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavFigma;