#!/bin/sh

husky install
echo -e "#!/bin/sh\n\n yarn prettier --write \"./**/*.{js,jsx,ts,tsx}\" && yarn build" > .husky/pre-push.sh
chmod +x .husky/pre-push.sh

echo '#!/bin/sh' > .git/hooks/pre-push
echo -e '#!/bin/sh\n\n yarn prettier --write \"./**/*.{js,jsx,ts,tsx}\" && yarn build' >> .git/hooks/pre-push
echo 'echo "Executando pre-push..."' >> .git/hooks/pre-push
chmod +x .git/hooks/pre-push
echo "Arquivo pre-push criado com sucesso."
