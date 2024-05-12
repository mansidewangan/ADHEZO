function contactDetails(){
    const contactDetailsContainer = document.getElementById("contact-details");
    const contactFormContainer = document.getElementById("contact-form");

    contactDetailsContainer.innerHTML = `
    
          <div class="col-sm-10 col-md-6 col-lg-4">
            <div class="contact-panel mb-40">
              <h6 class="contact__panel-title">Contact Details</h6>
              <ul class="contact__panel-list list-unstyled">
                <li><i class="fa fa-map-marker"></i><span>${WEBSITE_ADDRESS} </span></li>
                <li><i class="fa fa-envelope"></i><span>Email: <a href="mailto:${WEBSITE_EMAIL}">${WEBSITE_EMAIL}</a></span></li>
                <li><i class="fa fa-phone"></i><span><a href="tel:${WEBSITE_MOBILE_NUMBER}">(+91) ${WEBSITE_MOBILE_NUMBER}</a>
                </span></li>
              </ul>
            </div>
            <div class="contact-panel mb-40">
              <h6 class="contact__panel-title">Opening Hours</h6>
              <ul class="contact__panel-list contact__panel-list-2 list-unstyled">
                <li><span>Monday-Friday</span><span>10:00 - 18:00</span></li>
                <li><span>Saturday</span><span>10:00 - 14:00</span></li>
                <li><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
          </div>
    `;

    contactFormContainer.innerHTML = `
   <form action="#" onsubmit="onSubmit(event)">
   <div class="row">
     <div class="col-sm-4 col-md-4 col-lg-4">
       <div class="form-group"><input type="text" class="form-control" placeholder="Name"  name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}"></div>
     </div>
     <div class="col-sm-4 col-md-4 col-lg-4">
       <div class="form-group"><input type="email" class="form-control" placeholder="Email" name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}" ></div>
     </div>
     <div class="col-sm-4 col-md-4 col-lg-4">
       <div class="form-group"><input type="text" class="form-control" placeholder="Website" name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}"></div>
     </div>
     <div class="col-sm-12 col-md-12 col-lg-12">
       <div class="form-group">
         <textarea class="form-control" placeholder="Message"  name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}"></textarea>
       </div>
     </div>
     <div class="col-sm-12 col-md-12 col-lg-12">
       <button type="submit" id="contact-form-button" class="btn btn__secondary ">Submit</button>
     </div>
   </div>
 </form>
   `;
}
contactDetails();