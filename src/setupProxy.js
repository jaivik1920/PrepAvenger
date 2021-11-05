const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/getstringproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/getarrayproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/getstackqueueproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/getgraphproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/getdpproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/getgreedyproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/getarrayproblems/{problemid}', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/verifyuser', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/adduser', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );


  app.use(
    createProxyMiddleware('/loginuser', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );


  app.use(
    createProxyMiddleware('/enforceCode', {
      target: 'https://codexweb.netlify.app/.netlify/functions', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );


  app.use(
    createProxyMiddleware('/sendotp', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/resetpass', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/addstringproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/addarrayproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/addstackqueueproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/addgraphproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  
  app.use(
    createProxyMiddleware('/adddpproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/addgreedyproblems', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/testcasecheck', {
      target: 'http://localhost:8585', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  

}

