import '../Global.css';
import '../styles/styles.css';
import '../styles/mediaqueries.css';
import Header from './Header';

export default function Login(){
    return(
        <body class="body">
        <div class="scrollbar-measure"></div>
            <div id="app">
            <div data-reactroot="" class="wrapper">
            <Header />
            <span>
                <div class="">
                    <div class="loginWrapper">
                        <h3 class="loginHeading text-center">Login with your social account</h3>
                        <div class="btnWrapper">
                            <button class="loginBtn fbBtn">Facebook Login</button>
                            <button class="loginBtn googleBtn">Google Login</button>
                            <button class="loginBtn twitterBtn">Twitter Login</button>
                        </div>
                    </div>
                    <footer class="footer">
                        <p class="has-link">Made by 
                            <a target="blank" href=" "> Paulo Fernandez</a>
                        </p>
                    </footer>
                </div>
            </span>
            </div>
            </div>
        </body>
    )
}