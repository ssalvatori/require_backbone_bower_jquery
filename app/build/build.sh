r.js -o build/app.build.js
cd ../dist

echo "Moving JS files\n"
mv scripts/vendor/requirejs/require.js scripts/vendor/require.js
mv scripts/vendor/jquery/jquery.min.js scripts/vendor/jquery.js
mv scripts/vendor/jquery-ui/minified/jquery.ui.js scripts/vendor/jquery-ui.js
mv scripts/vendor/jquery-ui/minified/jquery.ui.autocomplete.min.js scripts/vendor/jquery.ui.autocomplete.js

echo "Moving CSS files\n"

#rm -rf scripts/vendor/* build scripts/views scripts/models scripts/collections build.txt
#mkdir scripts/vendor/requirejs && mv require.js scripts/vendor/requirejs/require.js
#mv css/style.css style.css && rm -rf css/* && mv style.css css/style.css
