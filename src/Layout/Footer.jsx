import React from "react";

const Footer = () => {

    const d = new Date();
    return(
        <footer>
            &copy; Siavash Gosheh - React Assignment - {(d.getFullYear())}
        </footer>
    )
}

export default Footer;