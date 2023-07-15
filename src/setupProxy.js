const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'http://localhost:8080', // 로컬 백엔드의 주소로 설정
            changeOrigin: true,
        })
    );
};
