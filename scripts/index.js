// Implementacion de clase Activity
class Activity{
    constructor({id, tittle, description, imgUrl}){
        this.id = id;
        this.tittle = tittle;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}
//Implementacion de clase Repository, con su propiedad "activities" y los metodos correspondientes
class Repository{
    constructor(){
        this.activities = [];
        this.id = 0;
    }

/*     getAllActivities = () => this.activities; */
    getAllActivities(){
        console.log(this.activities);
        return this.activities;
    }

    createActivity(activityInfo){
        this.idd++;
        const newActivity = new Activity({...activityInfo, id: this.id});
        this.activities.push(newActivity);
    }
/*     createActivity = (actvityInfo) => {
        this.activities.push(actvityInfo);
    } */
 
    /* deleteActivity(id) {
        const filtered = this.activities.filter(act => act.id !== id);
        this.activities = filtered; 
    }  */
}
//Instancia del Repositorio
const activityRepo = new Repository();

//Para crear actividad
function createActivity(activityInfo){
    console.log(activityInfo);
    const { id, tittle, description, imgUrl} = activityInfo;
    const h3 = document.createElement('h3');
    h3.innerText = tittle;
    const p = document.createElement('p');
    p.innerText = description;
    const img = document.createElement('img');
    img.src = imgUrl;
    const card = document.createElement('div');
    card.className = 'card';
    card.id = id;
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(img);
    console.log(card);
    return card;
}

//Para crear actividades
function createActivities(){
    const activList = document.getElementById('activList');
    activList.innerHTML = '';
    const activities = activityRepo.getAllActivities();
    const activitiesHTML = activities.map((acti) => createActivity(acti));
    activitiesHTML.forEach((acthtml) => activList.appendChild(acthtml));
}

const bottomLoad = document.querySelector('#add');

function handleClick(){
    const tittle = document.getElementById('tittle');
    const description = document.getElementById('description');
    const imgUrl = document.getElementById('imgUrl');
    const valTittle = tittle.value;
    const valDescription = description.value;
    const valImgUrl = imgUrl.value;
    if (!valTittle || !valDescription || !valImgUrl) {
        alert('Carga no valida');
        return;
    }
    const activity = {
        tittle: valTittle,
        description: valDescription,
        imgUrl: valImgUrl
    }
    activityRepo.createActivity(activity);
    createActivities();
    tittle.value = '';
    description.value = '';
    imgUrl.value = '';
}

const form = document.getElementById('form');
//bottomLoad.addEventListener('#add', handleClick());

form.addEventListener('submit', function (event) {
    event.preventDefault();
    handleClick();
});
console.log(document.getElementsByClassName('mi-class')[0]);
