## How to run:

### Create Network
``` docker network create --driver=bridge network-name ```

### Run Mongodb server container:
``` docker run -d --network=network-name -p 27017:27017 --name=dbapp --rm mongo:3 ```

### Build Image
``` docker build -t image-name . ```

### Run Container
``` docker run -p 3000:3000 --network=network-name --env MONGO_CONNECTION_STRING=mongodb://dbapp:27017 image-name ```