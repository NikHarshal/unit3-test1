//store the products array in localstorage as "products"
function productdata(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function storedata(){
    event.preventDefault();
    let form=document.querySelector("#products")
    let type=form.type.value
    let desc=form.desc.value
    let price=form.price.value
    let image=form.image.value

    let dataarr= new productdata(type,desc,price,image);
    let data=JSON.parse(localStorage.getItem("products"))|| []
    data.push(dataarr)
localStorage.setItem("products",JSON.stringify(data)); 
    //console.log(data);
}
let product={
    type: "",
    desc: "",
    price: "", 
    image: ""
    }
