var Emitter = require("events").EventEmitter;
var util = require("util");

var ReviewProcess = function (args) {
    var callback;
    this.ensureAppValid = function (app) {
        if (app.isValid()) {
            this.emit("validated", app);
        } else {
            this.emit("invalid", app.validationMessage());
        }
    };


    this.findNextMission = function (app) {
        app.mission = {
            commander: null,
            pilot: null,
            MAVPilot: null,
            passengers: []
        };
        this.emit("mission-selected", app);
    };

    this.roleIsAvialable = function (app) {
        this.emit("role-available", app);
    }

    this.sureRoleCompatible = function (app) {
        this.emit("role-compatible", app);
    }

    this.acceptApplication = function (app) {
        callback(null, {
            succes: true,
            message: "Welcome to Mars Program"
        });
    }

    this.denyApplication = function (message) {
        callback(null, {
            success: false,
            message: message
        });
    }

    this.processApplication = function (app, next) {
        this.emit("application-received", app);
        callback = next;
    }

    this.on("application-received", this.ensureAppValid);
    this.on("validated", this.findNextMission);
    this.on("mission-selected", this.roleIsAvialable);    
    this.on("role-compatible", this.acceptApplication);
    this.on("invalid", this.denyApplication);
};
util.inherits(ReviewProcess, Emitter);
module.exports = ReviewProcess;