const fetchBlogeListEndPoints = (projectId) =>
  `${API_BASE_URL}/website/post/get-all-posts/${projectId}`;


async function handleFetchBlogs(){
    try{
       // get id from session storage

      const websiteID = getWebsiteID();
      if (websiteID){
      const response = await fetch(fetchBlogeListEndPoints(websiteID),{
        method: FETCH_METHODS.GET,
      });


        if (!response.ok){
            const StatusText = response.statusText || "Unkonwn error";
            throw new Error(
                `Failed to fetch Blog: ${response.status} ${StatusText}`
            )
        }

        const data = await response.json();
        console.log("blog data:", data);
        const blogContainer = document.getElementById("blog-list-item");


        // Clear the existing content of the gallery container

        //  blogContainer.innerHTML = '';
         // Assuming data?.data is an array
         const blogItemsHTML = (data?.data || [])
         .map((item) =>{
          const postedDate = formatDate(item?.createdAt);
          const detailPagePath =`blog-details.htmlslug=${item.seoDetails?.slug}`;
          
          return `<div class="col-sm-12 col-md-6 col-lg-4">
          <div class="blog-item">
            <div class="blog__img">
              <a href="${detailPagePath}">
                <img src="${getFormattedImageURL(item?.banner?.image)}" alt="${item.title}">
              </a>
            </div>
            <div class="blog__content">
              <div class="blog__meta">
                <div class="blog__meta-cat">
                  <a href="${detailPagePath}">Oil & Gas</a><a href="${detailPagePath}">${item?.title}</a>
                </div>
              </div>
              <h4 class="blog__title"><a href="${detailPagePath}">${item?.title}</a></h4>
              <span class="blog__meta-date">${postedDate}</span>
              <p class="blog__desc">${item?.description}</p>
              <a href="${detailPagePath}" class="btn btn__secondary btn__link">
                <span>Read More</span>
                <i class="icon-arrow-right2"></i>
              </a>
            </div>
          </div>
        </div>

          `;
         })
         .join("");

         blogContainer.innerHTML = blogItemsHTML;
       

    }else {
      console.error("WebsiteId is not available.");
    }

} catch (error) {
  console.error("Error fetching Blog:", error);
}
}
 

 handleFetchBlogs();
// const homeServicesCallback = async () => {
//   await handleFetchBlogs();
// };

// fetchWebsiteDetails(homeServicesCallback);

         
