import '../Global.css';
import '../styles/styles.css';
import '../styles/mediaqueries.css';

export default function Header(){
    return (
        
            <header class="header">
                <h1><a class="logo" href="/">Trader</a></h1>
                    <div class="menu">
                        <a class="navLink activeNavLink" href="/">Home</a>
                        <a class="navLink" href="/profile">Profile</a>
                        <a class="navLink" href="/trades">Trades</a>
                        <a class="navLink" href="/login">Login</a>
                    </div>
            </header>
    )
}