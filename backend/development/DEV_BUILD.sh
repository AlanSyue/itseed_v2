cd ..
docker-compose down
export NEST_COMMAND="npm run start"
docker-compose up --build -V -d
