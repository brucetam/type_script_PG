"path";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "Users" };
// document.body.innerHTML = greeter(user);
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());


var Greete = new Greeter('Bruce niu');
document.body.innerHTML = Greeter.greet();
