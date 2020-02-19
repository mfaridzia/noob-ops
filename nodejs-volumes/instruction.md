### To run, you can type this command in the terminal:
```docker run --env DATA_PATH=/data/number.txt --mount type=volume,src=increment-data,target=/data image-name```

### And check the volume
- ```docker volume ls```
- ```docker volume inspect volume-name```
