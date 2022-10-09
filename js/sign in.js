var allItems=[];
async function getBusiness() {
    var apiResponse= await fetch('https://www.a7a.com');
    var finalResult= await apiResponse.json();
    console.log(finalResult.articles);

}
getBusiness();

