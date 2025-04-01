// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

function calculatevolume() {
  // input
  const length = parseInt(document.getElementById('length-m').value);
  const width = parseInt(document.getElementById('width-m').value);
  const height = parseInt(document.getElementById('height-m').value);
    

  // process
    const pyramidvolume = (length * width * height) /3

  // output
  document.getElementById('volume').innerHTML = 'volume is:' + pyramidvolume + 'mm³'
}

