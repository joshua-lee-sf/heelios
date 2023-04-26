const puppeteer = require('puppeteer');
const fs = require('fs').promises;

(async () => {
    const results = [];

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0); 

    const allShoes = {}
    console.log('Getting mens shoes')
    await page.goto('https://www.nike.com/w/mens-shoes-nik1zy7ok');
    allShoes.men = await page.evaluate(() => Array.from(document.querySelectorAll('.product-card__img-link-overlay')).map(el => el.href));
    console.log('Getting womens shoes')
    await page.goto('https://www.nike.com/w/womens-shoes-5e1x6zy7ok');
    allShoes.women = await page.evaluate(() => Array.from(document.querySelectorAll('.product-card__img-link-overlay')).map(el => el.href));
    console.log('Getting kids shoes')
    await page.goto('https://www.nike.com/w/kids-shoes-v4dhzy7ok');
    allShoes.kids = await page.evaluate(() => Array.from(document.querySelectorAll('.product-card__img-link-overlay')).map(el => el.href));

    for (let category in allShoes) {
        const shoes = allShoes[category];
        
        for (let i in shoes.slice(0, 5)) {
            const shoe = shoes[i];
            console.log('Going to:', shoe)
            await page.goto(shoe);
            const baseUrl = shoe.slice(0, shoe.lastIndexOf('/') + 1);
            const styles = await page.evaluate(() => Array.from(document.querySelectorAll('.colorway-container')).map(element => element.firstChild.firstChild.dataset.styleColor));
            for (let j in styles.filter(x => x !== null)) {
                const style = styles[j];
                const styleLinks = [];
                page.on('response', response => {
                    const url = response.url();
                    if (response.request().resourceType() === 'image' && url.includes('t_PDP_1728_v1')) {
                        console.log('Found image:', url)
                        styleLinks.push(url);
                    }
                });
                console.log('Retrieving', baseUrl + style)
                await page.goto(baseUrl + style, { waitUntil: "networkidle0" });
                // await page.waitForNavigation({
                //     waitUntil: 'networkidle0',
                //   });
                const result = await page.evaluate(() => {
                    const name = document.getElementById('pdp_product_title').textContent;
                    const title = document.querySelector('.css-1ou6bb2').querySelector('h2').textContent
                    const size = Array.from(document.querySelectorAll('.css-xf3ahq')).map(sizeEl => sizeEl.textContent);
                    const description = document.querySelector('.description-preview').children[0].textContent;
                    const price = document.querySelector('.product-price').textContent;
                    const color = document.querySelector('.description-preview__color-description').textContent.slice(7);
                    
                    return { name, title, size, description, price, color }
                });
                result.p_type = 'shoe';
                result.sku = style;
                result.category = category;
                result.productImages = styleLinks;
                // console.log(styleLinks)
                page.removeAllListeners();
                results.push(result);
            }
        }
    }
    await browser.close();
    await fs.writeFile('shoes.json', JSON.stringify(results));
})();

