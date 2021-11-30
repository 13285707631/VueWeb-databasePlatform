# vueWebPlatform
> 本项目主要是一个基于vue和element ui开发的一个前端框架 vue: 2.9.6 npm 6.14.15 主要可能使用code-mirror  element ui（美团的开发框架）webpack 3.6.0,具体依赖库参见
> ---
> ![image](https://user-images.githubusercontent.com/30305045/139636382-3e564f44-e635-469e-a592-f2ff7fdcd98b.png)
> ---
> 平台截图
> 
> ![image](https://user-images.githubusercontent.com/30305045/139635931-54c88538-8e51-4f46-8468-3bc59aa269f2.png)
> ![image](https://user-images.githubusercontent.com/30305045/139635946-e0c7020b-9019-48fb-93e6-899f7385095a.png)
> ![image](https://user-images.githubusercontent.com/30305045/139635975-6d5bff0a-02c5-469f-81a7-f4a539e2fe6b.png)
> ![image](https://user-images.githubusercontent.com/30305045/139635989-fa368af9-f1d0-4d2d-ad97-933fa195c474.png)
> ![image](https://user-images.githubusercontent.com/30305045/139636009-162d84bd-1b38-42e1-9fd2-3aa7b7b17d8a.png)
> 该框架能帮助快速搭建平台（接口要自己写哈）
> ---
> 最后线上效果展示
> ![image](https://user-images.githubusercontent.com/30305045/143975152-380dd82e-6f8a-4285-b2ff-e0544ba17b2c.png)
> ![image](https://user-images.githubusercontent.com/30305045/143975220-b8cede20-dd65-4a68-8172-2241b52e031c.png)
![image](https://user-images.githubusercontent.com/30305045/143975237-e7da99f5-2248-4df2-b14e-22a677000a63.png)
![image](https://user-images.githubusercontent.com/30305045/143975253-3e5d2f6b-62d8-4e3b-86ad-f863165b9b58.png)
![image](https://user-images.githubusercontent.com/30305045/143975283-841cebcf-e532-4148-855a-64cb99de77ec.png)
![image](https://user-images.githubusercontent.com/30305045/143975359-ed974354-d00d-4454-bdaf-91f6aaf896be.png)
![image](https://user-images.githubusercontent.com/30305045/143975420-fc98c230-e8ca-4816-a8c9-15e6b6c6ce75.png)

> ---
> 整理了一下开发过程中参考的链接：开发过程中遇到问题的可以参考
> * https://www.cnblogs.com/tnnyang/p/14378573.html
> * https://blog.csdn.net/weixin_43583693/article/details/102818573
> * https://www.kancloud.cn/cyyspring/vuejs/990072
> * https://blog.csdn.net/miaomiao006/article/details/117157935
> * https://blog.csdn.net/weixin_43080277/article/details/83860629
> * https://blog.csdn.net/weixin_34168700/article/details/94462672
> * https://blog.csdn.net/weixin_47534571/article/details/110865829
> * https://www.cnblogs.com/binmengxue/p/6831850.html
> * https://segmentfault.com/q/1010000019398104
> ---
> 其中跨域的问题,
> 首先需要明确是开发环境还是生产环境，开发环境据我自己理解 就是本地的开发 端口地址啥的都是localhost 生产环境就是本地Buid之后大包放到服务器上运行,开发环境的跨域问题在config/index.js下的proxy_table下进行代理就行，
> ![image](https://user-images.githubusercontent.com/30305045/143973240-4ebfbd8b-6877-40d4-8b45-3aaea7efc150.png)
生产环境下的跨域问题一般都由后端解决参考jsonp, 需要在生产环境和开发环境切换时尤其时本地在proxy做了代理的时候需要动态的根据程序所处的环境更换接口地址，
![image](https://user-images.githubusercontent.com/30305045/143973446-0fd382c3-15a0-411c-9c64-a596f5abcc29.png)
confg目录下的pro.env.js和dev.env.js分别指向生产环境和开发环境
![image](https://user-images.githubusercontent.com/30305045/143973548-d6b64561-ea1b-40fd-9c8f-0797e1635010.png)
因为开发环境做了本地的代理，所以我只需要在生产环境下设定好我的接口地址
![image](https://user-images.githubusercontent.com/30305045/143973866-75878c66-171b-4a38-8891-23a55da3b77c.png)
在代码里就可以做一个判断，判断当前环境是生产还是开发，process.env.BASE_API_S就是我在生成环境的js下定义的url地址
> vue和element官网
> * https://vuejs.org/v2/guide/
> * https://element.eleme.cn/#/zh-CN/component/installation

