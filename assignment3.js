// Url
const Url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";


// Fetch data from the API
async function fetchData() {
    try{
const response= await fetch(Url)
if (!response.ok || response.status !==200){
    console.error("Failed to fetch data!!")}
    const data= await response.json();
    displayData(data.results)
    }
    // Error to fetch data
catch(error){
    console.error("Error fetching data", error);
}}


//Display results in the table
function displayData(results){ 
     
}