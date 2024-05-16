import axios from 'axios';
import * as cheerio from 'cheerio';
import updateItem from '../modal/crud.js';

const webtrethoHTML = await axios.get("https://www.webtretho.com/thinh-hanh/phong-cach-song/");

async function getHTML() {
    const { data: html } = webtrethoHTML;
    return html;
}

const crawTreTho = async () => {
    getHTML().then((res) => {
        const listArticle = [];
        const $ = cheerio.load(res);
        $('.bg-white .mh-120x').each(function () {
            const title = $(this).find('p').text();
            const type = $(this).find('a.tw-text-xs.text-primary.tw-leading-4.one-line.tw-w-auto.!tw-inline-block.mw-180x').text();
            const url2 = $(this).find('.flex__1 a').attr('href');
            const time2 = $(this).find('div.text-gray-v4.tw-leading-4.tw-text-xs span:eq(3)').text().toString().replaceAll('\n', '').trim();

            if (title != "" && type != "" && url2 != "" && time2 != "") {
                const url = "https://www.webtretho.com" + url2
                const time = time2.split("/").reverse().join("-");
                listArticle.push({ title, type, url, time })
            }
        });
        listArticle.forEach((article, index) => {
            updateItem("trethos", article, index);
        })
        console.log("Update trẻ thơ thành công!")
    })
}

export default crawTreTho;