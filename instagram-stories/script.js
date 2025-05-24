var arr= [

    {
        dp:"https://plus.unsplash.com/premium_photo-1674808678287-fa42f3fe1dae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2t5JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww", story:"https://i.pinimg.com/736x/8f/56/3d/8f563d7db95abd8e199725faa501ad7d.jpg" 
    },
    {
        dp:"https://i.pinimg.com/236x/bf/56/46/bf5646ceff3853bac00babf4df15e7f8.jpg", story:"https://i.pinimg.com/236x/11/3c/c2/113cc21ce9f53d28c30154beb4cc1f96.jpg"
    },
    {
        dp:"https://i.pinimg.com/236x/97/58/1b/97581b12e2c27be003df05dc8c18343e.jpg", story:"https://i.pinimg.com/474x/ce/21/cf/ce21cfb60f6b374bb4f1ed9a6bb12d21.jpg"
    },
    {
        dp:"https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNreSUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D", story:"https://i.pinimg.com/474x/70/e4/bc/70e4bc9a50900dcd5534b65e39ee78c7.jpg"
    }

]
var template = document.querySelector("#template")
var clutter=""
arr.forEach(function(elem,idx){
    clutter += `<div id="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                </div>`
})    
template.innerHTML=clutter;
template.addEventListener("click",function(dets){
    var fullscreen = document.querySelector("#full-screen")
    console.log(arr[dets.target.id].story)
    fullscreen.style.display="block"
    fullscreen.style.backgroundImage=`url(${arr[dets.target.id].story})`
    setTimeout(function(){
        fullscreen.style.display = "none"
    },2000)
})

