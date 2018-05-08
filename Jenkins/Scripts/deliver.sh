#!/usr/bin/env sh

echo 'The following "npm" command builds the angular app'

set -x
npm run build
set +x

set -x
npm start &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit http://localhost:4200 to see your application in action.'
