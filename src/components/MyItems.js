import '../Global.css';
import '../styles/styles.css';
import '../styles/mediaqueries.css';
import Header from './Header';

export default function MyItems(){
    return(
        <body class="body">
        <div class="scrollbar-measure"></div>
            <div id="app">
            <div data-reactroot="" class="wrapper">
            <Header />
            <span>
                <div class="">
                    <div class="myItemsWrapper">
                        <div class="addTradeWrapper">
                            <a href="/additem">
                                <button class="tradeBtn addItemBtn">+ Add Item</button>
                            </a>                           
                        </div>
                        <div class="uIWrapper">
                            <div class="upper">
                                <div class="userImg"></div>
                                <div class="itemInfo">
                                    <h3 class="itemName">
                                        <a href="item/1234">Prototype 1</a>
                                    </h3>
                                    <p class="itemCost frm">$40</p>
                                    <p class="addDate frm">23 Jan, 2017</p>
                                    <p class="itemDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at.</p>
                                    <div class="tradeBtnWrapper lower">
                                        <button class="deleteBtn normalBtn">Remove Item</button>
                                        <button class="editBtn normalBtn">Edit Info</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="uIWrapper">
                            <div class="upper">
                                <div class="userImg"></div>
                                <div class="itemInfo">
                                    <h3 class="itemName">
                                        <a href="item/1234">Protoype 2</a>
                                    </h3>
                                    <p class="itemCost frm">$50</p>
                                    <p class="addDate frm">23 Jan, 2017</p>
                                    <p class="itemDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at.</p>
                                    <div class="tradeBtnWrapper lower">
                                        <button class="deleteBtn normalBtn">Remove Item</button>
                                        <button class="editBtn normalBtn">Edit Info</button>
                                    </div>
                                </div>
                            </div>
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