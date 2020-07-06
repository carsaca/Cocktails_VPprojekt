
var ingredients = [];
var measure = [];
var extras = [];
var extrasMeasure = [];
var colors = [];
var cocktail = [];
var glassType;
var cocktailInfo;

nameLabel = document.getElementById("CocktailName");
cocktailInfoLabel = document.getElementById("CocktailInfo");

// boje tekučina
var allcolors = {
    "Gin": "#f9f9f9",
    "Light rum": "#ffffff",
    "Amaretto": "#b03628",
    "Sour mix": "#ffd867",
    "Orgeat syrup": "#d2cfbe",
    "Coconut milk": "#fffcdd",
    "Lemon juice": "#fff863",
    "Lime juice": "#e0fe75",
    "Triple sec": "#feba01",
    "Pineapple juice": "#fed722",
    "Champagne": "#fff1b1",
    "Sweet and sour": "#ffd867",
    "Club soda": "#ffffff",
    "Sugar": "#edebd8",
    "Brandy": "#fc7701",
    "Vodka": "#ffffff",
    "Absolut Citron": "#fff8ac",
    "Sweet Vermouth": "#8b2803",
    "Pisco": "#ebeabb",
    "Cognac": "#b7110f",
    "Dry Vermouth": "#f0fcb1",
    "Creme de Cacao": "#e8e3da",
    "Kahlua": "#240903",
    "Orgeat syrup": "#e2dbc8",
    "Bourbon": "#fa9805",
    "Cointreau": "#78392e",
    "Sugar syrup": "#f4ecd5",
    "Maraschino liqueur": "#ffffff",
    "Light cream": "#faeed6",
    "Powdered sugar": "#eae9e7",
    "Angostura bitters": "#360600",
    "Lillet Blanc": "#fcee7a",
    "Grenadine": "#fc223e",
    "Cranberry juice": "#d72938",
    "Martini": "#ffffff",
    "Orange bitters": "#f58c02"

}

// boje dodataka
var allextrascolor = {
    "Olive": "#618c4a",
    "Ice": "#d6f8ff",
    "Nutmeg": "#ad9772",
    "Cherry": "#99003b",
    "Maraschino cherry": "#FF485A",
    "Orange peel": "#FFB32C",
    "Lime": "#c7e32b",
    "Limon" : "#faf211",
    "Orange" : "#faa911"
}

