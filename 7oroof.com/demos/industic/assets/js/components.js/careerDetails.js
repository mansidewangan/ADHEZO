function careeeDetails() {
    const careerDetailsContainer = document.getElementById("career-details");
    const careerFormContainer = document.getElementById("career-form");
    careerDetailsContainer.innerHTML = `
    <section id="careers" class="careers pt-120">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
            <div class="heading heading-3 text-center mb-40">
              <span class="heading__subtitle">Work With Us!</span>
              <h2 class="heading__title">A Leading Industrial & Manufacturing Company, Serving Since 1997.</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="carousel owl-carousel carousel-dots" data-slide="3" data-slide-md="2" data-slide-sm="1"
              data-autoplay="true" data-nav="false" data-dots="true" data-space="30" data-loop="true" data-speed="800">
              <!-- job item #1 -->
              <div class=" job-item">
                <div class="job__meta">
                  <span class="job__type">Full Time</span>
                  <span class="job__location">${WEBSITE_ADDRESS}</span>
                </div>
                <h4 class="job__title">Chief Executive Officer</h4>
                <p class="job__desc">A chief executive officer (CEO) is the highest-ranking executive in a company, and
                  their primary responsibilities include making major corporate decisions.</p>
                <a href="#" class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i class="icon-arrow-right2"></i>
                </a>
              </div><!-- /.job-item -->
              <!-- job item #2 -->
              <div class=" job-item">
                <div class="job__meta">
                  <span class="job__type">Full Time</span>
                  <span class="job__location">${WEBSITE_ADDRESS}</span>
                </div>
                <h4 class="job__title">Chief Financial Officer</h4>
                <p class="job__desc">A chief executive officer (CEO) is the highest-ranking executive in a company, and
                  their primary responsibilities include making major corporate decisions.</p>
                <a href="#" class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i class="icon-arrow-right2"></i>
                </a>
              </div><!-- /.job-item -->
              <!-- job item #3 -->
              <div class=" job-item">
                <div class="job__meta">
                  <span class="job__type">Full Time</span>
                  <span class="job__location">${WEBSITE_ADDRESS}</span>
                </div>
                <h4 class="job__title">Global Sales & Marketing</h4>
                <p class="job__desc">A chief executive officer (CEO) is the highest-ranking executive in a company, and
                  their primary responsibilities include making major corporate decisions.</p>
                <a href="#" class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i class="icon-arrow-right2"></i>
                </a>
              </div><!-- /.job-item -->
              <!-- job item #4 -->
              <div class=" job-item">
                <div class="job__meta">
                  <span class="job__type">Full Time</span>
                  <span class="job__location">${WEBSITE_ADDRESS}</span>
                </div>
                <h4 class="job__title">Chief Financial Officer</h4>
                <p class="job__desc">A chief executive officer (CEO) is the highest-ranking executive in a company, and
                  their primary responsibilities include making major corporate decisions.</p>
                <a href="#" class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <i class="icon-arrow-right2"></i>
                </a>
              </div><!-- /.job-item -->
            </div>
          </div><!-- /.col-lg-12 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.careers -->
    `;


    careerFormContainer.innerHTML = `
    <form action="#" onsubmit="onSubmit(event)">
      <input type="text" placeholder="Name" name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}" required="true" />
      <input type="email" placeholder="Email" name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}" />
      <input type="tel" placeholder="Contact Number" name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}" required="true" />
      <input type="file" placeholder="Attach File" name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.FILE}" required="true" />
      <textarea placeholder="Remarks" name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}"></textarea>
      <button type="submit" id="career-form-button" class="submit cxu-btn-primary">
        Submit Now <i class="fa-solid fa-arrow-right"></i>
      </button>
    </form>
  `;
}
careeeDetails();