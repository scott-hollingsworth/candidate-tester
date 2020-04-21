set -eu
set -o pipefail

#sort json entries and compare
output=$(jq --argfile expected $1 --argfile actual $2 -n 'def post_recurse(f): def r: (f | select(. != null) | r), .; r; def post_recurse: post_recurse(.[]?); ($expected | (post_recurse | arrays) |= sort) as $expected | ($actual | (post_recurse | arrays) |= sort) as $actual | $expected == $actual')

if ! ($output); then
    echo Expected and Actual output \\do not match
    echo !!! Output Check FAILED !!!
    echo "The Candidate's Score is "+$SCORE
    exit 1
fi
SCORE=$(($SCORE+20))
echo --- Output Check Passed ---