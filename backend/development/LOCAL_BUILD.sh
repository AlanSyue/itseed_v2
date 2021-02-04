cd ..
export NEST_COMMAND="npm run start:dev"
docker-compose down
docker-compose up --build -V
