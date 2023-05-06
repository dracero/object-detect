export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","manifests/app.webmanifest","pages/offline.html","service-worker.js"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json",".html":"text/html"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.072d9bd2.js","imports":["_app/immutable/entry/start.072d9bd2.js","_app/immutable/chunks/index.33fbba09.js","_app/immutable/chunks/singletons.99b4b858.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.704c64b9.js","imports":["_app/immutable/entry/app.704c64b9.js","_app/immutable/chunks/index.33fbba09.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
