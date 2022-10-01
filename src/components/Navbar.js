import tools from './tools.png';
import avatar from './avatar.png';
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li ><a className="link" href="#">Gmail</a></li>
                <li ><a className="link" href="#">Images</a></li>
                <li className="tools"><a href="">
                    <img src={tools} alt=""/>
                    </a></li>
                <li className="avatar"><a href="#">
                    <img src={avatar} alt=""/>
                    </a></li>
            </ul>
        </nav>
    )
}
export default Navbar