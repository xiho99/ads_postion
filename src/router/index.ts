import {
	createRouter,
	createWebHashHistory,
} from 'vue-router';


let routes = [
	{
		path: '/',
		component: () => import(`../pages/index.vue`),
		meta: {
			title: 'start page',
			keepAlive: false,
			noAuth: true,
			depth: 1,
		},
	}
];

// 创建路由对象
const router = createRouter({
	history: createWebHashHistory(),
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