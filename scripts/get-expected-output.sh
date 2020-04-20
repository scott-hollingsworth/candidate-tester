testUrl="https://www.jamesqquick.com/"

echo Getting Expected Output...
./expected-solution/gradlew clean bootrun &> /dev/null &
sleep 30

curl http://localhost:8080/crawl?url=$testUrl -o expected.json

echo expected.json Generated