function greeter(person: string) {
    return "hello , " + person;
}

var user = "deep sea";

var myClientId = 30772cf8f67ff1cf04a4b7bdf803b7d5";

function initSC() : void {
    // init SoundCloud
    SC.initialize({
        client_id: myClientId
    });
}


document.body.innerHTML=greeter(user);