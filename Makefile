
install: # установка зависимостей из проекта(package/package-l)
        npm ci 
publish: # для публикации пакета
        npm publish --dry-run 
brain-games: # для запуска игры через команду 'brain-games'
        node bin/brain-games.js 
make lint:
        npx eslint .
brain-even: # для запуска игры через команду 'brain-even'
				node bin/brain-even.js
brain-calc: # для запуска игры brain-calc
				node bin/brain-calc.js
brain-gcd: # для запуска игры brain-gcd
				node bin/brain-gcd.js
brain-progression:
				node bin/brain-progression.js
brain-prime:
				node bin/brain-prime.js