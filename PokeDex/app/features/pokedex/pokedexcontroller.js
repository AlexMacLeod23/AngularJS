(function() {
    var PokedexController =  function(pokeService) {
        var vm = this;

        vm.reverse =false;

        vm.doSort = function() {
            vm.sortby = 'Title';
            vm.reverse= !vm.reverse
        };

        vm.search = function(idRef) {
            pokeService.getPokemon(idRef).then(function (results) {
                console.log("In pokedex controller about to return data to the client with results " + results);
                vm.pokemon  = results;
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
        };

    };
    pokemonApp.controller('pokedexController', ['pokeService', PokedexController]);
}());