// d atributi dodataka
var allextras = {
    "Olive": "M301.9,164.7c9.7,13.5,0,33.1-17,45.3c-17,12.2-39.2,7.7-48.8-5.7s-3.2-30.8,13.8-43S292.3,151.3,301.9,164.7z", 
    "Nutmeg": "M202.1,69.4c0.4,0.4,0.8,0.8,1.2,1.2c1,1.1,1.9,2.1,3.2,2.8c1.2,0.7,2.7,1.1,3.8,1.9c0.7,0.6,3.5,2.6,4.7,3.1c1.2,0.5,3.2,1.2,4.2,1.9c1,0.6,2.7,1.5,5.1,2s4.8,0.2,6.3,1.2s3.3,1.9,5.7,2c2.4,0.1,10.2-0.7,10.2-0.7s8.1-3,8.6-3.3c0.5-0.4,3.8-3.1,5-5c1.1-1.9,1.9-3.5,2.9-4.7c1-1.2,2.6-3.3,2.6-5.2c0-3.9,0.6-7.9,0.9-11.8c0.2-1.9,0.2-3.1-0.6-4.9c-0.6-1.5-1.5-2.8-1.7-4.4c-0.2-1.9-3.1-6.8-4-7.8c-0.9-1-6.2-5.6-7.4-6.6c-1.2-1-4-3.1-4.7-3.6c-0.7-0.5-2.5-2-4.6-3.3c-2.1-1.3-4.2-2.7-6.5-3.7c-2.6-1.2-5.5-1.1-8.1-2.1c-1-0.4-2-1-3.1-1.1c-1.8-0.2-3.6,0.7-5.4,0.8c-2.1,0.1-4.2,0.2-6.2,0.6c-3.7,0.9-7.3,2.3-10.6,4.3c-1.9,1.1-3.6,2.4-5.6,3.3c-0.7,0.3-1.5,0.5-2.1,1c-0.7,0.6-1.2,1.4-1.6,2.3c-1.2,2.4-2.4,4.9-2.5,7.5c0,1.2,0.2,2.3,0.1,3.5c-0.1,1.2-0.6,2.4-0.9,3.6c-0.5,2.4,0.1,5.5,1.1,7.7c1,2.3,1.8,4.3,2.6,6.8c0.7,2.3,1.8,4.5,3.2,6.5C199,66.8,200.6,68,202.1,69.4z",
    "Ice": "M290.5,13.9L250.6,32c-6.8,3.1-9.8,11.1-6.7,17.9L262,89.8c3.1,6.8,11.1,9.8,17.9,6.7l39.9-18.1c6.8-3.1,9.8-11.1,6.7-17.9l-18.1-39.9C305.3,13.8,297.3,10.8,290.5,13.9z",
    "Cherry": "M237.9,169.1c-6.2,11.5-6.1,26.5,2.6,36.3c8.8,9.9,23.4,19.2,43.1,6.8c12.2-8.7,16.7-16.2,17.3-25.7c0.7-9.5-7.6-15.2-14.5-17.6s-12.8-8.8-17.2-12S249.2,148,237.9,169.1z",
    "Maraschino cherry": "M241.3,148.4c-6.2,0.7-10.7,3.7-15.1,6.3c-8.1-12-24.3-40.5-37.8-54.6c-7.7-8-27.8-17.4-29.3-19.5c-1.6-2.1-2.5-1.7-4.5-1.2c-2,0.5-4.8-0.7-5.8-1.2c-1-0.4-6.2-0.5-4.2,1.8c2,2.3,2.4,4.5,5.1,3.8c2.7-0.6,5.1-0.6,5.5,0.4c0.4,1,1.6,1.8,2.1,1.8c6-0.7,20.3,9,29.3,17.1c8.4,7.7,25.3,31.6,33.8,54.5c-6.6,2.7-18,6.8-20.4,17.7c-2.8,12.4,1.4,31,20.9,41c12.3,6.3,24.1,1.6,32.2-3.4c10-6.1,18.3-19.1,13.5-39.5C261.7,153,249,147.5,241.3,148.4z",
    "Orange peel": "M253.9,25.6c-3.7,0.5-7.4,1.7-10.8,3c-0.1-0.6-0.2-1.1-0.3-1.7c-0.9-4-0.8-8.8-4.4-11.6c-3-2.3-7.2-2.3-10.7-0.9c-2.9,1.2-4.4,4.4-5.6,7c-0.5,1.2-1.2,2.6-1.6,4c-0.5,1.6-0.8,3.2-1.4,4.8c0.5,0.5,1.8-4.6,2.9-6.8c1.5-2.9,3-5.4,6.3-6.7c4.5-1.7,5.8,2.7,6.8,5.8c0.7,2.3,1.4,4.8,1.4,7.2c0,0.6,0,1,0,1.5c-3.1,1.6-10.8,5.4-15.6,15.1c0.8-1.6,1.1-3.6,1.7-5.4c0.6-1.9,2.7-5.3,1.9-6c-0.3,1.3-1.4,2.8-1.9,4.1c-0.6,1.5-1.2,3.1-1.7,4.6c-2,5.5-4.9,13.3-12.4,13.5c-3,0.1-6.2-2.8-8.2-4.7c-0.4-0.3-0.8-0.7-1.1-1c-5.2-5.2-7.3-12.1-9-18.9c-0.3-1.2-0.6-2.4-0.9-3.5c-0.3-1.1-0.4-2.1-1.6-2.5c-0.7-0.2-1.5-0.2-2.3-0.1c-1.6,0.2-3.3,0.6-4.8,1.1c-0.3,0.1-0.7,0.2-0.9,0.5c-0.4,0.5-0.3,1.3,0,1.9c1,3.1,2,6.1,3.2,9.2c1.7,4.7,3.7,9.3,6.8,13.4c3.3,4.3,8.2,8,13.7,9.1c6.3,1.3,11.6-2.1,14.4-7.3c0.4-0.7,0.7-1.4,1-2.1c-0.1,1-0.1,2,0.3,3c1.7,4.2,7.7,7.4,12,4.9c2-1.2,3.8-3.1,5.2-4.9c3.1-3.8,5-8.3,6.1-12.9c0.5-2.2,0.8-4.4,1-6.7c0-0.5-0.2-5.8,0.1-5.9c2.4-0.9,12.5-4.1,13.7-2c2.5,4.5-2.9,10.6-6.5,13c-1.3,0.9-1.3,4.3-0.5,5.5c1.1,1.5,4-0.6,5-1.3c1.6-1.1,2.6-2.3,3.5-4c1.6-3.2,2.5-7.3,1.8-10.8C259.8,26.9,257.3,25.1,253.9,25.6z M220.9,46.3C220.9,46.3,220.9,46.4,220.9,46.3l0,0.1l0,0.1C220.9,46.4,220.9,46.3,220.9,46.3z M236.3,36.2c-0.6,4.7-2.5,9.5-5.2,13.3c-1.3,1.8-2.7,4-4.7,5.2c-1.4,0.9-4.2,2.7-5.8,1.4c-2-1.6-0.4-5.8,0.4-7.6c1.1-2.4,2.5-4.8,4.2-6.9c1.9-2.3,4.3-4,6.7-5.8c0.8-0.6,1.7-1.3,2.5-1.9c0.2-0.2,2-1.2,2-1.5c0,0.7,0,0.9,0,0.9s0,0.8,0,0.8C236.4,35,236.4,35.6,236.3,36.2z",
    "Lime" : "M259.8,71.2c0-0.1,0-0.2,0-0.3c0-2.8-0.7-5.6-1.6-8.2c-5.9-16.4-21.4-28.7-38.5-32c-17.7-3.4-36.2,2.3-50.2,13.5c-6.8,5.5-12.5,12.7-16.1,20.7c-7,15.6-6,34.9,3.7,49.1c2,2.9,4.7,5.8,8.2,6.4c3.6,0.5,7-1.4,10-3.5c6.5-4.4,12.4-9.4,18.8-14c7.8-5.7,15.9-10.9,24.8-14.7c9.1-3.9,18.5-6.8,27.7-10.4c4.9-1.9,7-5.1,5.3-10.3c-3-9.3-9.4-17.5-17.9-22.3c-1.9-1.1-4.3-1.9-6.1-0.8c-1,0.6-1.5,1.6-2,2.7c-4.3,8.6-6.8,18.2-10.1,27.2c-1.1,3.1-2.7,6.4-3.5,9.6c3-12.5,6-25.1,8.9-37.6c0.7-2.8,0-5.1-2.7-6.3c-8.4-3.7-20.5-2.3-28.5,1.6c-1.7,0.9-3.4,2.2-4,4c-0.8,2.2,0.1,4.7,1.3,6.7c6.2,10.8,12.2,21.9,18.2,32.8c-7.6-10.2-15.2-20.4-22.8-30.6c-1.3-1.8-2.8-3.7-5-4.1c-2.3-0.4-4.5,1.1-6.3,2.6c-5.5,4.8-9.7,10.9-12.1,17.8c-0.9,2.4-1.5,5.2-0.5,7.6c1.6,3.7,6.2,4.8,10.1,5.5c10.3,1.9,20.5,4.4,30.6,7.4c-10.1-0.5-20.2-2-30.1-4.3c-3.1-0.7-6.8-1.6-9.9-0.3c-3.7,1.5-3.6,6.4-3,9.8c1.4,7.5,4.5,14.8,8.9,21c-0.5-0.7-2-1.3-2.7-1.8c-0.9-0.8-1.8-1.6-2.5-2.6c-1.5-1.9-2.7-4.1-3.6-6.3c-6.9-15.9-4.3-35.5,6.1-49.3c10.6-14,29.1-23.3,46.7-23.4c9.7-0.1,19.4,2.8,27.5,8.2c9.8,6.6,17.1,17,19.9,28.5c0.3,1.2,1.2,2.8,2.3,2.3C259.6,72.7,259.8,71.9,259.8,71.2z",
    "Limon": "M194.6,97.3c0,0.1,0,0.2,0,0.3c0.5,2.8,1.7,5.4,3.1,7.8c8.8,15.1,26.2,24.3,43.7,24.5c18.1,0.1,35.2-8.9,46.9-22.4c5.7-6.6,10-14.8,12-23.3c4.1-16.7-0.4-35.5-12.5-47.6c-2.5-2.5-5.7-4.9-9.2-4.8c-3.6,0.1-6.6,2.7-9.2,5.2c-5.6,5.5-10.5,11.5-15.9,17.2c-6.6,7-13.7,13.6-21.7,18.9c-8.2,5.4-16.9,10.1-25.3,15.3c-4.5,2.8-6,6.2-3.3,11.1c4.7,8.6,12.5,15.5,21.7,18.7c2,0.7,4.5,1.1,6.1-0.3c0.8-0.8,1.2-1.9,1.5-3c2.6-9.2,3.4-19.1,5-28.6c0.6-3.3,1.5-6.8,1.7-10.1c-0.7,12.9-1.3,25.7-2,38.6c-0.1,2.8,0.9,5,3.9,5.7c8.9,2.1,20.6-1.4,27.7-6.8c1.6-1.2,2.9-2.8,3.2-4.7c0.3-2.3-0.9-4.6-2.5-6.4c-8.1-9.5-15.9-19.3-23.9-29c9.3,8.7,18.6,17.3,28,26c1.6,1.5,3.5,3.1,5.7,3.1c2.4,0,4.3-1.9,5.7-3.7c4.5-5.7,7.5-12.5,8.7-19.7c0.4-2.6,0.5-5.4-0.9-7.5c-2.2-3.4-6.9-3.6-11-3.6c-10.5,0-21-0.6-31.4-1.8c10.1-1.3,20.2-1.7,30.4-1.2c3.2,0.2,6.9,0.4,9.8-1.5c3.4-2.2,2.4-7,1.1-10.1c-2.7-7.2-7.1-13.7-12.5-19.1c0.6,0.6,2.2,0.9,3,1.3c1.1,0.6,2.1,1.3,3,2.1c1.8,1.6,3.4,3.6,4.7,5.6c9.7,14.4,10.7,34.1,2.9,49.6c-7.9,15.6-24.4,28.2-41.7,31.5c-9.5,1.9-19.6,0.8-28.5-3.1c-10.9-4.7-19.9-13.6-24.7-24.4c-0.5-1.1-1.6-2.5-2.7-1.9C194.6,95.8,194.5,96.6,194.6,97.3z",
    "Orange" : "M309.7,172.1c-0.1,0-0.2,0-0.4-0.1c-3.7-0.8-7.1-2.6-10.3-4.7c-19.8-12.8-31.1-37-30.1-60.6c1-24.4,14.3-46.9,33.3-61.8c9.3-7.3,20.6-12.4,32.2-14.7c22.7-4.4,47.8,2.9,63.4,20c3.2,3.6,6.2,8,5.8,12.8c-0.4,4.9-4.1,8.7-7.6,12c-7.8,7.2-16.2,13.4-24.3,20.4c-9.9,8.5-19.3,17.6-27,28.1c-7.9,10.7-14.7,22.2-22.3,33.1c-4.1,5.9-8.8,7.6-15.2,3.7c-11.3-6.9-20.1-17.8-23.8-30.5c-0.8-2.8-1.2-6.2,0.8-8.2c1.1-1.1,2.6-1.5,4.1-1.8c12.7-2.9,26-3.4,38.9-4.9c4.5-0.5,9.2-1.6,13.8-1.6c-17.4,0-34.8,0.1-52.2,0.1c-3.8,0-6.7-1.6-7.5-5.6c-2.3-12.2,3.3-27.6,11-36.9c1.7-2,3.9-3.7,6.5-4c3.2-0.3,6.1,1.6,8.4,3.7c12.3,11.5,25,22.8,37.5,34.1c-11.1-13.1-22.2-26.3-33.2-39.4c-1.9-2.3-4-4.9-3.8-7.9c0.2-3.2,2.8-5.6,5.4-7.5c7.9-5.7,17.4-9.3,27.1-10.4c3.5-0.4,7.3-0.4,10.1,1.7c4.4,3.2,4.4,9.6,4.1,15c-0.7,14.2-0.6,28.4,0.3,42.5c2.4-13.5,3.6-27.2,3.6-40.9c0-4.3,0-9.4,2.6-13.1c3.2-4.4,9.6-2.7,13.8-0.9c9.5,4.2,18,10.4,24.9,18.2c-0.7-0.8-1-3.1-1.5-4.2c-0.7-1.5-1.6-2.9-2.6-4.1c-2.1-2.6-4.6-4.8-7.2-6.7c-18.8-14.1-45.3-16.7-66.7-7.2c-21.6,9.6-39.6,31.1-45.3,54.1c-3.1,12.7-2.4,26.4,2.2,38.7c5.6,15,17,27.7,31.3,35c1.5,0.8,3.3,2.4,2.3,3.8C311.7,172.2,310.7,172.3,309.7,172.1z"
}

