cd ..
docker build -t itseed/frontend .
docker run -p 49160:3000 --name itseed-frontend -d itseed/frontend
