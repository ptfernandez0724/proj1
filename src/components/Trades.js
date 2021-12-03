import '../Global.css';
import '../styles/styles.css';
import '../styles/mediaqueries.css';
import Header from './Header';

export default function Trades(){
    return(
        <body class="body">
        <div class="scrollbar-measure"></div>
            <div id="app">
            <div data-reactroot="" class="wrapper">
            <Header />
                <span>
                    <div class="">
                        <div class="tradesWrapper">
                            <div class="addTradeWrapper">
                                <a href="/myItems">
                                    <button class="tradeBtn allItemsBtn">My Items</button>
                                </a>
                                <button class="tradeBtn addItemBtn">+ Add Item</button>
                            </div>
                            <div class="tradesInfoWrapper">
                                <div class="tradeReqWrapper">
                                    <h3 class="unCap">Trade Requests</h3>
                                    <div class="allTradeRequestsWrapper">
                                        <div class="trWrapper">
                                            <div class="upper">
                                                <div class="userImg"></div>
                                                <h4>
                                                <a>Paulo Fernandez</a>
                                                " wants to trade with your item- "
                                                <a>Prototype 1</a>
                                            </h4>
                                        </div>
                                        <div class="tradeBtnWrapper lower">
                                            <button class="acceptBtn normalBtn">Accept</button>
                                            <button class="declineBtn normalBtn">Decline</button>
                                        </div>
                                    </div>
                                    <div class="trWrapper">
                                        <div class="upper">
                                            <div class="userImg"></div>
                                            <h4>
                                                <a>Aaron Fernandez</a>
                                                " wants to trade with your item- "
                                                <a>Prototype 2</a>
                                            </h4>
                                        </div>
                                        <div class="tradeBtnWrapper lower">
                                            <button class="acceptBtn normalBtn">Accept</button>
                                            <button class="declineBtn normalBtn">Decline</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tradeProposedWrapper">
                                <h3 class="unCap">Trades Proposed</h3>
                                <div class="allProposedTradesWrapper">
                                    <div class="ptWrapper">
                                        <div class="upper">
                                            <div class="userImg"></div>
                                            <h4>
                                                "You have proposed "
                                                <a>Paulo Fernandez</a>
                                                " for trading "
                                                <a>Prototype 1</a>
                                            </h4>
                                        </div>
                                        <div class="tradeBtnWrapper lower">
                                            <button class="cancelBtn normalBtn">Cancel Proposal</button>
                                        </div>
                                    </div>
                                    <div class="ptWrapper">
                                        <div class="upper">
                                            <div class="userImg"></div>
                                            <h4>
                                                "You have proposed "
                                                <a>Aaron Fernandez</a>
                                                " for trading "
                                                <a>Prototype 2</a>
                                            </h4>
                                        </div>
                                        <div class="tradeBtnWrapper lower">
                                            <button class="cancelBtn normalBtn">Cancel Proposal</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="footer">
                        <p class="has-link">
                        "Made by "
                        <a target="blank" href=" ">Paulo Fernandez</a>
                        </p>
                    </footer>
                    </div>
                    </span>
            </div>
            </div>
        </body>
    )
}