import {
	createRouter,
	createWebHistory,
} from 'vue-router';


let routes = [
	{
		path: '/',
		component: () => import(`../pages/index.vue`),
		meta: {
			title: '欢迎访问',
			keepAlive: false,
			noAuth: true,
			depth: 1,
		},
	},
];

// 创建路由对象
const router = createRouter({
	history: createWebHistory(),
	routes
});

// 路由加载前
router.beforeEach(async (to, from, next) => {
	next();
});

// 全局后置钩子
router.afterEach((to, from) => {
	(document as any).title = to.meta.title;
});

export default router;