// Definiranje podataka o čašama koji su potrebni za iscrtavanje grafikona
var allglasses = [];
coll = {
    width: 240, height: 700, top: 80, right: 20, bottom: 50, left: 130 + 10,
    svg: "images/collins_glass.svg", maxVolumen: 1, Y_height: 640
};
allglasses["Collins glass"] = coll;

cock = {
    width: 500, height: 700, top: 80, right: 20, bottom: 50, left: 10,
    svg: "images/cocktail_glass.svg", maxVolumen: 1, Y_height: 242
};
allglasses["Cocktail glass"] = cock;




// parsiranje podataka
d3.csv("/data/all_cocktails.csv", function (data) {

    // Popunjavanje select liste s imenima koktela
    var select = d3.select('#dataList');

    select.on("change", function (d) {
        var value = d3.select(this).property("value");

        // Odabirom koktela u izborniku njegovi podaci se spremaju u 3 niza
        // za količline, nazive i boje zbog lakšek spajanja u nastavku;
        for (var i = 0; i < data.length; i++) {
            if (data[i].number == value) {

                // čiščenje nizova prije dodavanja novog kokotela 
                measure = [];
                ingredients = [];
                colors = [];
                cocktail = [];
                extras = [];
                extrasMeasure = [];
                cocktail.push(data[i].DrinkName);
                glassType = data[i].Glass;
                cocktailInfo = data[i].Instructions;

                // Ingredient 1
                if (isLiquid(data[i].Ingredient1)) {
                    ingredients.push(data[i].Ingredient1);
                    measure.push(data[i].Measure1);
                    colors.push(allcolors[data[i].Ingredient1])
                }
                else if (isExtras(data[i].Ingredient1)) {
                    extras.push(data[i].Ingredient1);
                    extrasMeasure.push(data[i].Measure1);
                    colors.push(allextrascolor[data[i].Ingredient1]);
                }

                // Ingredient 2
                if (isLiquid(data[i].Ingredient2)) {
                    ingredients.push(data[i].Ingredient2);
                    measure.push(data[i].Measure2);
                    colors.push(allcolors[data[i].Ingredient2])
                }
                else if (isExtras(data[i].Ingredient2)) {
                    extras.push(data[i].Ingredient2);
                    extrasMeasure.push(data[i].Measure2);
                    colors.push(allextrascolor[data[i].Ingredient2]);
                }

                // Ingredient 3
                if (isLiquid(data[i].Ingredient3)) {
                    ingredients.push(data[i].Ingredient3);
                    measure.push(data[i].Measure3);
                    colors.push(allcolors[data[i].Ingredient3])
                }
                else if (isExtras(data[i].Ingredient3)) {
                    extras.push(data[i].Ingredient3);
                    extrasMeasure.push(data[i].Measure3);
                    colors.push(allextrascolor[data[i].Ingredient3]);
                }

                // Ingredient 4
                if (isLiquid(data[i].Ingredient4)) {
                    ingredients.push(data[i].Ingredient4);
                    measure.push(data[i].Measure4);
                    colors.push(allcolors[data[i].Ingredient4])
                }
                else if (isExtras(data[i].Ingredient4)) {
                    extras.push(data[i].Ingredient4);
                    extrasMeasure.push(data[i].Measure4);
                    colors.push(allextrascolor[data[i].Ingredient4]);
                }

                // Ingredient 5
                if (isLiquid(data[i].Ingredient5)) {
                    ingredients.push(data[i].Ingredient5);
                    measure.push(data[i].Measure5);
                    colors.push(allcolors[data[i].Ingredient5])
                }
                else if (isExtras(data[i].Ingredient5)) {
                    extras.push(data[i].Ingredient5);
                    extrasMeasure.push(data[i].Measure5);
                    colors.push(allextrascolor[data[i].Ingredient5]);
                }

                // Ingredient 6
                if (isLiquid(data[i].Ingredient6)) {
                    ingredients.push(data[i].Ingredient6);
                    measure.push(data[i].Measure6);
                    colors.push(allcolors[data[i].Ingredient6])
                }
                else if (isExtras(data[i].Ingredient6)) {
                    extras.push(data[i].Ingredient6);
                    extrasMeasure.push(data[i].Measure6);
                    colors.push(allextrascolor[data[i].Ingredient6]);
                }

                // Ingredient 7
                if (isLiquid(data[i].Ingredient7)) {
                    ingredients.push(data[i].Ingredient7);
                    measure.push(data[i].Measure7);
                    colors.push(allcolors[data[i].Ingredient7])
                }
                else if (isExtras(data[i].Ingredient7)) {
                    extras.push(data[i].Ingredient7);
                    extrasMeasure.push(data[i].Measure7);
                    colors.push(allextrascolor[data[i].Ingredient7]);
                }

                // Infgredinet 8
                if (isLiquid(data[i].Ingredient8)) {
                    ingredients.push(data[i].Ingredient8);
                    measure.push(data[i].Measure8);
                    colors.push(allcolors[data[i].Ingredient8])
                }
                else if (isExtras(data[i].Ingredient8)) {
                    extras.push(data[i].Ingredient8);
                    extrasMeasure.push(data[i].Measure8);
                    colors.push(allextrascolor[data[i].Ingredient8]);
                }

                // Infredient 9
                if (isLiquid(data[i].Ingredient9)) {
                    ingredients.push(data[i].Ingredient9);
                    measure.push(data[i].Measure9);
                    colors.push(allcolors[data[i].Ingredient9])
                }
                else if (isExtras(data[i].Ingredient9)) {
                    extras.push(data[i].Ingredient9);
                    extrasMeasure.push(data[i].Measure9);
                    colors.push(allextrascolor[data[i].Ingredient9]);
                }

                // Ingredient 10
                if (isLiquid(data[i].Ingredient10)) {
                    ingredients.push(data[i].Ingredient10);
                    measure.push(data[i].Measure10);
                    colors.push(allcolors[data[i].Ingredient10])
                }
                else if (isExtras(data[i].Ingredient10)) {
                    extras.push(data[i].Ingredient10);
                    extrasMeasure.push(data[i].Measure10);
                    colors.push(allextrascolor[data[i].Ingredient10]);
                }
            }
            
        }
        
        // funkcija za icrtavanje grafikona
        fillGlass(glassType);
        fillInfo();
    });


    //popunjavanje izbornika select imenima koktela i ID-em
    select.selectAll("option").data(data).enter()
        .append("option").attr("value", function (d) {
            return d.number
        }).text(function (d) {
            return d.DrinkName
        })
});

