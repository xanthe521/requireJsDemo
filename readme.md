# requireJsDemo

这是我自己做的一个requirejs的demo,因为在项目中用到了这种,不过后台是用的  
springMVC.是我第一次接触这种模块化的js,觉得很好.工作项目中时领导搭建的,  
所以这里我自己试着搭建了一个.

### 遇到的问题  

1.  路径问题  
  
模块的路径对于我这种刚上手的人来说确实是比较不好理解的,其实在requireJs中  
BATH_URL是比较重要的参数,他的值有两个地方可以设定  
*  require.config({baseUrl:''})
*  引入 requireJs的script标签的页面的地址作为baseUrl,demo里面就是使用  
这种配置

2.  path问题

在require.config({})可以配置一些path,这些path表示的含义是在require模块  
的时候路径里面用到的路径会被替换.  
例如在path里面配置了一个 'path1':'dfd/dfd/dfd',当引用require('path1/xx')  
的时候就还会去 bashUrl+'dfd/dfd+/dfd/'下找xx.js  

3. 非模块化的js

有些不是AMD规范的js,但是确实需要使用的话就要用到shim参数了.  
如果打开一个js文件,发现里面是形如(function(){})()的话,就可以使用shim参数来定义  
成requireJs的包,具体可以看里面的bmob.js的使用