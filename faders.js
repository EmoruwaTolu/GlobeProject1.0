const fadingImages = document.querySelectorAll('.fade-in-img');
const appearOptions = {threshold:1, rootMargin:"0px 0px 0px 0px"};
/*
Note: threshold is the perctange of said object that needs to be displayed to fade in
so the images would need 100% of them to be in the viewPort in this case(50% for 0.5 etc)

rootMargin is adjusting how much lower or to the side one would have to scroll to get the images
so here you would have to scroll 50px down to get the image to show
*/

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions);

fadingImages.forEach(fadingImg =>{
    appearOnScroll.observe(fadingImg)
});

//Below is the code for the popup images of the animals in the track

addEventListener('click', (event) => {});

const popupImages1 = document.querySelectorAll('.slide')
const popupImages = document.querySelectorAll('.carousel-image').forEach(image => {
    image.onclick = () =>{
        console.log(image)
        document.querySelector('.popup').style.display = 'flex'
        document.querySelector('.popup-img').src = image.getAttribute('src')
        // console.log(image.getAttribute('id'))
        const name = speciesPopper(image.getAttribute('id'))
        console.log(name)
        const bang = document.querySelector('.animal-info')
        bang.innerText = name
        console.log(bang)
    }
});

function speciesPopper(species){
    if(species == "bluebird"){
        var tinker = "Sialia Sialis (Bluebird)"
    }
    if(species == "flamingo" ){
        var tinker = "Phoenicopterus (Flamingo)"
    }
    if(species == "elephant" ){
        var tinker = "Loxodonta Africana (Elephant)"
    }
    if(species == "deer" ){
        var tinker = "Cervus Nippon (Deer)"
    }
    if(species == "lion" ){
        var tinker = "Panthera Leo (Lion)"
    }
    if(species == "tiger" ){
        var tinker = "Panthera Tigris (Tiger)"
    }
    return tinker
}