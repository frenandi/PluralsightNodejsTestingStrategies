var assert = require("assert");
var MembershipApplication = require("../models/MembershipApplication")

describe("New user signup", function(){
    var validApp;

    before(function(){
        validApp = new MembershipApplication({
            first:"Test",
            last: "User",
            email:"test@test.com",
            age: 30,
            height: 66,
            weight: 180
        });
    });
    describe("validations", function(){
        it("it is a valid date", function(){
            var app = new MembershipApplication({
                validUntil: Date.parse("01/01/2010")
            });
            assert(app.expired);
        });
        it("is valid", function(){
            assert(validApp.isValid(), "Not valid");
        });
        it("reports a valid email", function(){
            assert(validApp.isValid());
        });
        it("reports a valid height", function(){
            assert(validApp.heighIsValid());
        });
        it("reports a valid age", function(){
            assert(validApp.ageIsValid());
        });
        it("reports a valid weight", function(){
            assert(validApp.weightIsValid());
        });
        it("reports a valid name", function(){
            assert(validApp.isValid());
        });
    });
    describe("Application invalid if...", function(){
        it("email is 4 characters or less", function(){
            var app = new MembershipApplication({
                email:"d@d"});
            assert(!app.emailIsValid());
        });
        it("email is 4 characters or less", function(){
            var app = new MembershipApplication({
                email:"thing.thing"});
            assert(!app.emailIsValid());
        })
    });
});