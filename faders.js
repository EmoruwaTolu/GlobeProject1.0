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