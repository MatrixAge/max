import './header.less'

import ActiveNavLink from '../components/active_nav_link'

function Header() {
      return (
            <header className="header_wrap flex flex_column w_100 border_box align_center">
                  <div className="header flex w_100 border_box justify_center relative">
                        <ActiveNavLink href="/">
                              <div className="left flex align_center h_100 absolute">
                                    {/* <img
                                          className="img_logo"
                                          src="/static/images/img_logo_white.png"
                                          alt="img_logo" /> */}
                                    <div className="name flex flex_column">
                                          <span className="e_name">Max</span>
                                    </div>
                              </div>
                        </ActiveNavLink>
                        <div className="center flex h_100 justify_center align_center">
                              <ul className="menu flex">
                                    <li className="menu_item">
                                          <ActiveNavLink className="menu_item_a" href="/">
                                                Home
                            </ActiveNavLink>
                                    </li>
                                    <li className="menu_item">
                                          <ActiveNavLink className="menu_item_a" href="/angles">
                                                Angles
                            </ActiveNavLink>
                                    </li>
                                    <li className="menu_item">
                                          <ActiveNavLink className="menu_item_a" href="/station">
                                                Station
                            </ActiveNavLink>
                                    </li>
                              </ul>
                        </div>
                        <div className="right flex align_center h_100 absolute">
                              <i className="icon_person material-icons">face</i>
                        </div>
                  </div>
            </header>
      )
}

export default Header