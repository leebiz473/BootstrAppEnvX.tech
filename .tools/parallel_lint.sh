#!/bin/bash

# PHP Lint

./vendor/bin/parallel-lint app src -j 4 --colors --blame --exclude .git,config,database,public,vendor,bootstrap,node_modules,storage,resources

exit_code=$?

# Check exit code
if [ $exit_code -eq 0 ]; then
    echo "Parallel Lint passed with no issues."
elif [ $exit_code -eq 1 ]; then
    echo "Parallel Lint found warnings or minor issues."
elif [ $exit_code -eq 2 ]; then
    echo "Parallel Lint found errors."
else
    echo "An unexpected error occurred with exit code $exit_code."
fi

# Exit with the Parallel Lint exit code to allow CI systems to catch it
exit $exit_code
