//*************************************** 1: 2种方式 实现效果一样.
setInterval( function () {
	console.log( "do it" );
}, 100 );

/**
 * arguments.callee 在后面es中会废除
 */
(function () {
	console.log( "do it" );
	setTimeout( arguments.callee, 100 );
})();

(function loopsiloopsiloop() {
	console.log( 'do it' );
	setTimeout( loopsiloopsiloop, 100 );
})();


//***************************************2: 字符串 空格转换为数组.
var rnotwhite = (/\S+/g);
var arr = "aa bb cc".match( rnotwhite ); // ["aa", "bb", "cc"];


//***************************************3: 学习jQuery中 实例
function xxx() {
	return xxx.prototype.init();
}
xxx.fn = xxx.prototype = {
	constructor: xxx
};

var init = xxx.fn.init = function () {
	console.log( "..." )
};
init.prototype = xxx.fn;

//*************************************** 4:
try {
	console.log( "do something" );
} catch ( e ) {
	window.location.href =
		"http://stackoverflow.com/search?q=[js] + ";
	e.message;
}

//***************************************5: 可以执行 输出: Hello, Javascript
ﾟωﾟﾉ = /｀ｍ´）ﾉ ~┻━┻ //*´∇｀*/ [ '_' ];
o = (ﾟｰﾟ) = _ = 3;
c = (ﾟΘﾟ) = (ﾟｰﾟ) - (ﾟｰﾟ);
(ﾟДﾟ) = (ﾟΘﾟ) = (o ^ _ ^ o) / (o ^ _ ^ o);
(ﾟДﾟ) = {
	ﾟΘﾟ: '_',
	ﾟωﾟﾉ: ((ﾟωﾟﾉ == 3) + '_') [ ﾟΘﾟ ],
	ﾟｰﾟﾉ: (ﾟωﾟﾉ + '_')[ o ^ _ ^ o - (ﾟΘﾟ) ],
	ﾟДﾟﾉ: ((ﾟｰﾟ == 3) + '_')[ ﾟｰﾟ ]
};
(ﾟДﾟ) [ ﾟΘﾟ ] = ((ﾟωﾟﾉ == 3) + '_')
	[ c ^ _ ^ o ];
(ﾟДﾟ) [ 'c' ] = ((ﾟДﾟ) + '_') [ (ﾟｰﾟ) + (ﾟｰﾟ) - (ﾟΘﾟ) ];
(ﾟДﾟ) [ 'o' ] = ((ﾟДﾟ) + '_') [ ﾟΘﾟ ];
(ﾟoﾟ) = (ﾟДﾟ) [ 'c' ] + (ﾟДﾟ) [ 'o' ] +
	(ﾟωﾟﾉ + '_')[ ﾟΘﾟ ] + ((ﾟωﾟﾉ == 3) + '_') [ ﾟｰﾟ ] + ((ﾟДﾟ) + '_') [ (ﾟｰﾟ) + (ﾟｰﾟ) ] + ((ﾟｰﾟ == 3) + '_') [ ﾟΘﾟ ] + ((ﾟｰﾟ == 3) + '_') [ (ﾟｰﾟ) -
	(ﾟΘﾟ) ] + (ﾟДﾟ) [ 'c' ] + ((ﾟДﾟ) + '_') [ (ﾟｰﾟ) + (ﾟｰﾟ) ] + (ﾟДﾟ) [ 'o' ] + ((ﾟｰﾟ == 3) + '_') [ ﾟΘﾟ ];
(ﾟДﾟ) [ '_' ] = (o ^ _ ^ o) [ ﾟoﾟ ] [ ﾟoﾟ ];
(ﾟεﾟ) =
	((ﾟｰﾟ == 3) + '_') [ ﾟΘﾟ ] + (ﾟДﾟ).ﾟДﾟﾉ + ((ﾟДﾟ) + '_') [ (ﾟｰﾟ) + (ﾟｰﾟ) ] + ((ﾟｰﾟ == 3) + '_') [ o ^ _ ^ o - ﾟΘﾟ ] + ((ﾟｰﾟ == 3) + '_') [ ﾟΘﾟ ] + (ﾟωﾟﾉ + '_')
		[ ﾟΘﾟ ];
