import './Navbar.css';

function Navbar(props){
    return(
        <nav className='navbar text-white'>{props.children}</nav>
    )


}

export default Navbar;