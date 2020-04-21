echo Getting Expected Output...
cd ./expected-solution
./gradlew clean bootrun &> /dev/null &
sleep 30

if ! lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null; then
    echo ERROR Obtaining expected.json
    echo !!! Pipeline Failure !!!
    echo Rerun the Pipeline 
fi

cd ..
curl http://localhost:8080/crawl?url=$TEST_DOMAIN -o expected.json
kill -9 $(lsof -t -i:8080)

echo expected.json Generated