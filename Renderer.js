
class Renderer {
    renderMainUser(user) {
        $(".user-container").empty();

        const source = $("#mainUser-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(user);

        $(".user-container").append(newHTML);
    }

    renderFriends(friends) {
        $(".friends-container").empty();

        const source = $("#friends-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({ friends: friends });

        $(".friends-container").append(newHTML);
    }

    renderQuote(quote) {
        $(".quote-container").empty();

        const source = $("#quote-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({ quote });

        $(".quote-container").append(newHTML);
    }

    renderPokemon(pokemon) {
        $(".pokemon-container").empty();

        const source = $("#pokemon-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({ pokemon });

        $(".pokemon-container").append(newHTML);
    }

    renderMeatText(meatText) {
        $(".meat-container").empty();

        const source = $("#meatText-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({ meatText });

        $(".meat-container").append(newHTML);
    }

    renderGif(gif) {
        $(".gif-container").empty();

        const source = $("#gif-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template({gif});

        $(".gif-container").append(newHTML);
    }

    renderData(data) {
        this.renderMainUser(data.mainUser);
        this.renderFriends(data.friends);
        this.renderQuote(data.quote);
        this.renderPokemon(data.pokemon);
        this.renderMeatText(data.meatText);
        this.renderGif(data.gif);
    }
}

Handlebars.registerHelper("properCase", function (str) {
    if (typeof str === "string") {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
} else {
    return '';
}
});
