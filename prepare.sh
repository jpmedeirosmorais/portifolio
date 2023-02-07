#!/bin/sh

npx husky-init

echo -e "#!/bin/sh\n\nyarn build" > .husky/pre-push
chmod +x .husky/pre-push
echo '#!/bin/sh' > .git/hooks/pre-push
echo -e '#!/bin/sh\n\nyarn run lint \nyarn run prettier \nyarn build' >> .git/hooks/pre-push
echo 'echo "Executando pre-push..."' >> .git/hooks/pre-push
chmod +x .git/hooks/pre-push
echo "Arquivo pre-push criado com sucesso."

echo -e "#!/bin/sh\n\nyarn run lint \nyarn run prettier" > .husky/pre-commit
chmod +x .husky/pre-commit
echo '#!/bin/sh' > .git/hooks/pre-commit
echo -e '#!/bin/sh\n\nyarn run lint \nyarn run prettier \nyarn build' >> .git/hooks/pre-commit
echo 'echo "Executando pre-commit..."' >> .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
echo "Arquivo pre-commit criado com sucesso."
