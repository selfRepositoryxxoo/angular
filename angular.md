##  directive  <my-directive>
```
//控制器 不写就不要写ng-controller
    var app = angular.module('appModule', []);
     app.directive('hello', function () {
        return {
            restrict: 'EA',//制定范围
            transclude: true,//将指令的内部代码保存下来，放到ng-trasnclude
            scope:true,//scope:{}// 指令重复使用的时候，产生每个作用域，各自的作用域
            templateUrl: 'tmpl.html',
            link: function (scope, element, attrs) {
                scope.title=attrs['title']//如果直接在作用域就保留一个 给每个指令设置独立的作用域
                console.log(attrs['title'])
            }
        }
    })
```
### 模板
```
<div class="panel panel-default">
    <div class="panel-heading">{{title}}</div>
    <div class="panel-body" ng-transclude>
        Panel content
    </div>
</div>
```
## angular 继承地图；
## 
```
server :直接给实例的添加方法； constant 不是服务；直接给对象；也是配置的只是通过配置增加了一些属性；
 value是不可配置的  
```
## 路由传参
```
 controller: function ($scope,$state) {//$state跳转页面等同于$location
                $scope.go = function () {
                    //路由传递参数
                    $state.go('home.play',{name:'zpfx'})
                }
            }
```