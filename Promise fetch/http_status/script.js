//getting URL
const apiUrl = 'https://vadivelu.anoram.com/gif/';
let inputvalue = '';
let url = '';

//form variable
const formelement = document.getElementById('form-container');

//event listener
 formelement.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectelement = document.getElementsByName('statuscode');
    const arr = Array.from(selectelement[0]);
    
    arr.filter((val) => {
        if (val.selected === true){
            inputvalue = val.value;
            url = `${apiUrl}${inputvalue}`;
            getimage(url);
            
        };
    });
   
    
}); 

//for image display

const divelement = document.createElement('div');
divelement.id = 'image-container';


const imageelement = document.createElement('img');
imageelement.id = 'imagevalue';
imageelement.alt = "gif not found";

// async promise function
const getimage = async (urlval) => {
    try {
    const response = await fetch(urlval);
    console.log('inside getimage 2:',response);
    loadimage(response);
    }
    catch (err) {
        console.log(err);
    }

}

const loadimage = ({url}) => {
    imageelement.src = url;
    document.body.appendChild(divelement);
    divelement.appendChild(imageelement);
}
