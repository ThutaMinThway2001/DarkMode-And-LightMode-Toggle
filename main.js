const toggleBtn = document.querySelector('#toggle-btn');
const toggleIcon = document.querySelector('#toggle_icon');

toggleBtn.addEventListener('click', DarkModeToggle);

let darkmode = localStorage.getItem('darkmode');
if(darkmode){
    darkModeOn();
}

function DarkModeToggle(){
    let darkmode = localStorage.getItem('darkmode')
    if(!darkmode){
        darkModeOn();
    }else{
        darkModeOff();
    }
}

function darkModeOn(){
    localStorage.setItem('darkmode', 'true');
    document.body.classList.add('dark');
    toggleIcon.className = "bx bx-moon";
}

function darkModeOff(){
    localStorage.removeItem('darkmode');
    document.body.classList.remove('dark');
    toggleIcon.className = "bx bx-sun";
}