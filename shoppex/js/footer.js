const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/dark-logo.png" class="logo" alt="">
        <div class="footer-ul-container">

            <ul class="category">
                <li class="category-title">Men</li>
                <li><a href="men.html" class="footer-link">Men's Collection</a></li>

                <li class="category-title">Women</li>
                <li><a href="women.html" class="footer-link">Women's Collection</a></li>
            </ul>

            <ul class="category">
                <li class="category-title">Kids</li>
                <li><a href="kids.html" class="footer-link">Kid's Collection</a></li>

                <li class="category-title">Accessories</li>
                <li><a href="accessories.html" class="footer-link">Accessories</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">About Company</p>
    <p class="info">Shoppex - Shoppex is a the platform to get yourself the best apparels of all time with complimenting accessories and latest footwear. <br> We at Shoppex are always upto provide the best and trending outfit to you. Groom yourself with Shoppex.</p>
    <p class="info">Support Emails - help@shoppex.com, customersupport@shoppex.com</p>
    <p class="info">Telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="terms.html" class="social-link">Terms & Services</a>
            <a href="privacy.html" class="social-link">Privacy Page</a>
        </div>
        <div>
            <a href="#" class="social-link"><img src="img/instagram.png" alt=""></a>
            <a href="#" class="social-link"><img src="img/facebook.png" alt=""></a>
            <a href="#" class="social-link"><img src="img/twitter.png" alt=""></a>
        </div>
    </div>
    <p class="footer-credit">Shoppext, Love Yourself First</p>
    `;
}

createFooter();