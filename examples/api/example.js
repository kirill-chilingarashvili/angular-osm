(function() {
    angular.module('example', ['osm.api', 'angular-leaflet'])
    .config(config)
    .controller('ExampleCtrl', ExampleCtrl);
    function config(osmAPIProvider) {
        osmAPIProvider.options = {
//            url: 'http://api06.dev.openstreetmap.org/api'
            url: 'http://www.openstreetmap.org/api'
//            url: 'http://master.apis.dev.openstreetmap.org/api'
        };
    }

    function ExampleCtrl ($scope, osmAPI, leafletService) {
        var $ctrl = this;
        $ctrl.osmAPI = osmAPI;
        $ctrl.bbox = 'azez';

        $ctrl.onMapInitialized = function(map) {
            $ctrl.leaflet = map;
            $ctrl.leaflet.setZoom(18);
            setBBox();
            leafletService.on('move', setBBox, map, $scope);
            leafletService.on('zoomend', setBBox, map, $scope);
        };

        function setBBox() {
            var bounds = $ctrl.leaflet.getBounds();
            $ctrl.bbox = bounds.toBBoxString();
        }
        $ctrl.onData = function onData(data) {
            $ctrl.loading = false;
            delete $ctrl.data;
            $ctrl.data = data;
        };
        $ctrl.onError = function onError(error) {
            $ctrl.loading = false;
            $ctrl.error = error;
        };
    }

})();