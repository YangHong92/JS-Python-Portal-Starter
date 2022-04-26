# Serve Model from Bash Script
```
> chmod +x bin/start_server
> bin/start_server
```

# Deloy Model using Docker

1. Build docker image
```
> docker build -t my_image .
```

2. Start docker container
```
> docker run -d -p 8000:8000 --name python_model my_image
```

# Test Model Online Inference
Either run below in terminal (replace 'hello' with any text you want to test) or use Postman
```
> curl -H "Content-Type: application/json" -d '{"text":"hello"}' -X POST http://127.0.0.1:8000/foo
```