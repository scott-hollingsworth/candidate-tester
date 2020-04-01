set -eu
set -o pipefail

#check if get commit count is greater than 2
output = git rev-list --all --count
if ! (($output > 2)) then
    echo "Git commit count is not greater than 2. Count = $output"
    EXIT 1
fi