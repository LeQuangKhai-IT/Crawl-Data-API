import axios from 'axios';
import * as cheerio from 'cheerio';
import updateItem from '../modal/crud.js';

const giaoducHTML = await axios.get("https://giaoduc.net.vn/goc-nhin/");

const getHTML = async () => {
    const { data: html } = giaoducHTML;
    return html;
}

const crawGiaoDuc = async () => {
    getHTML().then((res) => {
        const listArticle = [];
        const $ = cheerio.load(res);
        $('article').each(function () {
            const title = $(this).find('a').attr('title');
            const content = $(this).find('div').text().toString().replaceAll('\n', '');
            const url = $(this).find('.story a').attr('href');
            const time2 = $(this).find('time').text().toString().replaceAll('\n', '').trim();

            if(title != "" && content != "" && url != "" && time2 != "" ){
                const time = time2.slice(0, 10).split("/").reverse().join("-");
                listArticle.push({ title, content, url, time });
            }      
        });
         listArticle.forEach((article,index) => {
             updateItem("giaoducs", article , index);
         })
         console.log("Update giáo dục thành công!")
    })
}

export default crawGiaoDuc;

