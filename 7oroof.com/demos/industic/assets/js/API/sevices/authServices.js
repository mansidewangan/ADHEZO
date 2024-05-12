const FETCH_WEBSITE_DETAILS_END_POINT = `${API_BASE_URL}/website/auth/get-website-by-uid/${WEBSITE_UID}`;


async function fetchWebsiteDetails(callbackServices = () => {}){
    try {
        const response = await fetch(FETCH_WEBSITE_DETAILS_END_POINT, {
            method: FETCH_METHODS.GET,
        });
        if(!response.ok){
            throw new Error('HTTP error! Status: ${response.staus}');
        }
        const data = await response.json();
        if (data?.data){
             // store the website Detail in session storage 
             sessionStorage.setItem(WEBSITE_DATA_KEY, JSON.stringify(data?.data));
        

          // callback other APIs
         callbackServices();

            // Handle firther  processing here if needed
        console.log('Website details fetch successfully:',data?.data);

        }
        else{
            throw new Error('Website details not found in response data');
        }

        } 
        catch(error){
                        // console.error('Error fetching website details:',error.message);

        }
    }
fetchWebsiteDetails();