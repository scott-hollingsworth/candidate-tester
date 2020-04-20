#check if git commit count is greater than 2
#takes branch directory as input
cd $1
output="$(git rev-list --all --count)"

if ! (($output > 2)) 
then
    echo Git commit count is not greater than 2. Count = $output
    echo !!! Commit Check FAILED !!!
else
    echo Git commit count is $output
    SCORE=$(($SCORE+10))
    echo --- Commit Check Passed ---
fi

cd ..