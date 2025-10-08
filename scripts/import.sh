#!/bin/bash
echo ">>> Iniciando importación de datos a MongoDB..."

mongoimport --uri="mongodb://localhost:27017/tattler_db" --collection=restaurants --type=csv --headerline --file=../data/restaurants.csv

echo ">>> ¡Importación completada!"