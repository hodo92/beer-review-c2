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

const sortBeers = () => {

   for (let i=0; i<beers.length-1; i++){
    /*   for (let j=0; j<beers.length; j++){
           if (beers[i].rating < beers[j].rating){ */
            if (beers[i].rating < beers[i+1].rating){
            $("ul").append('<li>'+beers[i].name+' '+beers[i].category+' rating is '+beers[i].rating+'</li>')
            $("ul").append('<li>'+beers[i+1].name+' '+beers[i+1].category+' rating is '+beers[i+1].rating+'</li>')
           } else {
            $("ul").append('<li>'+beers[i+1].name+' '+beers[i+1].category+' rating is '+beers[i+1].rating+'</li>')
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
    $("ul").find('li').remove();    
    sortBeers();
})

