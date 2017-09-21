//Write All Mongo Queries Here
var config = require('../config/index');
var mongoose = require('mongoose');
var models = require('../handlers/schema');

var db = mongoose.connection.db;

var syncdb = {
    //TODO: Delete After Inseration of Data (Internal)
    addData: function (roles, _collection) {
        return new Promise(function (resolve, reject) {
            db.collection(_collection, function (err, collection) {
                collection.insert(roles, {safe: true}, function (error, result) {
                    if (!err) {
                        resolve();
                    } else {
                        reject(error);
                    }
                });
            });

        })
    },

    addCategories: function () {

        return new Promise(function (resolve, reject) {

            var sub_accessories = ["Bracelets","Bangles","Earrings","Necklaces","Rings","Hair accessories","Hats","Scarves","Stoles","Watches","Sunglasses","Belts","Anklets","Cases and sleeves","Other"];

            var sub_Bags = ["Hand Bags", "Clutches and Potlis", "Totes", "Sling Bags", "Back Packs", "Travel Bags", "Laptop Bags", "Gym Bags", "Wallets", "Others"];

            var sub_indians = ["Kurtis", "Salwars and Churidaars", "Blouses/Cholis", "Dupatta", "Lehngas", "Sarees", "Suits", "Bridal Wear", "Shawls", "Others"];

            var sub_jackets = ["Blazers", "Denim", "Fur/Faux", "Leather", "Over Coats", "Waist Coats", "Shrugs", "Cheaters", "Gym Wear", "Quilted"];

            var sub_tops = ["Crop tops", "Long Sleeves", "Tanks", "Tees", "Shirts/Blouses", "Others"];

            var sub_beach = ["Bikinis", "Tankinis", "Maillots", "Sarongs", "Others"];

            var sub_wool = ["Cardigans", "Knits", "Pullovers", "Sweat Shirts", "Turtle Necks", "Others"];

            var sub_low = ["Jeans", "Track Pants", "Trousers", "Tights", "Jump Suits and Rompers", "Pyjamas", "Others"];

            var sub_shoes = ["Boots", "Stilettos", "Pumps", "Wedges", "Flats", "Ballerinas", "Peep Toes", "Sneakers", "Sports Shoes", "Juttis and Kohlapuris", "Others"];

            var sub_beauty = ["Makeup", "Skin", "Hair", "Bath and Body", "Fragrance"];

            var accessories = new models.Categories({title : "Accessories",
                fullWidthImage : "http://54.254.175.129:9000/uploads/1499325187813.png",
                halfWidthImage : "http://54.254.175.129:9000/uploads/1499325187822.jpg"});

            accessories.save(function (err,_access) {

                sub_accessories.forEach(function (_item) {
                    _access.appendChild({title: _item});
                });

            })


            var bags = new models.Categories({
                title: "Bags",
                fullWidthImage: "http://54.254.175.129:9000/uploads/1499325076837.png",
                halfWidthImage: "http://54.254.175.129:9000/uploads/1499325076850.png"

            });

            bags.save(function (err, _bags) {


                sub_Bags.forEach(function (_item) {
                    _bags.appendChild({title: _item});
                });
            })


            var clothes = new models.Categories({
                title: "Clothes",
                fullWidthImage: "http://54.254.175.129:9000/uploads/1499324911301.png",
                halfWidthImage: "http://54.254.175.129:9000/uploads/1499324964599.png"
            });
            clothes.save(function (err, _clothes) {

                _clothes.appendChild({title: "Indian Wear"}, function (err, _indian) {
                    sub_indians.forEach(function (_item) {
                        _indian.appendChild({title: _item});
                    })

                });

                _clothes.appendChild({title: "Western Wear"}, function (err, _western) {

                    _western.appendChild({title: "Dresses"});
                    _western.appendChild({title: "Jackets and Coats"}, function (err, _jackets) {
                        sub_jackets.forEach(function (_item) {
                            _jackets.appendChild({title: _item});
                        })
                    });
                    _western.appendChild({title: "Tops"}, function (err, _tops) {
                        sub_tops.forEach(function (_item) {
                            _tops.appendChild({title: _item});
                        })
                    });
                    _western.appendChild({title: "Skirts"});
                    _western.appendChild({title: "Shorts"});
                    _western.appendChild({title: "Beachwear"}, function (err, _beach) {
                        sub_beach.forEach(function (_item) {
                            _beach.appendChild({title: _item});
                        })
                    });
                    _western.appendChild({title: "Woolens"}, function (err, _wool) {
                        sub_wool.forEach(function (_item) {
                            _wool.appendChild({title: _item});
                        })
                    });
                    _western.appendChild({title: "Lowers"}, function (err, _lower) {
                        sub_low.forEach(function (_item) {
                            _lower.appendChild({title: _item});
                        })
                    });
                    _western.appendChild({title: "Other"});

                });
            });

            var shoes = new models.Categories({
                title: "Shoes",
                fullWidthImage: "http://54.254.175.129:9000/uploads/1499325280940.png",
                halfWidthImage: "http://54.254.175.129:9000/uploads/1499325280953.png"

            });


            shoes.save(function (err, _shoes) {

                sub_shoes.forEach(function (_item) {
                    _shoes.appendChild({title: _item});
                });
            })


            var beauty = new models.Categories({
                title: "Beauty",
                fullWidthImage: "http://54.254.175.129:9000/uploads/1499325138846.png",
                halfWidthImage: "http://54.254.175.129:9000/uploads/1499325138897.png"
            });

            beauty.save(function (err, _beauty) {
                sub_beauty.forEach(function (_item) {
                    _beauty.appendChild({title: _item});
                });
            })
            resolve();

        })

    }


}

module.exports = syncdb

