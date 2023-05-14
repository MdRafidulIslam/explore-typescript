var city = 'dhaka';
var fruit = ['mongo', 'banana', 'apple'];
var student = {
    name: 'md joshim',
    salary: 12000,
    id: 12
};
var employee = {
    name: 'nanana',
    salary: 222,
    id: 33
};
function addd(num1, num2) {
    return num1 + num2;
}
var adddiytion = function (num1, num2) { return num1 + num2; };
var doMath = function (num1, num2) {
};
var messy = {
    name: 'l messi',
    salary: 111,
    previousClub: ['psg', 'fff']
};
var hanna = {
    name: 'saifur',
    salary: 122,
    previousClub: ['ee', 'eee', 'ddddddd'],
    wife: 'sasaa'
};
var pabon = {
    language: 'js',
    typeSpeed: 22,
    name: 'pobon chawy',
    salary: 22
};
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model,
            this.price = price;
    }
    Car.prototype.getTotalPrice = function (tax) {
        var total = this.price * tax;
        return total;
    };
    return Car;
}());
var cae1 = new Car('toyata', 2222);
var p1 = cae1.getTotalPrice(666);
