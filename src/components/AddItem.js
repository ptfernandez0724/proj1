import '../Global.css';
import '../styles/styles.css';
import '../styles/mediaqueries.css';
import Header from './Header';

export default function AddItem(){
return(
<body class="body modal-opened" style={{marginRight: 0}}>
    <div class="scrollbar-measure"></div>
        <div id="app">
            <div data-reactroot="" class="wrapper">
            <Header />
            <span>
                <div class="">
                    <div class="myItemsWrapper">
                        <div class="addItemWrapper open">
                            <div class="hider"></div>
                            <div class="modal">
                                <div class="heading">
                                    <h3>Add Item</h3>
                                </div>
                                <div class="itemWrapper">
                                    <div class="itemPicWrapper">
                                        <div class="img"></div>
                                        <p class="imgText frm">Upload Item Picture</p>
                                    </div>
                                    <div class="itemInfoWrapper">
                                        <div class="inputWrapper">
                                            <label for="itemName">Name:</label>
                                            <input type="text" id="itemName" name="itemName" class="itemName" placeholder="Enter Name" required="" />
                                        </div>
                                        <div class="priceWrapper">
                                            <div class="inputWrapper">
                                                <label for="itemPrice">Price:</label>
                                                <input type="number" min="0" id="itemPrice" name="itemPrice" class="itemPrice" placeholder="Enter Price" required="" />
                                            </div>
                                            <div class="inputWrapper">
                                                <label for="itemCurrency">Currency:</label>
                                                <input type="text" id="itemCurrency" name="itemCurrency" class="itemCurrency" placeholder="Enter Currency"/>
                                            </div>
                                        </div>
                                        <div class="inputWrapper">
                                            <label for="itemDescription">Description:</label>
                                            <textarea name="itemDescription" id="itemDescription" class="itemDescription" placeholder="Enter Item Description"></textarea>
                                        </div>
                                        <div class="inputWrapper">
                                            <label for="itemTags">Tags(Comma Separated):</label>
                                            <textarea name="itemTags" id="itemTags" class="itemTags" placeholder="Enter Tags"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="buttonWrapper">
                                    <button class="saveItemBtn">Save</button>
                                    <button class="cancelItemBtn">Cancel</button>                                                                       
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