cd ../EnergyHack
docker build -t thevivekdwivedi/backend-energy-hack .
heroku container:login
heroku container:push web -a photon-energy-hack
heroku container:release web -a photon-energy-hack

