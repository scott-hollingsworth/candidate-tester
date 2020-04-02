testUrl="https://www.jamesqquick.com/"

cd $1
echo Building Candidate\'s Application...
dotnet restore
dotnet publish -c release -o ./$DOTNET_DIR/build_output $DOTNET_PROJ 
dotnet build_output/Buildit.Webcrawler.dll https://www.jamesqquick.com > output.json

echo Comparing Output to Expected...
cd ..
bash ./scripts/compareJSONs.sh expected.json $1/output.json