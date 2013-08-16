#!/bin/bash

echo "Clean folders"
rm -rf ../script/vendor/*

echo "Install dependencies using bower"
bower install

echo "Moving JS files"
mv ../scripts/vendor/requirejs/require.js ../scripts/vendor/require.js
mv ../scripts/vendor/underscore-amd/underscore-min.js ../scripts/vendor/underscore-min.js
mv ../scripts/vendor/jquery/jquery.min.js ../scripts/vendor/jquery.min.js
mv ../scripts/vendor/jquery-ui/ui/minified/jquery-ui.min.js ../scripts/vendor/jquery-ui.min.js
mv ../scripts/vendor/jquery-ui/ui/minified/jquery.ui.autocomplete.min.js ../scripts/vendor/jquery.ui.autocomplete.min.js
mv ../scripts/vendor/backbone-amd/backbone-min.js ../scripts/vendor/backbone-min.js

echo "Moving CSS files"
mv ../scripts/vendor/bootstrap/docs/assets/css/bootstrap.css ../css/bootstrap.css
mv ../scripts/vendor/bootstrap/docs/assets/css/bootstrap-responsive.css ../css/bootstrap-responsive.css
mv ../scripts/vendor/jquery-ui/themes/smoothness  ../css/themes/smoothness

echo "Moving MAP files"
mv ../scripts/vendor/underscore-amd/underscore-min.map ../scripts/vendor/underscore-min.map
mv ../scripts/vendor/jquery/jquery.min.map ../scripts/vendor/jquery.min.map
mv ../scripts/vendor/backbone-amd/backbone-min.map ../scripts/vendor/backbone-min.map

echo "Removing files"
rm -rf ../scripts/vendor/requirejs
rm -rf ../scripts/vendor/jquery
rm -rf ../scripts/vendor/jquery-ui
rm -rf ../scripts/vendor/bootstrap
rm -rf ../scripts/vendor/underscore-amd
rm -rf ../scripts/vendor/backbone-amd