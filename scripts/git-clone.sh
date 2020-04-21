#Takes branch directory as argument
echo Cloning Candidate\'s Repo....
gitURL="$(cat gitURL.txt | cut -d'=' -f 2)"
if [ -z "$gitURL" ]; then
    echo gitURL not \set - insert the url into URL.txt to begin
    exit 1
fi
echo Git URL = $gitURL
git clone $gitURL && gitDir="$(basename $gitURL .git)"

#Perform commit and readme checks
echo Checking Candidates README....
bash ./scripts/compare-README.sh $1 $gitDir
echo Checking Candidates Commits....
bash ./scripts/check-git-commits.sh $gitDir

#overwrite starter files and copy into testing folder
rm -rf $1
cp -a $gitDir/. $1
rm -rf $gitDir

echo Candidate\'s Repo Successfully Cloned