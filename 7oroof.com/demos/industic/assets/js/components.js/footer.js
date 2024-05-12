function footerDesign(){
    const footerContainer = document.getElementById("footer-layout");
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    footerContainer.innerHTML = `
    <footer id="footer" class="footer footer-1">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4 footer__widget footer__widget-about  mb-30">
              <div class="footer__widget-content">
                <img src="assets/images/logo/logo-footer.png" alt="logo">
                <p>${WEBSITE_ADDRESS}.</p>
                <p>Mail: <a href="mailto:${WEBSITE_EMAIL}">${WEBSITE_EMAIL}</a></p>
                <p><a href="tel:${WEBSITE_MOBILE_NUMBER}" class="font-weight-bold color-white">${WEBSITE_MOBILE_NUMBER}</a></p>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
              <h6 class="footer__widget-title">Company</h6>
              <div class="footer__widget-content">
                <nav>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Meet Our Team</a></li>
                    <li><a href="#">News & Media</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Careers</a></li>
                  </ul>
                </nav>
              </div><!-- /.footer-widget-content -->
            </div><!-- /.col-lg-2 -->
            <div class="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
              <h6 class="footer__widget-title">Industries</h6>
              <div class="footer__widget-content">
                <nav>
                  <ul class="list-unstyled">
                    <li><a href="#">Retail & Consumer</a></li>
                    <li><a href="#">Sciences & Healthcare</a></li>
                    <li><a href="#">Industrial & Chemical</a></li>
                    <li><a href="#">Power Generation</a></li>
                    <li><a href="#">Food & Beverage</a></li>
                    <li><a href="#">Oil & Gas</a></li>
                  </ul>
                </nav>
              </div><!-- /.footer-widget-content -->
            </div><!-- /.col-lg-2 -->
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 footer__widget footer__widget-newsletter">
              <div class="footer__widget-content">
                <h6 class="footer__widget-title">Newsletter</h6>
                <p>Sign up for industry alerts, our latest news, thoughts, and insights from Industic.</p>
                <form class="widget__newsletter-form">
                  <div class="form-group mb-0">
                    <input type="text" class="form-control" placeholder="Your Email Address ">
                    <button type="submit" class="btn btn__primary btn__hover2">Subscribe</button>
                  </div>
                </form>
              </div><!-- /.footer-widget-content -->
              <div class="text-right mt-20">
                <span class="footer__contact-link">Have a question?
                  <a href="contacs.html">Click here</a>
                </span>
              </div>
            </div><!-- /.col-lg-4 -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.footer-top -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-9 col-lg-9">
              <div class="footer__copyright">
                <nav>
                  <ul class="list-unstyled footer__copyright-links d-flex flex-wrap">
                    <li>
                      <a href="http://themeforest.net/user/7oroof">
                        &copy; 2019 Industic, with Love by <span class="color-theme">7oroof.com</span>
                      </a>
                    </li>
                    <li><a href="#">Terms & Conditions </a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Sitemap</a></li>
                  </ul>
                </nav>

              </div><!-- /.Footer-copyright -->
            </div><!-- /.col-lg-6 -->
            <div class="col-sm-12 col-md-3 col-lg-3 d-flex align-items-center">
              <div class="social__icons justify-content-end w-100">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
              </div><!-- /.social-icons -->
            </div><!-- /.col-lg-6 -->
          </div><!-- /.row -->
        </div><!-- /.Footer-bottom -->
      </div><!-- /.container -->
    </footer><!-- /.Footer -->

    `
}
footerDesign();