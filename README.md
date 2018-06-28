# PHP7.1  boiler plate
This is 7.1 boiler plate.

## Getting Started
Simply run docker-compose up 


### Prerequisites
This project require docker and docker-compose

```
docker
docker-compose
dinghy-http-proxy
```

### Installing

Download and install [Docker](https://docs.docker.com/docker-for-mac/install/#what-to-know-before-you-install) , [docker-compose](https://docs.docker.com/compose/install/#master-builds)
and [Dinghy HTTP Proxy](https://github.com/codekitchen/dinghy-http-proxy)
Make sure you have install dingy run all .docker host. 

Dinghy creates a preferences file under HOME/.dinghy/preferences.yml, which can be used to override default options.
Modify the option with source .dinghy if you have not done. For [more](https://github.com/codekitchen/dinghy-http-proxy#dinghy-http-proxy)

## Mac Docker
####You'll need the IP of your VM:
 * For docker-machine, run docker-machine ip <machine_name> to get the IP.
 * For Docker for Mac, you can use 127.0.0.1 as the IP, since it forwards docker ports to the host machine.


```
docker run -d --restart=always \
  -v /var/run/docker.sock:/tmp/docker.sock:ro \
  -v ~/.dinghy/certs:/etc/nginx/certs \
  -p 80:80 -p 443:443 -p 19322:19322/udp \
  -e DNS_IP=127.0.0.1 -e CONTAINER_NAME=http-proxy \
  --name http-proxy \
  codekitchen/dinghy-http-proxy
```
###If you want to disable and use custom haproxy
```
docker run -d --restart=always \
  -v /var/run/docker.sock:/tmp/docker.sock:ro \
  -v ~/.dinghy/certs:/etc/nginx/certs \
  -p 80:80 -p 443:443 -p 19322:19322/udp \
  -e DNS_IP=127.0.0.1 -e CONTAINER_NAME=http-proxy \
  --name docker-proxy \
  udaysh/proxy-docker
```

####Configure DNS resolver at /etc/resolver/docker
```
nameserver <vm_ip>
port 19322
```


 

### Give execution rights on connect.sh
```
    chmod +x /project/connect.sh
```


### Bootstraping the env
Feel free to modify [/project/docker/bin/init.sh]  to bootstrap the application.


## Running the Application
```
cd project/
docker-compose up -d
```

#### Connecting to web container
```
./connect.sh

./connect.sh web
```

#### Connecting to database container
```
./connect.sh db
```


### Test
go to http://php7skel.docker/
 
### Modify php setting
modify the value of php at docker/config/php.ini and build the container.

### Building Container
Whenever you change file inside docker/ folder always build the container.
```
docker-compose up --build
```

### Front End (ES6 and SCSS)
#### Install
Make sure you have npm.
To install frontend just run
```
npm i
```
#### ES6
ES6 MAIN : es6/app.js and will build bundle at public/js

#### SCSS
SCSS MAIN: scss/main.scss and will build bundle at public/css

#### Compile
```
npm run build
npm run dev
```





 
 
#Good Luck
