import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.log('BROWSER ERROR:', msg.text());
            } else {
                console.log('BROWSER LOG:', msg.text());
            }
        });

        page.on('pageerror', err => {
            console.log('PAGE ERROR:', err.message);
        });

        await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 5000 }).catch(e => console.log('Goto error:', e.message));
        await new Promise(resolve => setTimeout(resolve, 3000));
        await browser.close();
    } catch (e) {
        console.error("Puppeteer fail", e);
    }
})();
