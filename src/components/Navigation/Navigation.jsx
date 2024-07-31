const Navigation = ({className}) => {
    return (
        <nav>
            <ul className={className}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </nav>
    )
};

export default Navigation;