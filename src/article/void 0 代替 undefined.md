


## void 0 和 undefined

在看一些源码 jQuery, underscore 等 它们都会用 void 0 代替 undefined


## undefined 定义

  在JavaScript中,undefined这个词有多重含义.首字母大写的Undefined表示的是一种数据类型,小写的undefined表示的是属于这种数据类型的唯一的一个值

  > MDN:
  The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types(`JavaScript的原始类型`).


  > Description:
   undefined is a `property of the global object`, i.e. it is a variable in global scope. `The initial value of undefined` is the primitive value undefined.


undefined 它是全局对象的一个属性，初始化值是原始类型的值( 即 undefined )
eg:

```
    var undefined = 123;

   // undefined -- chrome
   // 10 -- IE 8
   alert(undefined);
```

 类似Object.definedProperty(obj, {}); 在ES5中, non-writable 不可写, non-configurable 不可配置。

 在ES3中(Firefox4之前),window.undefined就是一个普通的属性,你完全可以把它的值改变成为任意的真值,
 但在ES5中((Firefox4之后),window.undefined成了一个不可写,不可配置的数据属性,它的值永远是undefined.


 >In modern browsers (JavaScript 1.8.5 / Firefox 4+), undefined is a non-configurable,
  non-writable property per the ECMAScript 5 specification.
  Even when this is not the case, avoid overriding it.


```js
  var undefined = 1;
  console.log(undefined) // undefined --chrome

```

但是在局部作用域里还是能够被重写
eg:

```js
    ~function() {
      var undefined = 1;
      console.log(undefined);  // 1 -- chrome
    }();

    ~function() {
      //没有使用 var , let, const 定义的undefined 就是全局的。
      undefined = 1;
      console.log(undefined); // undefined -- chrome
    }();

    //块作用域
    {
       let undefined = 1;
       console.log(undefined); // 1 -- chrome
    }
```

而一些源码里, 里面的方法，变量，都是在各自的命名空间里 (即局部作用域里) 若盲目的使用undefined导致不可预知的后果。

故使用void 0; 那void 又是什么？

## void ?

>MDN: The void operator evaluates `the given expression` and then returns undefined.

void 操作符 对 "所给的表达式" 进行求值, 然后返回 undefined.

void 后面跟任何表达式(定义的或者string)，返回都是undefined. void 运算符通常只用于获取 undefined 的原始值


```
 void 1, void '1', void false, void {}
```


## void 0 常用方法

 - void 0 用来获取 undefined 的原始值( undefined );
 - `<a href="javascript:void(0);"></a>`