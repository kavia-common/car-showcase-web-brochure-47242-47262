#!/bin/bash
cd /home/kavia/workspace/code-generation/car-showcase-web-brochure-47242-47262/car_brochure_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

