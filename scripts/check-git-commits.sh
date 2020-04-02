#check if git commit count is greater than 2
#takes branch directory as input
cd $1
output="$(git rev-list --all --count)"
if ! (($output > 2)) 
then
    echo Git commit count is not greater than 2. Count = $output
    echo !!! Commit Check FAILED !!!
    EXIT 1
fi
echo Git commit count is $output
echo --- Commit Check Passed ---
cd ..