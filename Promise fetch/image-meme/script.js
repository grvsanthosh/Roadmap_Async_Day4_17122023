//api link
const apiUrl = 'https://api.imgflip.com/get_memes';
const divelement = document.createElement('div');
divelement.classList.add('container-image');
const imgelement = document.createElement('img');
imgelement.classList.add('image-value');

let count = 0;
const getimage = async () => {
    try {
    //fetching link
    const response = await fetch(apiUrl);
    const data = await response.json();
    const value = data.data.memes;
    const len = value.length;
    console.log(value[count].url);
    loadimage(value[count].url);
    //limiting based on length
    if ( count < len-1 ){
        console.log(count);
    count ++;
    }
}
 catch (err) {
    console.log(err);
}
}

getimage();

const loadimage = (val) => {
    //loading image
    imgelement.src = val;
    document.body.appendChild(divelement);
    divelement.appendChild(imgelement);
}