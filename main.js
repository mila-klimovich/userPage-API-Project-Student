
$(document).ready(function () {
    const apiManager = new APIManager();
    const renderer = new Renderer();

localStorage.removeItem("userData");

async function generateUser() {
    try {
        const data = await apiManager.loadData();
        renderer.renderData(data);
    } catch (error) {
        console.error("Error while generating data:", error);
    }
}

async function saveDataToLocalStorage() {
    try {
        const data = apiManager.data;
        const dataJSON = JSON.stringify(data);
        localStorage.removeItem("userData");
        localStorage.setItem("userData", dataJSON);
        alert("User data saved to local storage.");
    } catch (error) {
        console.error("Error while saving user data to local storage:", error);
    }
}

async function loadDataFromLocalStorageAndRender() {
    try {
        apiManager.loadDataFromLocalStorage();
        renderer.renderData(apiManager.data);
        console.log("User data loaded from local storage and rendered.");
    } catch (error) {
        console.error(
            "Error while loading user data from local storage:",
            error
        );
    }
}

$("#generate").on("click", generateUser);

$("#save").on("click", saveDataToLocalStorage);

$("#load").on("click", loadDataFromLocalStorageAndRender);

});
