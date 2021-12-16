import React from "react";



function Header(){
    return (
        <div>
        <header>
          <div className='startingIcons'>
            <button className="toggleBtn">
              <img className="toggleImg" src='https://cdn-icons.flaticon.com/png/128/5036/premium/5036953.png?token=exp=1639555629~hmac=de09c5320f04cba059d0e22f0d9beca2' alt='menu' />
            </button>
            <img className="brandLogo" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar"></img>
            <div className='TV'>TV</div>
            <div className='movies'>Movies</div>
            <div className='sports'>Sports</div>
            <div className='disneyPlus'>Disney+</div>
            <div className='kids'>KiDS</div>
          </div>
    
          <div className='endingIcons'>
            <form className="searchBar">
              <input type="search" className="searchInput" placeholder="Search" aria-label="Search" />
              <button className="searchBtn" type="submit">
                
                <img class="searchIcon" src="https://cdn-icons-png.flaticon.com/128/751/751463.png" alt="Search" />
              </button>
            </form>
            <button className='subscribeBtn'>SUBSCRIBE</button>
            <button className='profile'><img src="https://picsum.photos/id/1012/200/300" alt="UserName" class="profileImg" /></button>
    
    
          </div>
        </header>
        
    
      </div>
    );
}
export default Header;