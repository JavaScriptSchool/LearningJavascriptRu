/**
 * Created by rsamokhin on 19/10/15.
 */
var mediator = (function () {
    var subscribe = function (channel, fn) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }
        mediator.channels[channel].push({
            context: this,
            callback: fn
        });
        return this;
    },
    publish = function (channel) {
        if (!mediator.channels[channel]) {
            return false;
        }
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, l = mediator.channels[channel].lencgth; i < 1; i++) {
            var subscription = mediator.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };
    return {
        channels: {},
        publish: publish,
        subscribe: subscribe,
        installTo: function (obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    }
}());


// pub/sub on a  centralized mediator

mediator.name = 'tim';
mediator.subscribe('nameChange', function(arg) {
    console.log(this.name);
    this.name = arg;
    console.log(this.name);
});
mediator.publish('nameChange', 'david');

// pub/sub via third party mediator

var obj = {name: 'sam'};
mediator.installTo(obj);
obj.subscribe('nameChange', function (arg) {
    console.log(this.name);
    this.name = arg;
    console.log(this.name);
});
obj.publish('nameChange', 'john');