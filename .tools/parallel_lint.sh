#!/bin/bash

# PHP Lint

./vendor/bin/parallel-lint -j 4 --exclude .git --exclude vendor --colors app
