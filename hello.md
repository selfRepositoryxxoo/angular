- 在每个
到哪一页  #32就可以到；
共同协作  重名会被干掉  不重名的不会被干掉 会被保留；
通过ng-app 先查找 不管放在那；run方法也是 只要angular启动就会先运行这个；
 
## 我们要启动多个模块；
不写 ng-app 同时启动两个模块  同名的也不会干掉；
两个模块毫无关系；  两个根作用域 $rootScope;
控制器可以调用  但是模块无法调用；  
以数组的形式模块的名字；
angular 适合单页开发   ng-app制定一个点作为入口点；
假如 写了ng-app='a1' 只会启动一个模块 ，即使写了模块也不会启动；
一般都是一个模块  多个控制器；
动画的时候可以用多个模块 可以依赖多个  以数组的形式
## 指令  最重要的  
我们的指令是不依赖于控制器  通过模块申明指令； 模板替换指令；就可以显示出来
之前都是指令  现在到页面中找到这个指令用模板替换；
app.directive('hello',function(){
return  {

}
})