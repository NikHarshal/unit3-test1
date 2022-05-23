function getdata(){
    let data=JSON.parse(localStorage.getItem("products")) ||[]
   
        data.forEach(function (el,index){
            let div =document.createElement("div")
         
            let img=document.createElement("img")
            img.src=el.image;

            let type=document.createElement("p")
            type.innerText=el.type;

            let desc=document.createElement("p")
            desc.innerText=el.desc

            let price=document.createElement("p")
            price.innerText=el.price
            let btn=document.createElement("button")
            btn.innerText="Remove" 
            btn.setAttribute("click",function(){
                remove(el,index)
                console.log("hello")
            })

            div.append(img,type,desc,price,btn)
            all_products.append(div);
    });
   
}
// function remove(index){
//     let data=JSON.parse(localStorage.getItem("products")) ||[]
//     let removedata=data.filter(function(el,index){
    
       
//         let x=JSON.parse(localStorage.getItem("x")) || [] ;
//         x.push(el)
//         localStorage.setItem("x",JSON.stringify(x))
       
       
//         return index !=index
       
//     });

// }
function remove(el,index){
    products.split(index,1);
    localStorage.setItem("products",JSON.stringify(products));
    console.log("heoo")
}
getdata()