---
title: Mauris vel metus id justo
description: Suspendisse eget diam convallis, imperdiet ipsum id, tempor ligula. Suspendisse mollis mollis velit eget scelerisque.
date: 2020-10-10
tags:
  - test
---

Ut ut justo arcu. Praesent sed neque efficitur, venenatis diam mollis, lobortis erat. Praesent eget imperdiet odio, tincidunt eleifend mauris. Sed luctus lacinia auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ultrices ex eget leo tincidunt, nec venenatis augue pellentesque. Praesent commodo velit nec scelerisque molestie.

Donec porta ipsum mi. Aenean faucibus felis quis risus mattis, vel interdum ex finibus. Praesent porta laoreet tortor non faucibus. Morbi varius sapien erat, ac dictum leo consectetur at. Donec at felis diam. Integer erat leo, semper in dapibus et, facilisis fringilla mi.

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```



```vue{1,3-5}
<template>
  <div class="wrapper">
    <nuxt-link class="logo" to="/">Nuxt blog starter</nuxt-link>
    <nuxt />
  </div>
</template>
```