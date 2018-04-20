let beers = [];

const addBeer = (name, category, rating) => {
    let beer = {
        name: name,
        category: category,
        rating: rating
    }
    beers.push(beer)
};
    
const renderBeers = () => {
    $("ul").find('li').remove();
    for (let i = 0; i<beers.length; i++){
        $("ul").append('<li>'+beers[i].name+' '+beers[i].category+' rating is '+beers[i].rating+'</li>')
    }
};

var order = true;

var sortBeers =function(){
    for (let i=0; i<beers.length; i++){
        if (order===false) {
    beers.sort(function(a, b){
         return a.rating - b.rating 
        })
        $("ul").append('<li>'+beers[i].name+' '+beers[i].category+' rating is '+beers[i].rating+'</li>')
    } else {
        beers.sort(function(a, b){
            return b.rating - a.rating 
           })
           $("ul").append('<li>'+beers[i].name+' '+beers[i].category+' rating is '+beers[i].rating+'</li>')
    }
}

}


$(".post-beer").click(function(){
    var beerName = $(".beer-input").val();
    var categoryName = $(".category-input").val();
    var rateName = $(".select-val").val();
    addBeer(beerName, categoryName, rateName);
    renderBeers();
})

$(".sort").click(function(){
    order = !order
    $("ul").find('li').remove();    
    sortBeers();
})