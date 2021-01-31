cd ..
docker-compose down
export ENVIRONMENT=development
docker-compose up --build -V -d