document.body.style.backgroundColor = "#dedede";


///////////////////////////////////////////////////////


function isLiquid(ingredient) {
    if (allcolors.hasOwnProperty(ingredient)) return true;
    else return false;
}

function isExtras(ingredient) {
    if (allextrascolor.hasOwnProperty(ingredient)) return true;
    else return false;
}

function fillGlass(glassType) {

    // čiščenje prijašnjih elemenata sa slike
    d3.selectAll("svg").remove();

    //postavljanje dimenzija grafikona
    var width = allglasses[glassType].width;
    var height = allglasses[glassType].height;
    var margin = {
        top: allglasses[glassType].top,
        right: allglasses[glassType].right,
        bottom: allglasses[glassType].bottom,
        left: allglasses[glassType].left
    };

    // selektiranje html elementa i upacivanje glavnog svg elementa 
    var svg = d3.select("#graph")
        .append("svg")
            .attr("width", width + margin.left + margin.right + 255)
            .attr("height", height + margin.top)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    // učitavanje svg čaše kao xml 
    d3.xml(allglasses[glassType].svg,
        function (error, documentFragment) {
            if (error) { console.log(error); return; }

            // ekstraktiranje svg elementa iz xml-a
            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            
            // d3.node() vrača DOM čvor, pa se može koristi 
            // čisti Javascript za dodavanje sadržaja
            svg.node().appendChild(svgNode);

            var glassSVG = svg.select("svg");

            //pozicioniranje čaše na pravo mijesto u odnosu na graf
            glassSVG.attr("width", width + margin.right)
                .attr("height", height)
                .style("opacity", 1.0);
        });

    // čuvanje originalnih količina za potrebe legende
    var originalMesures = []
    for (var j = 0; j < measure.length; j++) {
        originalMesures.push(measure[j]);
    }

    
    // promjena scale za cocktail čašu
    if (glassType == "Cocktail glass") {
        cone = new ConeVolumen();
        cone.conevertToConeScale();
    }



    // prilagodba podataka jednog koktela za korištenje s d3.stack() funkcijom
    var drinkObj = {};
    drinkObj["cocktail"] = cocktail[0];
    ingredients.forEach((key, i) => drinkObj[key] = measure[i]);
    // umetanje imena koktela na prvo mjesto, predstavalja ime stupca 
    ingredients.unshift("cocktail");

    

    let data = [];
    data.push(drinkObj);
    data["columns"] = ingredients;
    // sada je niz data spreman za korištenje s d3.stack()

    // izbacivanje elementa cocktail zbog stack() i potreba prikaza legende
    ingredients.splice(0, 1);
    
    // pretvaranje niza količina za potrebe složenog stupčastog grafikona
    var stackedData = d3.stack()
        .keys(ingredients)
        .offset(d3.stackOffsetExpand)
        (data)

    // definiranje skale za X os
    var x = d3.scaleBand()
        .domain(cocktail)
        .range([0, width])

    // definiranje skale za Y os
    var y = d3.scaleLinear()
        .domain([0, allglasses[glassType].maxVolumen])
        .range([allglasses[glassType].Y_height, 0]);

    // definiranje skale boja
    var color = d3.scaleOrdinal()
        .domain(ingredients)
        .range(colors)

    // postavljanje countera za delay funkciju animacije na početnu vrijednost
    // i definiranje trajanja animacije
    let i = -1;
    let duration = 3200;
    let numberOfIngredinets = ingredients.length;

    // prikaz stupaca supčastog grafikona
    svg.append("g").attr("id", "Bars").selectAll("g")
        .data(stackedData)
        .enter().append("g")
        .attr("fill", function (d) { return color(d.key); })
        // enter drugi put za dodavanje rect elemenata za svaki sastojak
        .selectAll("rect")
        .data(function (d) { return d; })
        .enter().append("rect")
        .attr("transform", "translate(" + margin.right / 2 + ",30)")
        .attr("y", function (d) { return y(d[0]); })

        .transition()
        .delay((d) => {
            i++;
            console.log(i);
            return i * (duration / numberOfIngredinets);
        })
        .duration(duration / numberOfIngredinets)

        .attr("x", function (d) { return x(d.data.cocktail); })
        .attr("y", function (d) { return y(d[1]); })
        .attr("height", function (d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth())
        .attr("transform", "translate(" + margin.right / 2 + ",30)");



    // definiranje x i y osi za iscrtavanje poligona
    var x = d3.scaleLinear().range([0, 500]);
    var y = d3.scaleLinear().range([500, 0]);
    x.domain([0, 50]);
    y.domain([0, 50]);

    
    

    // maskiranje viška grafikona
    if (glassType == "Cocktail glass") {
        // definiranje točki poligona maske 
        var maskPoly = [{ "x": 4, "y": 50 },
                    { "x": 48, "y": 50 },
                    { "x": 26, "y": 22 }];

        // dodavanje clipping path na graffikon dodavanjem clipPath elementa
        d3.select("#Bars").append("clipPath")
            .attr("id", "maskClip")
            .selectAll("polygon")
            .data([maskPoly])
            .enter().append("polygon")
            .attr("points", function (d) {
                return d.map(function (d) {
                    return [x(d.x), y(d.y)].join(",");
                }).join(" ");
            });


        d3.select("#Bars")
            .attr("clip-path", "url(#maskClip)");

    }

    // postavaljanje x i y koridinata legende
    var Yposition = 0;
    var Xposition = 0;
    if (glassType == "Collins glass") {
        Yposition = 450;
        Xposition = -100;
    }

    // dodavanje dodataka na grafikon
    svg.append("g").selectAll("extras")
        .data(extras)
        .enter()
        .append("path")
        .style("fill", function (d) { return allextrascolor[d]; })
        // umetanje d atributa za iscrtavanje krivulje path elementa
        .attr("d", function (d) {  return allextras[d]; })
        .attr("id", function(d){  return d; })
        .attr("transform", "translate(" + Xposition + ",-350)")
        
        .transition()
        .delay((d, i) => {
            return i * 300 + (duration * 2 / 3);
        })
        .duration(duration / 3)
        .attr("transform", "translate(" + Xposition + "," + Yposition + ")");
        
    // pomicanje sastojaka koji plivaju na vrh collins čaše
    if(glassType == "Collins glass"){
        d3.select("#Orange").interrupt()
        .attr("transform", "translate(-200,-350)")
        .transition()
        .duration(duration/3)
        .delay(duration)
        .attr("transform", "translate(-200,0)");

        d3.select("#Lime").interrupt()
        .attr("transform", "translate(-200,-350)")
        .transition()
        .duration(duration/3)
        .delay(duration)
        .attr("transform", "translate(-200,0)");

        d3.select("#Limon").interrupt()
        .attr("transform", "translate(-200,-350)")
        .transition()
        .duration(duration/3)
        .delay(duration)
        .attr("transform", "translate(-200,0)");
        
    }

    // spajanje tekučih sastojaka i dodataka u jedan niz za iscrtavanje legende
    allingredients = ingredients.concat(extras);
    allmeasures = originalMesures.concat(extrasMeasure);
    var marginChart = width + 50;

    // postavaljnje krugova u legendu
    svg.selectAll("mydots")
        .data(allingredients)
        .enter()
        .append("circle")
        .attr("cx", 0)
        .attr("cy", function (d, i) { return i * 50 * (-1) })
        .attr("r", 20)
        .style("fill", function (d) { return color(d) })
        .attr("transform", "translate(" + marginChart + "," + allglasses[glassType].Y_height + ")");

    // postavaljanje imena sastojaka u legendu
    svg.selectAll("mylabels")
        .data(allingredients)
        .enter()
        .append("text")
        .attr("x", 40)
        .attr("y", function (d, i) { return i * 50 * (-1) + 5 }) //10 je radius  
        .style("fill", "#595856")
        .text(function (d) { if(d=="Nutmeg") return "Nutmeg powder"; else return d })
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
        .attr("transform", "translate(" + marginChart + "," + allglasses[glassType].Y_height + ")");

    // postavljanje količine sastojaka u legendu
    svg.selectAll("mesure")
        .data(allmeasures)
        .enter()
        .append("text")
        .attr("x", 220)
        .attr("y", function (d, i) { return i * 50 * (-1) + 5 }) //10 je radius  
        .style("fill", "#595856")
        .text(function (d) { if(d == "") return ""; else return parseInt(d);})
        .attr("text-anchor", "end")
        .style("alignment-baseline", "middle")
        .attr("transform", "translate(" + marginChart + "," + allglasses[glassType].Y_height + ")");
}

// postavljanje imena i opisa pripremanja koktela u html
function fillInfo() {
    nameLabel.innerHTML = cocktail[0];
    cocktailInfoLabel.innerHTML = cocktailInfo;
}


///////////////////////////////////////////////////////////////////////////

class ConeVolumen {
    constructor() {
        this.angle = 68;
        this.startVolumen = 0.03 * measure.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        this.startHeight = hFromV(this.startVolumen, this.angle);
        this.Volumens = [this.startVolumen];
    }

    coneVolumenToHight(Volumen, index) {
        var hSUM;
        var h1;
        var VolumenSUM;

        if (index == 0) {

            VolumenSUM = this.Volumens[0] + parseInt(Volumen);
            h1 = hFromV(VolumenSUM, this.angle);
            this.Volumens.push(VolumenSUM);

        }
        else {

            VolumenSUM = this.Volumens[index] + parseInt(Volumen);

            this.Volumens.push(VolumenSUM);

            hSUM = hFromV(VolumenSUM, this.angle);
            h1 = hSUM - hFromV(this.Volumens[index], this.angle);
        }
        return h1;
    }

    conevertToConeScale() {
        var newMeasures = [];
        for (var i = 0; i < measure.length; i++) {

            newMeasures.push(this.coneVolumenToHight(measure[i], i));
        }

        for (var i = 0; i < measure.length; i++) {
            measure[i] = newMeasures[i];
        }

    }

}


//funkcija za izračun visine tekučine iz Volumena i kuta stožca
function hFromV(V, x) {
    radians = x * (Math.PI / 180);
    h = Math.sqrt((3 * V) / Math.abs((Math.tan(radians))));
    return h;
}


