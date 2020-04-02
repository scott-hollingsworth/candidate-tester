testUrl="https://www.jamesqquick.com/"

cd $1
echo Launching Candidate\'s Application...
./gradlew clean bootrun &> /dev/null &
sleep 15
echo Getting Candidate\'s Output...
curl http://localhost:8080/crawl?url=$testUrl -o output.json
ls
echo Comparing Output to Expected...
cd ..
ls
bash ./scripts/compareJSONs.sh expected.json $1/output.json