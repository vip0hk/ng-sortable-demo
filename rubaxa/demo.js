(function () {
	'use strict';


	// Angular example
	angular.module('todoApp', ['ng-sortable'])
		.constant('ngSortableConfig', {})
		.controller('TodoController', ['$scope', function ($scope) {
			$scope.todos = [
				{text: 'left1', done: true,groupId:0},
				{text: 'left2', done: false,groupId:0}
			];

			$scope.sortableConfig = { group: 'todo', animation: 150 ,

			onAdd:function(item){
				console.log('Add')
				console.log(item)
				}
			}

			
		}])
		.controller('TodoControllerNext', ['$scope', function ($scope) {
			$scope.todos = [
				{text: 'right1', done: true,groupId:1},
				{text: 'right2', done: false,groupId:1},
				{text: 'right3', done: false,groupId:1}
			];

			$scope.sortableConfig = { group: 'todo', animation: 150 ,

			// 1,移除当前元素
			onRemove:function(item){
				console.log(item)
				$scope.todos.splice(item.oldIndex,1);
			},

			// 2,从别的组添加过来
			onAdd:function(item){
				console.log('Add')
				console.log(item)
				console.log('从哪来：' + item.model.groupId+'谁：' +item.model.text)

				var toGId;
				$scope.todos.forEach(function(ele,index){
					if (index != item.newIndex) {
						toGId = ele.groupId;
						return false;
					}
				});
				console.log('到哪去：'+ toGId + '位置：' + item.newIndex)
			},

			// 3,自身的排序
			onSort(item){
				console.log('自身排序：'+item.model.groupId+'old:'+item.oldIndex +'new:'+item.newIndex)
			}

		};
			// 'Start End Add Update Remove Sort'.split(' ').forEach(function (name) {
			// 	$scope.sortableConfig['on' + name] = console.log.bind(console, name);
			// });
		}]);
})();

