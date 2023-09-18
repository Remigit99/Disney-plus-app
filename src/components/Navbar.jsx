import { BiHomeAlt2 } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import { BiPlus } from "react-icons/bi"
import { CiStar } from "react-icons/ci"
import { RiMovie2Line } from "react-icons/ri"
import { BsCollectionPlayFill } from "react-icons/bs"


const menu = [
    {
        name: "HOME",
        icon: <BiHomeAlt2 />
    },
    {
        name: "SEARCH",
        icon: <BiSearch />
    },
    {
        name: "WATCHLIST",
        icon: <BiPlus />
    },
    {
        name: "ORIGINALS",
        icon: <CiStar />
    },
    {
        name: "MOVIES",
        icon: <RiMovie2Line />
    },
    {
        name: "SERIES",
        icon: <BsCollectionPlayFill />
    }
]

const Navbar = () => {

    return (

        menu.map((item, index) => {
            return (
                <li className="flex gap-1 items-center text-white hover:underline hover:underline-offset-[4px] cursor-pointer" key={index}>
                    {item.icon}
                    {item.name}
                </li>
            )
        })

    )
}

export default Navbar;