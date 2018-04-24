var assert = require("assert");
var ReviewProcess = require("../processes/review")
var MembershipApplication = require("../models/MembershipApplication");
var sinon = require("sinon");

describe("The Review Process", function () {
    describe("receiving a valid application", function () {
        var decision;
        var validApp = new MembershipApplication({
            first: "Test",
            last: "User",
            email: "test@test.com",
            age: 30,
            height: 66,
            weight: 180
        });
        before(function (done) {

            var review = new ReviewProcess();
            var spy = sinon.spy(validApp, "emailIsValid");
            review.processApplication(validApp, function (err, result) {
                decision = result;
                done();
            });
        });

        //Done indicates asynchronous
        it.only("returns success", function () {
            assert(decision.success, decision.message);
            assert(spy.called);
        });
    });
});