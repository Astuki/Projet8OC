import KasaFooterLogo from '../../assets/KasaFooterLogo.png'

export default function Footer() {

    return(
        <div className="footer">
            <img src={KasaFooterLogo}></img>
            <p className="footer_text">© 2020 Kasa All rights reserved</p>
        </div>
    )
}