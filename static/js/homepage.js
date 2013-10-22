// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

$(function() {
  /* Mosaic image rotations
  ================================================== */
  $('#mosaic').gridrotator( {
      rows    : 3,
      columns   : 15,
      animType  : 'rotateLeft',
      animSpeed : 1000,
      interval  : 2000,
      step    : 1,
      w480    : {
        rows  : 2,
        columns : 7
      },
      w320    : {
        rows  : 2,
        columns : 5
      }
  });

});
