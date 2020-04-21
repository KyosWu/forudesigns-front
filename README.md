## 本地部署安装
部署django服务，地址:github.com/KyosWu/forudesigns-server
```
npm install
npm run dev
```
## 线上部署
服务器需要部署node环境，请部署django服务
###上传服务器
npm run build
以下文件上传到服务器项目目录
```
.nuxt
nuxt.config.js
package.json
```
npm run install
### 配置nginx代理
nuxt.config.js
```
 server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },
```
nginx.conf
```
upstream nuxt {
    #nuxt项目 监听端口与项目端口一致
    server 127.0.0.1:3000;
    keepalive 64;
}

server {
    listen 3000;
    server_name localhost;

    #charset koi8-r;
    access_log  /var/log/nginx/foru.log  main;

    location / {
		  proxy_pass http://nuxt;
    }
```
### PM2启动
npm install pm2 -g
pm2 start npm --name "forudesigns" -- run start


##运行成功页面效果

![image text](https://github.com/KyosWu/forudesigns-front/blob/master/static/images/1.PNG)
![](https://github.com/KyosWu/forudesigns-front/blob/master/static/images/2.PNG)
![](https://github.com/KyosWu/forudesigns-front/blob/master/static/images/3.PNG)
![](https://github.com/KyosWu/forudesigns-front/blob/master/static/images/4.PNG)
![](https://github.com/KyosWu/forudesigns-front/blob/master/static/images/5.PNG)