(ﾟｰﾟ) += (ﾟΘﾟ);
(ﾟДﾟ)[ ﾟεﾟ ] = '\\';
(ﾟДﾟ).ﾟΘﾟﾉ = (ﾟДﾟ + ﾟｰﾟ)[ o ^ _ ^ o - (ﾟΘﾟ) ];
(oﾟｰﾟo) = (ﾟωﾟﾉ + '_')[ c ^ _ ^ o ];
(ﾟДﾟ) [ ﾟoﾟ ] = '\"';
(ﾟДﾟ)
	[ '_' ]( (ﾟДﾟ) [ '_' ]( ﾟεﾟ + (ﾟДﾟ)[ ﾟoﾟ ] + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + (ﾟｰﾟ) + (ﾟΘﾟ) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + ((ﾟｰﾟ) + (ﾟΘﾟ)) + (ﾟｰﾟ) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) +
	(ﾟｰﾟ) + ((ﾟｰﾟ) + (ﾟΘﾟ)) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - (ﾟΘﾟ)) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ) +
	(ﾟДﾟ)[ ﾟεﾟ ] + ((ﾟｰﾟ) + (ﾟΘﾟ)) + (c ^ _ ^ o) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟｰﾟ) + ((o ^ _ ^ o) - (ﾟΘﾟ)) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + (ﾟΘﾟ) + (c ^ _ ^ o) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) +
	(ﾟｰﾟ) + ((ﾟｰﾟ) + (ﾟΘﾟ)) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + ((ﾟｰﾟ) + (ﾟΘﾟ)) + (ﾟｰﾟ) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + ((ﾟｰﾟ) + (ﾟΘﾟ)) + (ﾟｰﾟ) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) +
	((ﾟｰﾟ) + (ﾟΘﾟ)) + ((ﾟｰﾟ) + (o ^ _ ^ o)) + (ﾟДﾟ)[ ﾟεﾟ ] + ((ﾟｰﾟ) + (ﾟΘﾟ)) + (ﾟｰﾟ) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟｰﾟ) + (c ^ _ ^ o) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + (ﾟΘﾟ) +
	((o ^ _ ^ o) - (ﾟΘﾟ)) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + (ﾟｰﾟ) + (ﾟΘﾟ) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟДﾟ)[ ﾟεﾟ ] +
	(ﾟΘﾟ) + (ﾟｰﾟ) + (ﾟΘﾟ) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + ((o ^ _ ^ o) - (ﾟΘﾟ)) + (o ^ _ ^ o) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + (ﾟｰﾟ) + (o ^ _ ^ o) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) +
	((o ^ _ ^ o) + (o ^ _ ^ o)) + ((o ^ _ ^ o) - (ﾟΘﾟ)) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + ((ﾟｰﾟ) + (ﾟΘﾟ)) + (ﾟΘﾟ) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) +
	(c ^ _ ^ o) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟΘﾟ) + ((o ^ _ ^ o) + (o ^ _ ^ o)) + (ﾟｰﾟ) + (ﾟДﾟ)[ ﾟεﾟ ] + (ﾟｰﾟ) + ((o ^ _ ^ o) - (ﾟΘﾟ)) + (ﾟДﾟ)[ ﾟεﾟ ] + ((ﾟｰﾟ) + (ﾟΘﾟ)) +
	(ﾟΘﾟ) + (ﾟДﾟ)[ ﾟoﾟ ] )( ﾟΘﾟ ) )( '_' );

//***************************************6:  评级 星星
var rate = 1;  //"★☆☆☆☆"
"★★★★★☆☆☆☆☆".slice( 5 - rate, 10 - rate );
rate = 2;      // "★★☆☆☆"
"★★★★★☆☆☆☆☆".slice( 5 - rate, 10 - rate );
rate = 3;      // "★★★☆☆"
"★★★★★☆☆☆☆☆".slice( 5 - rate, 10 - rate );
rate = 4;      // "★★★★☆"
"★★★★★☆☆☆☆☆".slice( 5 - rate, 10 - rate );
rate = 5;      // "★★★★★"
"★★★★★☆☆☆☆☆".slice( 5 - rate, 10 - rate );

