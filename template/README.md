# SPA-VUX

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## npm

### axios

```js
import api from '../comm/js/api';

// How use
api.get('/url', params).then((res) => {
	/*
	res = {
		code: 0,
		data: {},
		message: ''
	}
	*/
})

api.post
api.put
api.del // (or api.delete)

api.gourl('/url', params) // window.location.href
```

### eslint-loader

- rules配置文件：build/webpack.base.conf.js
- [Docs: Eslint rules](https://eslint.org/docs/2.0.0/rules/)