#!/bin/bash

# PHP Mess Detector

phpmd . .tools/rules/phpcs.xml --exclude vendor,_ide_helper.php,database,.phpstorm.meta.php, node_modules

RESULT=$?
[[ $RESULT -eq 0 ]] && echo "PHP Mess Detector check passed"
exit $RESULT
