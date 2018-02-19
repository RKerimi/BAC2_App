import React from 'react'
import {Link, browserHistory, IndexLink} from 'react-router'

import './style.css'


const Navigation = () => (
    <nav>
        {(sessionStorage.auth && sessionStorage.auth.length > 0)
            ? <div className="nav-wrapper navStyle">
                <IndexLink to="/" className="brand-logo">
                    <img src="../../static/img/Logo_FCBus.png" height="40em"/> First Class Bus</IndexLink>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons white-text text-darken-4">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><IndexLink to="/">Home</IndexLink></li>
                    <li><Link to="/fahrplan">Fahrplan</Link></li>
                    <li><Link to="/quotes">Angebote</Link></li>
                    <li><Link to="/orders">Auftrag</Link></li>
                    <li><Link to="/kunde/aktiv">Kunden</Link></li>
                    <li><Link to="/artikel">Artikel</Link></li>
                    <Logout />
                </ul>
                <ul className="side-nav" id="mobile-demo">
                    <li><IndexLink to="/">Home</IndexLink></li>
                    <li><Link to="/quotes">Angebote</Link></li>
                    <li><Link to="/orders">Auftrag</Link></li>
                    <li><Link to="/kunde/aktiv">Kunden</Link></li>
                    <li><Link to="/artikel">Artikel</Link></li>
                    <Logout />
                </ul>
            </div>
            : <Login />
        }
    </nav>
)

const Login = () => (
    <Link to='/login' activeClassName='right hide-on-med-and-down'>
    <span className="navLogin">
      Login
    </span>
    </Link>
)

const Logout = () => (
    <a onClick={() => sessionStorage.removeItem('auth') & browserHistory.push('/login')}
       className='right hide-on-med-and-down'>
    <span>
      Logout
    </span>
    </a>
)

export default Navigation

