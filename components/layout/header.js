import Link from 'next/link';

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {

  return (
    <header id="header" className="clearfix">
      <div className='menu'>
        <div className='left_menu'>
          <Link href="/">
            <a className='logo'>
              <img src="images/bitcoinlottery@2x-1.png" />
            </a>
          </Link>
          <ul>
            <li className=""><Link href="/lottery">Lottery</Link></li>
            <li className=""><Link href="/lottery-results">Results</Link></li>
            <li className=""><Link href="https://cashgames.bitcoin.com/home" target="_blank">Casino</Link></li>
            <li className="has-child">
              <a href="/about-us">
                About&nbsp;
				        <svg className="arrowsvg" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					        <path d="M1 1L6.92766 7L13 1" strokeWidth="2" />
                </svg>
              </a>
              <ul className="submenu">
                <li><a href="/faq">FAQ</a></li>
                <li><a className="contact-us-modal" href="#">Contact Us</a></li>
                <li><a className="tc-modal" href="#">Terms and Conditions</a></li>
              </ul>
            </li>
          </ul>
          <div className="header-bitcoin-values">
            <a href="/lottery" className="header-bitcoin-values-link">
              <div className="header-bitcoin-values-item">
                <div>
                  <img src="images/bch.png" />
                </div>
                <div>
                  <div className="header-bitcoin-values-item-title">
                    BCH
                  </div>
                  <div className="header-bitcoin-values-item-value header-bitcoin-values-item-bch-value">
                    &#36;0
                  </div>
                </div>
              </div>
            </a>
            <a href="/lottery" className="header-bitcoin-values-link">
              <div className="header-bitcoin-values-item">
                <div>
                  <img src="images/btc.png" />
                  
                  <div className="header-bitcoin-values-item-title">
                    BTC
                  </div>
                  <div className="header-bitcoin-values-item-value header-bitcoin-values-item-btc-value">
                    &#36;0
                  </div>
                </div>
              </div>
            </a>
            <a href="https://buy.bitcoin.com" className="header-bitcoin-values-buy" target="_blank">Buy Bitcoin</a>
            <a href="#" className="header-bitcoin-values-buy show-sign-in deposit-page-nav-btn">Deposit Now</a>
          </div>
        </div>
        <div className="right_menu">
          <div className="login-register">
            <button type="button" className="signin show-sign-in"><img src="images/icon-login.png" />Log in</button>
            <button type="button" className="register show-sign-up"><img src="images/icon-register.png" />Register</button>
          </div>
        </div>
      </div>
      <div className="wrap new_header_mobile_menu">
        <a className="new_header_menu_logo" href="#">
          <img src="images/bitcoinlottery@2x-1.png" />
        </a>
        <a href="#" data-href="nav" className="mobile-trigger trigger-nav">
          <i>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </i>
        </a>
        <div id="menu-container">
          <ul className="wrap-top-menu">
            <li className=""><a href="/lottery">Lottery</a></li>
            <li className=""><a href="/lottery-results.html">Results</a></li>
            <li className=""><a href="https://cashgames.bitcoin.com/home" target="_blank">Casino</a></li>
            <li className="has-child mobile-menu">
              <div>
                <a href="/about-us.html">About</a>
                <div className="arrow_down_button">
                  <svg className="arrowsvg" width="20" height="20" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6.92766 7L13 1" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <ul className="submenu" style={{ display: "none" }}>
                <li><a href="faq.html">FAQ</a></li>
                <li><a className="contact-us-modal" href="#">Contact Us</a></li>
                <li><a className="tc-modal" href="#">Terms and Conditions</a></li>
                <li><a className="privacy-modal" href="#">Privacy Policy</a></li>
              </ul>
            </li>
            <li className="">
              <button type="button" className="signin show-sign-in">
                <img src="images/icon-login.png" />
                Log in
              </button>
            </li>
            <li>
              <button type="button" className="register show-sign-up">
                <img src="images/icon-register.png" />
                Register
              </button>
            </li>
            <li className="header_mobile_menu_bitcoin_values_part">
              <div className="header-bitcoin-values">
                <a href="deposit" className="header-bitcoin-values-buy deposit-page-nav-btn">Deposit</a>
                <a href="/lottery" className="header-bitcoin-values-link">
                  <div className="header-bitcoin-values-item">
                    <div>
                      <img src="images/bch.png" />
                      <div className="header-bitcoin-values-item-title">
                        BCH
                      </div>
                    </div>
                    <div>
                      <div className="header-bitcoin-values-item-value header-bitcoin-values-item-bch-value">
                        &#36;0
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/lottery" className="header-bitcoin-values-link">
                  <div className="header-bitcoin-values-item">
                    <div>
                      <img src="images/btc.png" />
                      <div className="header-bitcoin-values-item-title">
                        BTC
                      </div>
                    </div>
                    <div>
                      <div className="header-bitcoin-values-item-value header-bitcoin-values-item-btc-value">
                        &#36;0
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://buy.bitcoin.com" className="header-bitcoin-values-buy" target="_blank">Buy Bitcoin</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
