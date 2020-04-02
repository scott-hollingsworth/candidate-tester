#takes in branch folder and git folder as inputs
originalREADME="$1/README.md"
candidateREADME="$2/README.md"
#should pull original readme from starter repo in the future in case of changes
if cmp "$originalREADME" "$candidateREADME"; then
    echo !!! README Check Failed - No Change Detected !!!
else
    echo --- README Check Passed ---
fi