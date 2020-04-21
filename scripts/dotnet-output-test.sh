cd $1

echo Launching Candidate\'s Application...
dotnet restore
dotnet publish -c release -o ./build_output 
dotnet run build_output/Buildit.Webcrawler.dll --urls="http://localhost:8080" &> /dev/null &
sleep 30

bash ../scripts/is-running.sh

echo Getting Candidate\'s Output...
curl http://localhost:8080/crawl?url=$TEST_DOMAIN -o output.json

echo Comparing Output to Expected...
cd ..
rbash ./scripts/compareJSONs.sh expected.json $1/output.json