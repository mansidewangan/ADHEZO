// END POINTS 

const CREATE_LEASD_AND_ENQUIRY_END_POINT =`${API_BASE_URL}/website/dealership-enquiry/create-dealership-enquiry`;

async function handleCreateLeadsAndEnquiry(event) {
    const toast = document.getElementById("custom-toast");
    const currentPage = window.location.pathname.split("/").pop();
    let enquiryType = "";

    if (currentPage === "leadership-team.html"){
        enquiryType = ENQUIRY_TYPES.DEALERSHIP_ENQUIRY;
    } 
    else if (currentPage?.includes("")){
        // Get all tab-pane elements within the tab-content container
        const tabPanes = document.querySelectorAll
    }
}