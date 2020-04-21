cd $1

echo Running Candidate\'s Tests...
./gradlew test

echo Launching Candidate\'s Application...
./gradlew clean bootrun &> /dev/null &
sleep 30

bash ../scripts/is-running.sh

echo Getting Candidate\'s Output...
curl http://localhost:8080/crawl?url=$TEST_DOMAIN -o output.json

echo Comparing Output to Expected...
cd ..

bash ./scripts/compareJSONs.sh expected.json $1/output.json