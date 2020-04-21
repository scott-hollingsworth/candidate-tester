#takes in branch folder and git folder as inputs
originalREADME="$1/README.md"
candidateREADME="$2/README.md"
#should pull original readme from starter repo in the future in case of changes

#Check if README exists
if [ ! -f "$candidateREADME" ]; then
    echo !!! README Check Failed - README DOES NOT EXISTS !!!
    echo Ensure it is \in the right folder    
    exit 1
fi
#Compare README
if cmp "$originalREADME" "$candidateREADME"; then
    echo !!! README Check Failed - No Change Detected !!!
    echo "The Candidate's Score is "+$SCORE
    exit 1
else
    echo --- README Check Passed ---
fi