#!/bin/bash

echo "Pushing to Production"

npm run build && scp -r build root@iamtushar324.live:/var/www/my-portfolio
