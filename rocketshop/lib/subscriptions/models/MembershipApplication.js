var _ = require("underscore");
var MembershipApplication = function(args){
    _.extend(this,args);

    this.emailIsValid = function(){
        return this.email && this.email.length > 3 && this.email.indexOf("@") > -1;
    };

    this.heighIsValid = function(){
        return this.height && this.height > 60 && this.height < 75;
    };

    this.ageIsValid = function(){
        
    };

    this.weightIsValid = function(){

    };

    this.isValid = function(){
        return this.emailIsValid() && 
            this.heighIsValid() &&
            this.ageIsValid() &&
            this.weightIsValid();
    };
};

module.exports = MembershipApplication;