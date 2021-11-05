const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/getstringproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/getarrayproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/getstackqueueproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/getgraphproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/getdpproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/getgreedyproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/getarrayproblems/{problemid}', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/verifyuser', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/adduser', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );


  app.use(
    createProxyMiddleware('/loginuser', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
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
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/resetpass', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/addstringproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/addarrayproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/addstackqueueproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/addgraphproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  
  app.use(
    createProxyMiddleware('/adddpproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/addgreedyproblems', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );

  app.use(
    createProxyMiddleware('/testcasecheck', {
      target: 'https://prepavenger-backend.herokuapp.com', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  

}

