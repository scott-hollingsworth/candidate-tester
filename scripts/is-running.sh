if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null ; then
    echo "The Candidate's Application is Running on Port 8080"
    echo --- Build Check Passed ---
    SCORE=$(cat score.txt)
    echo $(($SCORE+20)) > ../score.txt
else
    echo "The Candidate's Application is not Running on Port 8080"
    echo !!! Build Check FAILED !!!
    echo The Candidate\'s Score is $(cat score.txt)
    exit 1
fi

return $SCORE