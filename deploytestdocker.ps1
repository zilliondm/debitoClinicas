docker build -t debitoclinicas-fe .
docker tag debitoclinicas-fe 192.168.5.35/debitoclinicas-fe:latest
docker push 192.168.5.35/debitoclinicas-fe:latest
Invoke-WebRequest -Uri http://192.168.5.35:9000/api/webhooks/63dc292b-51e8-47ac-a465-34a6ee020474 -Method POST