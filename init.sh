#!/bin/sh

echo -e "#!/bin/sh\n\n yarn prettier --write \"./**/*.{js,jsx,ts,tsx}\" && yarn build" > .husky/pre-push.sh
chmod +x .husky/pre-push.sh
