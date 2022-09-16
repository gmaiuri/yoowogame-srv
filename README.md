# YoowoGame Server

Description to be defined.

# Installation guide
Install node.js and npm :
```bash
sudo apt update && apt upgrade –y
sudo apt install nodejs npm -y
```

Clone the repo :
```bash
cd /opt/
git clone https://github.com/gmaiuri/yoowogame-srv
```

Install dependencies :
```bash
cd /opt/yoowogame-srv/src/
npm install
```

Run the server :
```bash
cd /opt/yoowogame-srv/src/
node main.js
```

You will get a result like :
```console
YoowoGame Server
Version 1.2.0-alpha
Running on port 8000
```

# Test server instance

Use `curl` and open this URI :
`http://SERVER_IP:8000/status`

You will get a result like :
```console
gmaiuri@linux:~/$ curl localhost:8000/status
{
   "code": 0,
   "msg": "READY"
} 
```
