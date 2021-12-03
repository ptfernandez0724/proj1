import '../Global.css';
import '../styles/styles.css';
import '../styles/mediaqueries.css';
import Header from './Header';

export default function Profile() {
    return (
        <body class="body">
        <div class="scrollbar-measure"></div>
            <div id="app">
            <div data-reactroot="" class="wrapper">
                <Header />
                <span>
                    <div class="">
                        <div class="infoWrapper">
                            <div class="basicInfo">
                                <div class="profilePic"></div>
                                    <div class="nameWrapper">
                                        <h3 class="normal">Paulo Fernandez</h3>
                                    </div>
                                </div>
                            <div class="otherInfo">
                                <div class="locationInfo">
                                    <div class="heading">
                                        <h3 class="normal marB20">Location Info</h3>
                                        <button class="marB20">Edit</button>
                                    </div>
                                    <div class="lIWrapper">
                                        <div class="inputWrapper">
                                            <label>Local Address:</label>
                                                <p class="inputData">Lot 32 Block 7</p>
                                        </div>
                                        <div class="inputWrapper">
                                            <label>City:</label>
                                                <p class="inputData">Paranaque City</p>
                                        </div>
                                        <div class="inputWrapper">
                                            <label>State:</label>
                                                <p class="inputData">Metro Manila</p>
                                        </div>
                                        <div class="inputWrapper">
                                            <label>Landmark:</label>
                                                <p class="inputData">Multinational Village</p>
                                        </div>
                                        <div class="inputWrapper">
                                            <label>Country:</label>
                                                <p class="inputData">Philippines</p>
                                        </div>
                                        <div class="inputWrapper">
                                            <label>Zip Code:</label>
                                                <p class="inputData">1708</p>
                                        </div>
                                    </div>
                                </div>
                            <div class="contactInfo">
                                <div class="heading">
                                    <h3 class="normal marB20">Contact Info</h3>
                                    <button class="marB20">Edit</button>
                                </div>
                                <div class="cIWrapper">
                                    <div class="inputWrapper">
                                        <label>Email:</label>
                                        <p class="inputData">fernandezpaulo0724@gmail.com</p>
                                    </div>
                                    <div class="inputWrapper">
                                        <label>Phone no:</label>
                                        <p class="inputData">+63-9177928503</p>
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

