const puppeteer = require('puppeteer');
const fs = require('fs').promises;

(async () => {
    const results = [];

    // Enable if you wanna see the magic :3
    // const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch({ headless: 'new' });

    
    const page = await browser.newPage();
    page.setViewport({
        width: 3840, 
        height: 2160
    });
    page.setDefaultNavigationTimeout(0); 
    page.setDefaultTimeout(0); 

    const queries = {
        shoes: {},
        clothing: {}
    }
    console.log('Getting mens shoes')
    await page.goto('https://www.nike.com/w/mens-shoes-nik1zy7ok');
    queries.shoes.men = await page.evaluate(() => Array.from(document.querySelectorAll('.product-card__img-link-overlay')).map(el => el.href));
    console.log('Getting mens clothing')
    await page.goto('https://www.nike.com/w/mens-clothing-6ymx6znik1');
    queries.clothing.men = await page.evaluate(() => Array.from(document.querySelectorAll('.product-card__img-link-overlay')).map(el => el.href));
    console.log('Getting womens shoes')
    await page.goto('https://www.nike.com/w/womens-shoes-5e1x6zy7ok');
    queries.shoes.women = await page.evaluate(() => Array.from(document.querySelectorAll('.product-card__img-link-overlay')).map(el => el.href));
    console.log('Getting womens clothing')
    await page.goto('https://www.nike.com/w/womens-clothing-5e1x6z6ymx6');
    queries.clothing.women = await page.evaluate(() => Array.from(document.querySelectorAll('.product-card__img-link-overlay')).map(el => el.href));
    console.log('Getting kids shoes')
    await page.goto('https://www.nike.com/w/kids-shoes-v4dhzy7ok');
    queries.shoes.kids = await page.evaluate(() => Array.from(document.querySelectorAll('.product-card__img-link-overlay')).map(el => el.href));
    console.log('Getting kids clothing')
    await page.goto('https://www.nike.com/w/kids-clothing-6ymx6zv4dh');
    queries.clothing.kids = await page.evaluate(() => Array.from(document.querySelectorAll('.product-card__img-link-overlay')).map(el => el.href));

    for (let p_type in queries) {
        const types = queries[p_type];
        for (let category in types) {
            let type = types[category];
            for (let i in type.slice(0, 3)) {
                const shoe = type[i];
                console.log('Going to:', shoe)
                await page.goto(shoe);
                const baseUrl = shoe.slice(0, shoe.lastIndexOf('/') + 1);
                const styles = await page.evaluate(() => Array.from(document.querySelectorAll('.colorway-container')).map(element => element.firstChild.firstChild.dataset.styleColor));
                for (let j in styles.filter(x => x !== null)) {
                    const style = styles[j];
                    // page.on('response', async response => {
                    //     const url = response.url();
                    //     if (response.request().resourceType() === 'image' && url.includes('t_PDP_1728_v1')) {
                    //         console.log('Found image:', url)
                    //         styleLinks.push(url);
                    //     }
                    // });
                    console.log('Retrieving', baseUrl + style)
                    await page.goto(baseUrl + style, { waitUntil: "networkidle2" });
                    const result = await page.evaluate(() => {
                        const name = document.getElementById('pdp_product_title').textContent;
                        const title = document.querySelector('.css-1ou6bb2').querySelector('h2').textContent
                        const size = Array.from(document.querySelectorAll('.css-xf3ahq')).map(sizeEl => sizeEl.textContent);
                        const description = document.querySelector('.description-preview').children[0].textContent;
                        const price = document.querySelector('.product-price').textContent;
                        const color = document.querySelector('.description-preview__color-description').textContent.slice(7);
                        let images;
                        if (document.getElementById('pdp-6-up')) {
                            images = Array.from(document.getElementById('pdp-6-up').children).map(img => img.src).filter(src => src);
                        } else {
                            images = Array.from(document.querySelectorAll('.css-147n82m')).filter(el => !el.classList.contains('css-yxqyqh')).map(img => img.src).filter(src => src);
                        }

                        return { name, title, size, description, price, color, images }
                    });
                    result.p_type = p_type;
                    result.sku = style;
                    result.category = category;
                    console.log(result)
                    results.push(result);
                }
            }
        }
    }
    await browser.close();
    await fs.writeFile('shoes.json', JSON.stringify(results));
})();

