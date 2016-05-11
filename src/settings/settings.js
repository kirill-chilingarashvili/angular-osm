import osmSettingsService from './settings.service';
import ngstorage from 'ngstorage';

var ngStorageModuleName = ngstorage ? ngstorage.name : 'ngStorage';

var osmSettingsModule = angular.module('osm.settings', [
    ngStorageModuleName
])
.factory('osmSettingsService', osmSettingsService);

export default osmSettingsModule;

