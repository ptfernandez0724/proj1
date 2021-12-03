import '../Global.css';
import '../styles/styles.css';
import '../styles/mediaqueries.css';
import Header from './Header';

export default function Home() {
  return (
    <body class="body">
        <div class="scrollbar-measure"></div>
            <div id="app">
            <div data-reactroot="" class="wrapper">
            <Header />
                <span>
                    <div class="">
                    <main class="main">
                        <div class="item">
                        <div class="content"></div>
                        </div>
                    </main>
                
                    <footer class="footer">
                        <p class="has-link"> Made by
                        <a target="blank" href=" "> Paulo Fernandez</a>
                        </p>
                    </footer>
                    </div>
                </span>
            </div>
            </div>
    </body>
    );
  }
  ;
  