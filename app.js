// toss
const img = document.querySelector('img');
const p = document.querySelector('p');
function masjid() {
    const randomnumber= Math.ceil(Math.random()*2);
    console.log(randomnumber);
    if (randomnumber === 1) {
        p.innerHTML = 'Hurrah! You won the toss' 
        img.src = 'assets/masjid.jpeg'
        
    }else{
        p.innerHTML = 'Sorry! you loss the toss'
        img.src = 'assets/chand.jpeg'
    }
    
}

function chand() {
    const randomnumber= Math.ceil(Math.random()*2);
    console.log(randomnumber);
    if (randomnumber === 1) {
        p.innerHTML = 'Sorry! You loss the toss' 
        img.src = 'assets/masjid.jpeg'
        
    }else{
        p.innerHTML = 'Hurrah! you won the toss'
        img.src = 'assets/chand.jpeg'
    }
    
}