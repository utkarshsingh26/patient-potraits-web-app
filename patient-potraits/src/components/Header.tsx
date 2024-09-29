import './Header-styles.css'
function Header(){
    return (<div className="header">
        <div className='mayoLogo'>
            <img className='mayoPicture' src='/Mayo_Clinic_Logo.png'></img>
        </div>
        <div className="emptySpace"></div>
    </div>)
}

export default Header;