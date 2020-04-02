testUrl="https://www.jamesqquick.com/"

cd $1
echo Launching Candidate\'s Application...
dotnet restore
dotnet publish -c release -o ./$DOTNET_DIR/build_output $DOTNET_PROJ 
dotnet build_output/Buildit.Webcrawler.dll https://www.jamesqquick.com > output.json
sleep 30

echo Getting Candidate\'s Output...
curl http://localhost:8080/crawl?url=$testUrl -o output.json

echo Comparing Output to Expected...
cd ..
bash ./scripts/compareJSONs.sh expected.json $1/output.json