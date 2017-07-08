
## eggjs-userrole-demo use [egg-userrole plugin](https://github.com/eggjs/egg-userrole)

# Usage

### Run:
```shell
  npm install
  npm run dev
```

  Then open http://localhost:7001 
  
  You will see empty userId and userName
  
  Try click the link `login`, after fake login you can go to `/admin.html` page to check if your role system is working correctly or not.


### Enable Redis Session Storage:
  Uncomment the code in `/config/config.default.js` and `/config/plugin.js`, and change the redis connect config to your own redis server.