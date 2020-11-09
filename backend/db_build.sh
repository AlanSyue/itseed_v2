mkdir ${HOME}/postgres-data/
docker run -d \
	--name dev-postgres \
	-e POSTGRES_PASSWORD=Pass2020! \
	-v ${HOME}/postgres-data/:/var/lib/postgresql/data \
    -p 5432:5432 \
    postgres

docker pull dpage/pgadmin4
docker run -d \
	--name dev-pgadmin \
    -e 'PGADMIN_DEFAULT_EMAIL=user@domain.local' \
    -e 'PGADMIN_DEFAULT_PASSWORD=SuperSecret' \
    -p 80:80 \
    dpage/pgadmin4
