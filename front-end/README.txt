Installing dependencies
-------------------------
composer install


Running tests
---------------
vendor/bin/phpunit test
(an html coverage report is generated in the coverage folder)


Generate docs
---------------
vendor/bin/apigen generate --config apigen.conf

SELECT *
FROM items
LEFT JOIN items_languages ON id = item_id
WHERE 
	visible_for_all_languages = 1 AND (lang = 'it' OR lang IS NULL) 
	OR visible_for_all_languages = 0 AND lang = 'it'