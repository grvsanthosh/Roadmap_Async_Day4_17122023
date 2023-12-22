//getting url
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

//table data td1 -> meal name, td2 -> link

const td1 = document.createElement('td');
const td2 = document.createElement('td');   
const anchorelement = document.createElement('a');
anchorelement.innerHTML = "LINK";
anchorelement.target = '__blank__';

//asynce promise function
const getProduct = async () => {
    try {const response = await fetch (apiUrl);
    const data = await response.json();
    console.log (data.meals[0]);
    loadcontent(data.meals[0]);
    }
    catch (err) {
        console.log (err);
    }
};

getProduct();

const loadcontent = ({strMeal,strYoutube}) => {
    td1.innerHTML = '';
    anchorelement.href = strYoutube;    
    td1.innerHTML = strMeal;
    td2.appendChild(anchorelement);
    document.body.getElementsByClassName('tbody-text').item(0).appendChild(td1);
    document.body.getElementsByClassName('tbody-text').item(0).appendChild(td2);  
   
};





