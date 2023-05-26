import logo from '../../assets/img/logo.svg';

import'./styles.css';

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/math7z_" target='_blank'>@matheusgmello</a>
                </p>
            </div>
        </header>

    )
}

export default Header;