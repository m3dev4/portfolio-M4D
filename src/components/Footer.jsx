import { Link } from "react-router-dom"
import  {socialLinks}  from "../constants"

const Footer = () => {
  return (
    <footer className="footer font-poppins">
        <hr  className="border-slate-700"/>
        <div className="footer-container">
            <p className="text-black">
           © 2024 <strong>Mouhamed Lo</strong>. All Rights Reserved.       
            </p>
            <div className="flex justify-center align-center ml-14">
                {socialLinks.map((link) =>(
                    <Link key={link.name} to={link.link} target='_blanc' className="flex align-center ml-2">
                        <img 
                        src={link.iconUrl}
                        alt={link.name}
                        className="w-6 h-6 object-contain "
                        />
                    </Link>
                ) )}
            </div>
        </div>
    </footer>
  )
}

export default Footer