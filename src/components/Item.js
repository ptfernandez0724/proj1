import '../Global.css';
import '../styles/styles.css';
import '../styles/mediaqueries.css';
import Header from './Header';

export default function Item(){
    return(
        <body class="body">
        <div class="scrollbar-measure"></div>
            <div id="app">
            <div data-reactroot="" class="wrapper">
            <Header />
            <span>
                <div class=" ">
                    <div class="itemPageWrapper">
                        <div class="itemImgWrapper"></div>
                        <div class="itemInfoWrapper">
                            <a class="backLink" href="/">
                                <span class="small">
                                    <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10l5 5 5-5z"></path>
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                    </svg>
                                </span>
                            All Items
                            </a>
                            <h3 class="itemName">Prototype 1</h3>
                                <p class="itemCost frm">$40</p>
                                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla modi, odit explicabo hic doloremque commodi ab molestiae. Iure voluptatem labore et aliquid soluta inventore expedita quam vel a earum!</p>
                                <p class="seller frm">By <span>Paulo Fernandez</span></p>
                                <button class="reqTradeBtn normalBtn">Request Trade</button>
                            </div>
                        </div>
                        <footer class="footer">
                        <p class="has-link">Made by <a target="blank" href=" "> Paulo Fernandez</a></p>
                        </footer>
                </div>
            </span>
            </div>
            </div>
        </body>
    )
}