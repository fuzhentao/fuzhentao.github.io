---
layout: blogs_item
title: "HAOSCHOOLS"
author: 小傅
categories: 自言自语
day: "18"
month: OCT
year: 2018
---



HAOSCHOOLS是一个查询美国高中信息的一个社交类网站，类似一个小型的weibo<br>
学校信息展示，以及学校的评论，周边地方数据（人口，经济，安全指数）<br>
用户可以关注学校新鲜事，当学校新的相关文章会定向推送给所有订阅用户的feed<br>
除了普通用户，我们还有中介专属页面，中介可以在上面宣传自己的信息，受理订单帮助选校整套系统<br>
普通用户的社交功能，私信，feeds<br>
另外我们还整理了很多数据来之不同地方，帮助我们做学校排名对比<br>

技术重点：<br>
PouchDB 实现了1对1或者群聊的聊天记录同步，跨平台（APP/WECHAT/WEB）
redis 实现的类似Weibo feeds订阅信息的存储
rabbitMQ 来实现各类消息通知持久化以及一些内部信息管理操作的触发
<br>
docker-compose 自动部署<br>
ElasticSearch 做了全文检索<br>
<!--more-->
APP/微信公众号/PC网页 多平台<br>
利用爬虫获得一些当地重要信息（位置，收入，住家周围配套设施）<br>
Prerender做google、baidu的网页缓存，seo<br>
消息中间件（多平台多设备，消息的持久化，通知推送提醒，注册管理设备）<br>

<br>
还做了一个比较有意思的东西，因为有些中介甚至连英文都不会<br>
我们做了一个帮助他们申请学校的小系统<br>
学校有申请邮箱，当他们提出申请的时候我们会通过邮件中间站生产邮件模板申请<br>
当学校有回复的时候，通过我们的规则会对邮件进行拦截，通知工作人员翻译，<br>
最后结果会反馈给中介，中介看起来实在我们系统操作申请，但是通过我们的后台邮件中转自动的与学校发送回复邮件<br>
<br>


常规技术：<br>
Meteor/Angular/Ionic/wechat/mobiscroll/mongodb ....



