# Start projet with MakeFile
`` bash
make init
```

# start project(dev)

`` bash
docker-compose up -d
npm run start:dev
```

# Clean docker
```bash
// stop all containers
docker stop $(docker ps -a -q)
// remove all containers
docker rm $(docker ps -a -q) 
// remove all images
 docker rmi $(docker images -q)   
// remove all volumes
docker volume rm $(docker volume ls -q)                                    
```