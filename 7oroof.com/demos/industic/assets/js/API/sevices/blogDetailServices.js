// END POINTS
const fetchBlogDetailsEndPoints = (projectId, slug) =>
  `${API_BASE_URL}/website/post/get-post-by-slug/${projectId}?slug=${slug}`;
const fetchBlogeListEndPoints = (projectId) =>
  `${API_BASE_URL}/website/post/get-all-posts/${projectId}`;

const currentPagePath = window.location.href;

// to fetch blog details
async function handleFetchBlogDetails() {
  try {
    // get id from session storage
    const websiteID = getWebsiteID();
    const urlParams = new URLSearchParams(window.location.search);
    const blogSlug = urlParams.get("slug");

    if (websiteID && blogSlug) {
      const response = await fetch(
        fetchBlogDetailsEndPoints(websiteID, blogSlug),
        {
          method: FETCH_METHODS.GET,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const blogContainer = document.getElementById("blog-details-container");

      const blogDetailsHTML = (data?.data || [])?.map((item) => {
        const postedDate = formatDate(item?.createdAt);
        const detailPagePath = `blog-single-post.html?slug=${item.seoDetails?.slug}`;
        return `
          <section id="blogSingleCentered" class="blog blog-single pb-40">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-4" id="blog-details-container">
            <aside class="sidebar mb-30">
              <div class="widget widget-search">
                <h5 class="widget__title">Search</h5>
                <div class="widget__content">
                  <form class="widget__form-search">
                    <input type="text" class="form-control" placeholder="Shipment Type:">
                    <button class="btn" type="submit"><i class="fa fa-search"></i></button>
                  </form>
                </div><!-- /.widget-content -->
              </div><!-- /.widget-search -->
              <div class="widget widget-categories">
                <h5 class="widget__title">Industry Sectors</h5>
                <div class="widget-content">
                  <ul class="list-unstyled">
                    <li><a href="#">Retail & Consumer</a></li>
                    <li><a href="#">Sciences & Healthcare</a></li>
                    <li><a href="#">Industrial & Chemical</a></li>
                    <li><a href="#">Power Generation</a></li>
                    <li><a href="#">Food & Beverage</a></li>
                    <li><a href="#">Oil & Gas</a></li>
                  </ul>
                </div><!-- /.widget-content -->
              </div><!-- /.widget-categories -->
              <div class="widget widget-posts">
                <h5 class="widget__title">Recent Posts</h5>
                <div class="widget__content">
                  <div class="carousel owl-carousel carousel-dots carousel-dots-center" data-slide="1" data-slide-md="1"
                    data-slide-sm="1" data-autoplay="true" data-nav="false" data-dots="true" data-space="0">
                    <!-- post item #1 -->
                    <div class="widget-post-item">
                      <div class="widget__post-img">
                        <a href="#"><img src="assets/images/blog/thumbs/1.jpg" alt="thumb"></a>
                      </div><!-- /.widget-post-img -->
                      <div class="widget__post-content">
                        <div class="d-flex flex-wrap align-items-center">
                          <div class="widget__post-cat">
                            <a href="#">Insights</a><a href="#">Industry</a>
                          </div><!-- /.widget-post-cat -->
                          <span class="widget__post-date">Jan 20, 2019</span>
                        </div>
                        <h6 class="widget__post-title"><a href="#">New Additions to our great Metro trucks Fleet</a>
                        </h6>
                      </div><!-- /.widget-post-content -->
                    </div><!-- /.widget-post-item -->
                    <!-- post item #2 -->
                    <div class="widget-post-item">
                      <div class="widget__post-img">
                        <a href="#"><img src="assets/images/blog/thumbs/2.jpg" alt="thumb"></a>
                      </div><!-- /.widget-post-img -->
                      <div class="widget__post-content">
                        <div class="d-flex flex-wrap align-items-center">
                          <div class="widget__post-cat">
                            <a href="#">News</a><a href="#">Industry</a>
                          </div><!-- /.widget-post-cat -->
                          <span class="widget__post-date">Jan 23, 2019</span>
                        </div>
                        <h6 class="widget__post-title"><a href="#">Cargo flow through better supply chain visibility,
                            control.</a></h6>
                      </div><!-- /.widget-post-content -->
                    </div><!-- /.widget-post-item -->
                  </div><!-- /.carousel -->
                </div><!-- /.widget-content -->
              </div><!-- /.widget-posts -->
              <div class="widget widget-tags">
                <h5 class="widget__title">Tags</h5>
                <div class="widget-content">
                  <ul class="list-unstyled">
                    <li><a href="#">Insights</a></li>
                    <li><a href="#">Industry</a></li>
                    <li><a href="#">Modern</a></li>
                    <li><a href="#">Corporate</a></li>
                    <li><a href="#">Business</a></li>
                  </ul>
                </div><!-- /.widget-content -->
              </div><!-- /.widget-tags -->
            </aside><!-- /.sidebar -->
          </div><!-- /.col-lg-4 -->
          <div class="col-sm-12 col-md-12 col-lg-8">
            <div class="blog-item">
              <div class="blog__img">
                <a href="#">
                  <img src="assets/images/blog/single/1.jpg" alt="blog image">
                </a>
              </div><!-- /.entry-img -->
              <div class="blog__content">
                <div class="blog__meta d-flex align-items-center">
                  <div class="blog__meta-cat">
                    <a href="#">Logistics</a><a href="#">Distribution</a>
                  </div><!-- /.blog-meta-cat -->
                  <span class="blog__meta-author">By: <span>Mike Dooley</span></span>
                  <span class="blog__meta-date">Jan 20, 2019</span>
                </div><!-- /.blog-meta -->
                <div class="blog__desc">
                  <p>The key to the success of any logistics contract is good logistics management. The key to good
                    management is the ability to identify the needs of the client and the countries in which the work
                    will take place, as well as being in a position to advise the best way forward. In today’s
                    international and remote locations, experience and understanding of logistics operations and local
                    networks is vital. With the many years of experience in our team, we have a detailed understanding
                    of the criticality or every aspect of the logistics world.</p>
                  <p> Focus can provide logistics personnel to meet the needs of your company or project. From logistics
                    managers to warehousemen, logistics controllers to transport coordinators, we can assist you. We
                    provide personnel for one-off projects as well as long or short-term agency personnel, assist in the
                    recruitment of permanent staff, or we can manage your logistics department for you.</p>
                  <p>When travelling to a foreign country, most people are nervous of the obstacles that will be there
                    for them to overcome. When a full marine crew travels en-mass to a vessel mobilisation, it is
                    imperative that they arrive on time and safely, especially in a remote location.</p>
                  <p>Focus provides meet-and-greet facilities through our network of specialist companies. From hotel
                    reservations and taxi arrangements to a full pick-up facility, with or without armed guards, this
                    can be arranged.</p>
                  <p>Ever had a last minute requirement for items to be in a country where you do not have a visa to
                    enter? Are you frustrated at having to hand-carry important documents to your client, which takes
                    you out of the office for days? Let Focus help you. Our personnel are available 24-hours-a-day for
                    these important deliveries. This leaves you free to concentrate on your business.</p>
                </div><!-- /.blog-desc -->
              </div><!-- /.entry-content -->
            </div><!-- /.blog-item -->
            <div class="row">
              <div class="col-sm-12 col-md-4 col-lg-4">
                <div class="blog-share">
                  <div class="social__icons mb-30">
                    <h5 class="blog__share-title">Share :</h5>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div><!-- /.blog-share -->
              </div><!-- /.col-lg-4 -->
              <div class="col-sm-12 col-md-8 col-lg-8">
                <div class="blog__tags">
                  <ul class="list-unstyled d-flex flex-wrap justify-content-end">
                    <li><a href="#">Insights</a></li>
                    <li><a href="#">Industry</a></li>
                    <li><a href="#">Modern</a></li>
                    <li><a href="#">Corporate</a></li>
                    <li><a href="#">Business</a></li>
                  </ul>
                </div>
              </div><!-- /.col-lg-8 -->
            </div><!-- /.row -->

            <div class="blog-widget blog-nav">
              <div class="blog__prev">
                <a href="#">
                  <div class="blog__nav-img">
                    <img src="assets/images/blog/thumbs/3.jpg" alt="blog thumb">
                  </div>
                  <div class="blog__nav-content">
                    <span>Previous</span>
                    <h6>Importers achieve cost savings through the First Sale rule!</h6>
                  </div>
                </a>
              </div><!-- /.blog-prev  -->
              <div class="blog__next">
                <a href="#">
                  <div class="blog__nav-content">
                    <span>Next</span>
                    <h6>Cargo flow through better supply chain visibility, control.</h6>
                  </div>
                  <div class="blog__nav-img">
                    <img src="assets/images/blog/thumbs/4.jpg" alt="blog thumb">
                  </div>
                </a>
              </div><!-- /.blog-next  -->
            </div><!-- /.blog-nav  -->
            <div class="blog-widget">
              <div class="blog-author">
                <div class="blog__author-avatar">
                  <img src="assets/images/blog/author/1.jpg" alt="avatar">
                </div><!-- /.author-avatar  -->
                <div class="blog__author-content">
                  <h6 class="blog__author-name">Mahmoud Baghagho</h6>
                  <p class="blog__author-bio">Founded by Begha over many cups of tea at her kitchen table in 2009, our
                    brand promise is simple: to
                    provide powerful digital marketing solutions to small and medium businesses.</p>
                  <div class="social__icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-vimeo"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div><!-- /.author-content  -->
              </div><!-- /.blog-widget  -->
            </div><!-- /.blog-author  -->
            <div class="blog-comments">
              <h5 class="blog__widget-title">2 comments</h5>
              <ul class="comments-list">
                <li class="comment__item">
                  <div class="comment__avatar">
                    <img src="assets/images/blog/author/2.jpg" alt="avatar">
                  </div>
                  <div class="comment__content">
                    <h6 class="comment__author">Richard Muldoone</h6>
                    <span class="comment__date">Feb 28, 2017 - 08:07 pm</span>
                    <p class="comment__desc">The example about the mattress sizing page you mentioned in the last WBF
                      can be a perfect example
                      of new keywords and content, and broadening the funnel as well. I can only imagine the sale
                      numbers if that was the site of a mattress selling company.</p>
                    <a class="comment__reply" href="#">reply</a>
                  </div>
                  <ul class="nested__comment">
                    <li class="comment__item">
                      <div class="comment__avatar">
                        <img src="assets/images/blog/author/3.jpg" alt="avatar">
                      </div>
                      <div class="comment__content">
                        <h6 class="comment__author">Mike Dooley</h6>
                        <span class="comment__date">Feb 28, 2017 - 08:22 pm</span>
                        <p class="comment__desc">The example about the mattress sizing page you mentioned in the last
                          WBF can be a perfect
                          example of new keywords and content, and broadening the funnel as well. I can only imagine the
                          sale numbers if that was the site of a mattress selling company.</p>
                        <a class="comment__reply" href="#">reply</a>
                      </div>
                    </li><!-- /.comment -->
                  </ul><!-- /.nested-comment -->
                </li><!-- /.comment -->
              </ul><!-- /.comments-list -->
            </div><!-- /.blog-comments -->
            <div class="blog-widget blog-comments-form">
              <h5 class="blog__widget-title">Leave A Reply</h5>
              <form>
                <div class="row">
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Name:">
                    </div><!-- /.form-group -->
                  </div><!-- /.col-lg-6 -->
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <input type="email" class="form-control" placeholder="Email:">
                    </div><!-- /.form-group -->
                  </div><!-- /.col-lg-6 -->
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Website:">
                    </div><!-- /.form-group -->
                  </div><!-- /.col-lg-6 -->
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="form-group">
                      <textarea class="form-control" placeholder="Comment"></textarea>
                    </div><!-- /.form-group -->
                  </div><!-- /.col-lg-12 -->
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <button type="submit" class="btn btn__secondary btn__block">Submit Comment</button>
                  </div><!-- /.col-lg-12 -->
                </div><!-- /.row -->
              </form>
            </div><!-- /.blog-comments-form -->
          </div><!-- /.col-lg-8 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.blog Single -->

    `;
      });

      blogContainer.innerHTLM = `
            
            ${blogItemsHTML?.length > 0 ? blogItemsHTML?.join("") : ""}`;
    } else {
      console.error("WebsiteId is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

async function homeServicesCallback() {
  await handleFetchBlogDetails();
}
fetchWebsiteDetails(homeServicesCallback);
