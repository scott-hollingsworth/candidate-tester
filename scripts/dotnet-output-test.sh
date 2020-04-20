cd $1
echo Launching Candidate\'s Application...
dotnet restore
dotnet publish -c release -o ./build_output 
dotnet run build_output/Buildit.Webcrawler.dll
#dotnet build_output/Buildit.Webcrawler.dll https://www.jamesqquick.com > output.json

sleep 30
if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null ; then
    echo "The Candidate's Application is Running on Port 8080"
    echo --- Build Check Passed ---
    SCORE=$(($SCORE+20)) 
else
    echo "The Candidate's Application is not Running on Port 8080"
    echo !!! Build Check FAILED !!!
    echo "The Candidate's Score is "+$SCORE
    exit 1
fi

echo Getting Candidate\'s Output...
curl http://localhost:8080/crawl?url=$TEST_DOMAIN -o output.json

echo Comparing Output to Expected...
cd ..
bash ./scripts/compareJSONs.sh expected.json $1/output.json