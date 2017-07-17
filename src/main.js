//Vue版本加载与`导入`命令
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//导入路由
import VueRouter from 'vue-router';
import App from './App';

//导入商品
import goods from './components/goods/goods';
//导入评论
import ratings from './components/ratings/ratings';
//导入商家
import seller from './components/seller/seller';

//导入样式
import './common/stylus/index.styl';
import './common/stylus/icon.styl';
//导入加载资源
import VueResource from 'vue-resource';

//注册路由
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '/', name: 'index', component: App, children: [
   { path: '/goods', component: goods },
   { path: '/ratings', component: ratings },
   { path: '/seller', component: seller }
   ]}
];

//路由定义
const router = new VueRouter({
	linkActiveClass: 'active',
	routes: routes
});

//引用到页面
const app = new Vue({
   router,
   render: h => h(App)
}).$mount('#app');

//加载首页跳转路径
router.push('/goods');
export default app;

