const growingBar = document.querySelectorAll('.animal-bar-graph')
const appear = {threshold:1, rootMargin:"0px 0px -10px 0px"}
let numberCounters = document.querySelectorAll('.animal-bar-graph')

const appearWhenScroll = new IntersectionObserver
(function(entries, appearWhenScroll){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }
        else{
            entry.target.classList.add("bar-growth")
            let numberCounters = document.querySelectorAll('.animal-bar-graph')
            let speed = 95
            numberCounters.forEach((counter,index) =>{
                function UpdateCount(){
                    if (counter === entry.target){
                        const number = parseInt(counter.dataset.number)
                        const start = parseInt(counter.innerText)
                        const rate = number/speed
                        if(start < number){
                            x = Math.ceil(start + rate)
                            counter.innerText = x
                            setTimeout(UpdateCount, 40)
                        }
                        else{
                            counter.innerText = number
                        }
                    }
                }
                UpdateCount()
            })
            appearWhenScroll.unobserve(entry.target);
        }
    })
}, 
appear);

growingBar.forEach(bar =>{
    appearWhenScroll.observe(bar)
});

