
class APIManager {
    constructor() {
        this.data = {
            mainUser: null,
            friends: [],
            quote: "",
            pokemon: null,
        };
    }

    async getMainUser() {
        let mainUser = await $.get(
            "https://randomuser.me/api/?results=1&inc=picture,name,location"
        );

        return {
            picture: mainUser.results[0].picture.medium,
            firstName: mainUser.results[0].name.first,
            lastName: mainUser.results[0].name.last,
            city: mainUser.results[0].location.city,
            state: mainUser.results[0].location.state,
        };
    }

    async getFriends() {
        let friends = await $.get(
            "https://randomuser.me/api/?results=6&inc=name"
        );

        return friends.results.map((user) => ({
            firstName: user.name.first,
            lastName: user.name.last,
        }));
    }

    async getQuote() {
        let quote = await $.get("https://api.kanye.rest");

        return quote.quote;
    }

    getPokemonId() {
        return Math.round(Math.random() * 949);
    }

    async getPokemon() {
        let pokemonId = this.getPokemonId();
        let pokemon = await $.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );

        return {
            name: pokemon.name,
            sprite: pokemon.sprites.front_default,
        };
    }

    async getBaconIpsum() {
        return await $.get(
            "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1"
        );
    }

    async loadData() {
        const [mainUser, friends, quote, pokemon, meatText] = await Promise.all(
            [
                this.getMainUser(),
                this.getFriends(),
                this.getQuote(),
                this.getPokemon(),
                this.getBaconIpsum(),
            ]
        );

        this.data.mainUser = mainUser;
        this.data.friends = friends;
        this.data.quote = quote;
        this.data.pokemon = pokemon;
        this.data.meatText = meatText;

        return this.data;
    }

    loadDataFromLocalStorage() {
        const dataJSON = localStorage.getItem("userData");
        if (dataJSON) {
            this.data = JSON.parse(dataJSON);
        }
    }
}
