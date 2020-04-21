set -eu
set -o pipefail

#sort json entries and compare
output=$(jq --argfile expected $1 --argfile actual $2 -n 'def post_recurse(f): def r: (f | select(. != null) | r), .; r; def post_recurse: post_recurse(.[]?); ($expected | (post_recurse | arrays) |= sort) as $expected | ($actual | (post_recurse | arrays) |= sort) as $actual | $expected == $actual')

if ! ($output); then
    echo Expected and Actual output \\do not match
    echo !!! Output Check FAILED !!!
else
    echo paste score.txt | awk '{$0=$1+20}1' > score.txt
    echo --- Output Check Passed ---
fi

