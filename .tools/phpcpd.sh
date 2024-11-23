#!/bin/bash

# PHP Copy Paste Detector

./phpcpd.phar app

RESULT=$?
[[ $RESULT -eq 0 ]] && echo "PHP Copy Paste Detector check passed"
exit $RESULT
