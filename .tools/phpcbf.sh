#!/bin/bash

# PHP CodeSniffer Beautifier

./vendor/bin/phpcbf --config-set colors 1 >> /dev/null
./vendor/bin/phpcbf --config-set show_progress 1 >> /dev/null
./vendor/bin/phpcbf --config-set show_warnings 1 >> /dev/null
./vendor/bin/phpcbf app/* -n --runtime-set ignore_warnings_on_exit true --standard=./.tools/rules/phpcs.xml
