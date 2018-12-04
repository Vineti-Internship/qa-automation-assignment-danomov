describe('Amazon cheap tablets', () =>{
    it("Find first 15 tablets with price smaller than $70", () => {  

        //Tablet quantity
        let count = 0;

        //Head to amazon's webpage        
        browser.url("https://www.amazon.com/");
        //Set input value to tablet
        browser.setValue('//*[@id="twotabsearchtextbox"]', "tablet");
        //Click search button
        browser.element("//*[@class = 'nav-input']").click();
        //Get current page's all tablet's names and prices
        let Names = browser.elements("//ul[@id='s-results-list-atf']/li//span[@class ='sx-price sx-price-large']/span[1]/../../../../../../..//a[@class='a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal']/h2").getText();
        let Prices = browser.elements("//ul[@id='s-results-list-atf']/li//span[@class ='sx-price sx-price-large']/span[1]").getText();
        



    //Loop through array of tablet names and prices
    for(let i = 0; i<Names.length;i++){
        if (count >= 15){
        console.log('Done!')
            break;
    }
    else if (Prices[i] < 70){
        console.log(Names[i]);
            count++;
        }
    }


//Take next page's tablets until we get 15 tablets with price less than $70 
while (count<15){

    browser.element("//*[@id='pagnNextString']").click()
    let Names = browser.elements("//ul[@id='s-results-list-atf']/li//span[@class ='sx-price sx-price-large']/span[1]/../../../../../../..//a[@class='a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal']/h2").getText();
    let Prices = browser.elements("//ul[@id='s-results-list-atf']/li//span[@class ='sx-price sx-price-large']/span[1]").getText();

    for(let i = 0; i<Names.length;i++){
        if (count>=15){
        console.log("Done!")
            break;
    }
    else if (Prices[i]<70){
        console.log(Names[i]);
            count++;
        }
    }                            
    
}




    })
    
})




