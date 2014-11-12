'use strict';
var app = angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'ui.sortable']);
app.controller('TabsDemoCtrl', function ($scope) {
    $scope.panels = [
            [{ name: "Presenters", active: true, content: 'Panel-1:Tab-1 Content' },
                { name: "Polls", active: false, content: 'Panel-1:Tab-2 Content' }],
            [{ name: "Chat", active: true, content: 'Panel-2:Tab-1 Content' },
                { name: "Attendees", active: false, content: 'Panel-2:Tab-2 Content' }],
            [{ name: "Library", active: true, content: 'Panel-3:Tab-1 Content' },
                { name: "Notepad", active: false, content: 'Panel-3:Tab-2 Content' }]
    ];
    $scope.selectTab = function (tabName) {
        for (var i = 0; i < $scope.panels.length; i++) {
            if ($scope.panels[i].length > 0) {
                var activeName = "", activeNo = 0, flag = 0;
                for (var j = 0; j < $scope.panels[i].length; j++) {
                    if ($scope.panels[i][j].name == tabName) {
                        flag = 1;
                    }
                    if ($scope.panels[i][j].active) {
                        activeNo = j;
                    }
                }
                if (flag == 1) {
                    for (var j = 0; j < $scope.panels[i].length; j++) {
                        if ($scope.panels[i][j].name == tabName) {
                            $scope.panels[i][j].active = true;
                        } else {
                            $scope.panels[i][j].active = false;
                        }
                    }
                } else {
                    for (var j = 0; j < $scope.panels[i].length; j++) {
                        if (activeNo == j) {
                            $scope.panels[i][j].active = true;
                        } else {
                            $scope.panels[i][j].active = false;
                        }
                    }
                }
            }
        }
        console.log($scope.panels);
    }

    $scope.sortPanels = function () {
        var newpanel = [], k = 0;
        for (var i = 0; i < $scope.panels.length; i++) {
            if ($scope.panels[i].length > 0) {
                newpanel[k++] = $scope.panels[i];
            }
        }
        $scope.panels = newpanel;
        $scope.selectTab('');
    }
    $scope.sortableOptions = {
        connectWith: ".nav-tabs",
        helper: 'tab',
        stop: function () {
            $scope.sortPanels();
        }
    };
});