import cron from 'node-cron'
import crawGiaoDuc from './crawlgiaoduc.js';
import crawTreTho from './crawltretho.js';
const cronData = async () => {
    cron.schedule("*/59 * * * *", function() { 
    crawGiaoDuc()
    crawTreTho() 
});
}

export default cronData