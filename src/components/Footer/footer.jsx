import KasaFooterLogo from '../../assets/KasaFooterLogo.png'

export default function Footer() {

    return(
        <footer className="footer">
            <img src={KasaFooterLogo}></img>

            <p className="footer_text">
            © 2020 Kasa, All 
            <br></br>
            rights reserved
            </p>

        </footer>
    )
}