//*************************************** 6:Why does ++[[]][+[]]+[+[]] return the string “10”?
/**
 *
 * Specification details for +[]:
 This is quite a maze, but to do +[], first it is being converted to a string because that's what + says:
 11.4.6 Unary + Operator
 The unary + operator converts its operand to Number type.
 The production UnaryExpression : + UnaryExpression is evaluated as follows:
 Let expr be the result of evaluating UnaryExpression.
 Return ToNumber(GetValue(expr)).
 ToNumber() says:
 Object
 Apply the following steps:
 Let primValue be ToPrimitive(input argument, hint String).
 Return ToString(primValue).
 ToPrimitive() says:
 Object
 Return a default value for the Object. The default value of an object is retrieved by calling the [[DefaultValue]] internal method of the object, passing the optional hint PreferredType. The behaviour of the [[DefaultValue]] internal method is defined by this specification for all native ECMAScript objects in 8.12.8.
 [[DefaultValue]] says:
 8.12.8 [[DefaultValue]] (hint)
 When the [[DefaultValue]] internal method of O is called with hint String, the following steps are taken:
 Let toString be the result of calling the [[Get]] internal method of object O with argument "toString".
 If IsCallable(toString) is true then,
 a. Let str be the result of calling the [[Call]] internal method of toString, with O as the this value and an empty argument list.
 b. If str is a primitive value, return str.
 The .toString of an array says:
 15.4.4.2 Array.prototype.toString ( )
 When the toString method is called, the following steps are taken:
 Let array be the result of calling ToObject on the this value.
 Let func be the result of calling the [[Get]] internal method of array with argument "join".
 If IsCallable(func) is false, then let func be the standard built-in method Object.prototype.toString (15.2.4.2).
 Return the result of calling the [[Call]] internal method of func providing array as the this value and an empty arguments list.
 So +[] comes down to +"", because [].join() === "".
 Again, the + is defined as:
 11.4.6 Unary + Operator
 The unary + operator converts its operand to Number type.
 The production UnaryExpression : + UnaryExpression is evaluated as follows:
 Let expr be the result of evaluating UnaryExpression.
 Return ToNumber(GetValue(expr)).
 ToNumber is defined for "" as:
 The MV of StringNumericLiteral ::: [empty] is 0.
 So +"" === 0, and thus +[] === 0.
 */
/**
 *
 */
++[ [] ][ +[] ] + [ +[] ] === "10" // true
+ [] === 0 // true
++[ [] ][ +[] ] + [ 0 ]
++[ [] ][ 0 ] + [ 0 ];


[].concat[ 1, 2, 3 ]; //考察2个知识点 和[].concat([1,2,3]) 是不一样的，少了个（）

[].concat //其实是 Array.prototype.concat 这个数组的方法

	[ 1, 2, 3 ] // 是执行的了  [].concat的下标数组的取值
				// 其次是逗号操作符 （1，2，3）  返回最右边的值。

eg:   var a = [ 1, 2, 3 ];
a[ 0 ] = 1;
a[ 1 ] = 2;
a[ 2 ] = 3;
//a[1,2] 与 a[2] 是相等的

// [].concat[1,2,3]  等价于 [].concat[3]    function 的下标为3 的值 肯定为undefined


// + converts something into a number
// + 操作符 转换成数字类型. [] 在类型转化 [].toString() === "" 为true 转换数字为0

var a = [] // Array
	/**
	 * Array[1]
	 *   0:Array[0]
	 */
	[ [] ][ 0 ] // 获取[[]] 的第一元素,故返回一个内部数组 [] .  但是 [[]][0] === [] --> false
//[] == ""
++[ [] ][ 0 ] == [] + 1 // "" + 1 = "1"


//*************************************** 7 检测质数

function isPrime( n ) {
	return !(/^.?$|^(..+?)\1+$/).test( '1'.repeat( n ) )
}

//*************************************** 8: 将多维数组 破开成为一维数组
var foo0 = [ 1, [ 2, 3 ], [ 4, 5, [ 6, 7, [ 8 ] ] ], [ 9 ], 10 ];

var foo1 = foo0.join( ',' ).split( ',' );

console.log( foo1 ); //["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

//*************************************** 9: 统计字符串相同数字出现的次数
var arr = 'abcdaabc';

var info = arr
	.split( '' )
	.reduce( ( p, k ) => (p[ k ]++ || (p[ k ] = 1), p), {} );

console.log( info ); //{ a: 3, b: 2, c: 2, d: 1 }

//*************************************** 10: 随机颜色值.
Math.floor( Math.random() * (2 << 23) ).toString( 16 );

//*************************************** 11: 驼峰变小写通过_ 链接

"comeHereToKnow".match( /^[a-z][a-z0-9]+|[A-Z][a-z0-9]*/g ).join( '_' ).toLowerCase();  //  come_here_to_know

//*************************************** 12: 复制 附带 信息
/**
 * 前端写代码会检测一些变量判断浏览器是否有响应特性,然后做降级处理.尝试通过剪贴板赋值功能附带版权信息时,
 * 知乎的js会判断getSelection.所以我们可以在知乎的js脚本执行之前运行这行代码,
 * 假装自己是垃圾浏览器,从而不会被加入版权信息sa.
 */

