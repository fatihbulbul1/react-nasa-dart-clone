import google from './google.png';
const Search = () => {
    return(
        <div className="search">
            <img className="google-img" src={google} alt=""/>
            <div className="input-div">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input autoComplete="off" type="search"/>
            </div>
            <div className="btns-div">
                <input type="button" className="btn" value="Google Search"/>
                <input type="button" className="btn" value="I'm Feeling Lucky"/>
            </div>
        </div>
    )
}
export default Search