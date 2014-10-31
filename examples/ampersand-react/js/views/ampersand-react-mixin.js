module.exports = {
    componentWillMount: function () {
        var self = this;
        var key;
        
        function register(prop) {
            if (prop.isState) {
                prop.on('change', function () {
                    self.forceUpdate();
                }, self);
            } else if (prop.isCollection) {
                prop.on('add remove sync sort reset', function () {
                    self.forceUpdate();
                }, self);
            }
        }

        for (key in this.props) {
            register(this.props[key])               
        }
    },
    componentWillUnmount: function () {
        var self = this;
        var key;

        function unregister(prop) {
            if (prop.off) {
                console.log('unmounting', key);
                prop.off(null, null, self);
            }
        }

        for (key in this.props) {
            unregister(this.props[key]);
        }
    }
};