var concatPre = Array.prototype.concat;
Array.prototype.concat = function ( arg1 ) {
	function checkExtra( arr ) {
		return arr && arr.slice && arr[ 3 ] === "著作权归作者所有，转载请联系作者获得授权。";
	}

	if ( checkExtra( this ) || checkExtra( arg1 ) ) {
		return [];
	} else {
		return concatPre.apply( this, arguments );
	}
};

var tipStyle = "color: white;font-size: 22px;display: inline-block;position: absolute;top: 0;bottom: 0;line-height: 22px;margin: auto;height: 22px;";
$( ".zu-top" ).append( $( "<span style='" + tipStyle + "left: 10px;" + "'>" + decodeURI( "%E6%B0%91%E4%B8%BB" ) + "</span>" ) ).append( $( "<span style='" + tipStyle + "right: 10px;" + "'>" + decodeURI( "%E8%87%AA%E7%94%B1" ) + "</span>" ) );

//*************************************** 13: obj.show().id

obj1 = {
	show: function () {
		return {
			id: "123"
		}
	}
};

console.log( obj1.show().id );
//*************************************** 14:
myApp.factory( 'Configurations∂', function ( Restangular, MotorRestangular, $q ) {
	var getConfigurations = function () {
		//Just return the promise we already have!
		return MotorRestangular.all( 'Motors' ).getList().then( function ( Motors ) {
			//Group by Cofig
			var g = _.groupBy( Motors, 'configuration' );
			//Return the mapped array as the value of this promise
			return _.map( g, function ( m ) {
				return {
					id: m[ 0 ].configuration,
					configuration: m[ 0 ].configuration,
					sizes: _.map( m, function ( a ) {
						return a.sizeMm
					} )
				}
			} );
		} );
	};

	return {
		config: getConfigurations()
	}

} );
//***************************************将99999999999 转换 999,999,999
方法一:
	function commafy( num ) {
		return num && num
			.toString()
			.replace( /(\d{1,3})(?=(\d{3})+)/g, function ( $s1, $s2 ) {
				"use strict";
				return $s2 + ','
			} )
	}

方法二:
	'9999999999'.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');

//*************************************** URL 的参数解析

方法一:
	function methodV1( url, key ) {
		"use strict";
		var param_expr = new RegExp( '(?:^|&|\\?)' + key + '=([^&]*)(?:&|$|#)' );
		var matches = param_expr.exec( url );
		return matches ? decodeURIComponent( matches[ 1 ] ) : '';

	}

方法二:
	function methodV2() {
		"use strict";
		var obj = {};
		var url = window.location.href;
		url = url.substr( url.indexOf( '?' ) + 1 );

		url.replace( /([^&=]+)=([^&=]*)/gi, function ( rs, $1, $2 ) {
			obj[ $1 ] = $2;
		} );

		return obj
	}
	methodV2();

//*************************************** 统计字符串中字母个数或统计最多字母数。
var str = "aaaabbbccccddfgh";

var calObj = str.split("").reduce(( prev, next) => {
	"use strict";

	prev[next]++ || (prev[next] = 1);

	if( prev.max[ 'num' ] < prev[next] ){
		if( prev.max[ 'key' ] != next ) prev.max[ 'key' ] = next;
		prev.max[ 'num' ] =  prev[next];
	}
	return prev;
}, { max: { key: "", num: 0 } } );



"absajeqihweajknsekjhase".split("").reduce( (p, n) => ( p[n]++ || (p[n] = 1), p), {})

//***************************************

function deepClone( obj ) {

	var _toString = Object.prototype.toString;

	if( !obj && typeof obj !== 'object') {
		return obj;
	}


}


//***************************************验证邮箱


"ahhsaj.asdas@dasd.com.cn".match(/(^\w+)(\.(\w+))*@(\w+)(\.(\w+))/g)



//*************************************** iframe

//1: 会阻塞主页面的Onload事件
//2: iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
//3: 搜索引擎无法解读iframe页面，不利于 SEO

//解决 动态给iframe添加src属性


//*************************************** 手动大写转小写，小写转大写
var manualLowercase = function(s) {
  /* jshint bitwise: false */
  return isString(s)
   ? s.replace(/[A-Z]/g, function(ch) {return String.fromCharCode(ch.charCodeAt(0) | 32);})
   : s;
};
var manualUppercase = function(s) {
  /* jshint bitwise: false */
  return isString(s)
   ? s.replace(/[a-z]/g, function(ch) {return String.fromCharCode(ch.charCodeAt(0) & ~32);})
   : s;
};

//***************************************


//***************************************


//***************************************


//***************************************


//***************************************



























































