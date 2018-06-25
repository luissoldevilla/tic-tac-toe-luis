#!/bin/bash
curl --include --request GET "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "games": [
      {
        "id": 1,
        "cells": ["o","x","o","x","o","x","o","x","o"],
        "over": true,
        "player_x": {
          "id": 1,
          "email": "and@and.com"
        },
        "player_o": {
          "id": 3,
          "email": "dna@dna.com"
        }
      },
      {
        "id": 2,
        "cells": ["","","","","","","","",""],
        "over": false,
        "player_x": {
          "id": 3,
          "email": "dna@dna.com"
        },
        "player_o": {
          "id": 1,
          "email": "and@and.com"
        }
      }
    ]
  }'

echo
