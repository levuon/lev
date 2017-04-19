#浏览器渲染机制

  - 1 DOM (Document Object Model)  浏览器将HTML解析成树形的数据结构，简称DOM。
  - 2 CSSOM (CSS Object Model) 浏览器将CSS代码解析成树形的数据结构。

  - 3 DOM 和 CSSOM 都是以 Bytes -> characters -> tokens -> nodes(节点) -> object model 的方式
  最终形成数据（如下图）

  ![avatar](./img/browser-render-om.png)

  DOM 树的构建过程是一个深度遍历过程：当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点


  - 4 render tree  DOM 和 CSSOM 合并后生成 Render Tree，如下图：

  ![avatar](./img/browser-render-rt.png)

  Render Tree 和DOM一样，以多叉树的形式保存了每个节点的css属性、节点本身属性、以及节点的孩子节点

  >注意：display:none 的节点不会被加入 Render Tree，而 visibility: hidden 则会，所以，如果某个节点最开始是不显示的，设为 display:none 是更优的

##浏览器的渲染过程

  1. Create/Update DOM And request css/image/js：浏览器请求到HTML代码后，在生成DOM的最开始阶段（应该是 Bytes → characters 后），并行发起css、图片、js的请求，无论他们是否在HEAD里。
    >注意：发起 js 文件的下载 request 并不需要 DOM 处理到那个 script 节点，比如：简单的正则匹配就能做到这一点，虽然实际上并不一定是通过正则：）。这是很多人在理解渲染机制的时候存在的误区。
  2. Create/Update Render CSSOM：CSS文件下载完成，开始构建CSSOM
  3. Create/Update Render Tree：所有CSS文件下载完成，CSSOM构建结束后，和 DOM 一起生成 Render Tree。
  4. Layout：有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系。下一步操作称之为Layout，顾名思义就是计算出每个节点在屏幕中的位置。
  5. Painting：Layout后，浏览器已经知道了哪些节点要显示（which nodes are visible）、每个节点的CSS属性是什么（their computed styles）、每个节点在屏幕中的位置是哪里（geometry）。就进入了最后一步：Painting，按照算出来的规则，通过显卡，把内容画到屏幕上。

  >以上五个步骤前3个步骤之所有使用 “Create/Update” 是因为DOM、CSSOM、Render Tree都可能在第一次Painting后又被更新多次，比如JS修改了DOM或者CSS属性。

  >Layout 和 Painting 也会被重复执行，除了DOM、CSSOM更新的原因外，图片下载完成后也需要调用Layout 和 Painting来更新网页。










  - 首屏时间和DomContentLoad事件没有必然的先后关系
  - 所有CSS尽早加载是减少首屏时间的最关键
  - js的下载和执行会阻塞Dom树的构建（严谨地说是中断了Dom树的更新），所以script标签放在首屏范围内的HTML代码段里会截断首屏的内容。
  - script标签放在body底部，做与不做async或者defer处理，都不会影响首屏时间，但影响DomContentLoad和load的时间，进而影响依赖他们的代码的执行的开始时间。




### script标签的位置会影响首屏时间么？

```
  答案是：不影响（如果这里里的首屏指的是页面从白板变成网页画面——也就是第一次Painting），但有可能截断首屏的内容，使其只显示上面一部分。

  为什么说是“有可能”呢？，如果该js下载地比css还快，或者script标签不在第一屏的html里，实际上是不影响的。明白这一影响边界非常重要，这样我们在考察页面性能瓶颈的时候就有的放矢了。举个例子：在网页的第二屏有一个通用模块，实际上我们是可以把它的js逻辑独立成一个文件，将模块的html和js标签放在一起做成独立的模板引进来的（
```



### 四、总结、再进一步

```
    所以，总算弄清楚这个众所周知的常识了。我们来总结一下：

    如果script标签的位置不在首屏范围内，不影响首屏时间
    所有的script标签应该放在body底部是很有道理的
    但从性能最优的角度考虑，即使在body底部的script标签也会拖慢首屏出来的速度，因为浏览器在最一开始就会请求它对应的js文件，而这，占用了有限的TCP链接数、带宽甚至运行它所需要的CPU。这也是为什么script标签会有async或defer属性的原因之一。
    可是，在复杂的实际应用场景中，要贯彻这几条结论可能会遇到问题，比如：

    你的页面是分模块来写的，每一个模块都有自己的html、js甚至css，当把这些模块凑到一个页面中的时候就会出现js自然而然地出现在HTML中间部分。你很难把script标签都放到底部
    即使你把script标签都放到底部，但script标签的存在终究是拖慢了首屏时间、DomContendLoad和loaded的时间。如果只有一个script标签，我们可以加一个async，但多个async的script标签的结果会是js文件被乱序执行的，这显然不是我们想要的。
    Tiny-Loader —— A small loader that load CSS/JS in best way for page performance 简单好用。
```