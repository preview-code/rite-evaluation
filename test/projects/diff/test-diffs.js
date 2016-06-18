/* Copyright (c) 2016, preview-code
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of rite-evaluation nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/*exported actualDiffs,testDiffs*/
  },

  {
    file: 15,
    expected: [15],
    diff: 'diff --git a/a b/b\n' +
    'index efe6276..6114b7a 100644\n' +
    '--- a/a\n' +
    '+++ b/b\n' +
    '@@ -341,5 +343,3 @@ Morbi fermentum neque sit amet ante eleifend, non molestie nulla pretium.\n' +
    ' Pellentesque a nulla a libero molestie blandit vitae id eros.\n' +
    ' Morbi fermentum neque sit amet ante eleifend, non molestie nulla pretium.\n' +
    ' Integer non turpis eu quam bibendum pulvinar vel non ante.\n' +
    '-Etiam vel nibh aliquam, dignissim nunc vel, ultrices sapien.\n' +
    '-Nulla ac justo non tellus convallis suscipit.'
  },
  {
    file: 16,
    expected: [16],
    diff: 'diff --git a/a /dev/null\n' +
    'index efe6276..6114b7a 100644\n' +
    '--- a/a\n' +
    '+++ /dev/null\n' +
    '@@ -341,5 +343,3 @@ Morbi fermentum neque sit amet ante eleifend, non molestie nulla pretium.\n' +
    '-Pellentesque a nulla a libero molestie blandit vitae id eros.\n' +
    '-Morbi fermentum neque sit amet ante eleifend, non molestie nulla pretium.\n' +
    '-Integer non turpis eu quam bibendum pulvinar vel non ante.\n' +
    '-Etiam vel nibh aliquam, dignissim nunc vel, ultrices sapien.\n' +
    '-Nulla ac justo non tellus convallis suscipit.'
    file: {name: 'a', created: true},
    changes: '\n+one line',
    file: {name: 'a'},
    changes: '\n one line\n' +
    '+line two',
    file: {name: 'a'},
    changes: '\n one line\n' +
    '+line inbetween\n' +
    ' line two',
    file: {name: 'a'},
    changes: '\n one line\n' +
    ' line inbetween\n' +
    '+another line\n' +
    '+hello world\n' +
    ' line two',
    file: {name: 'a'},
    changes: '\n one line\n' +
    ' line inbetween\n' +
    ' another line\n' +
    '-hello world\n' +
    '+replace a line\n' +
    ' line two',
    file: {name: 'b'},
    changes: '\n one line\n' +
    ' line inbetween\n' +
    '-another line\n' +
    ' replace a line\n' +
    '+another line\n' +
    ' line two',
    file: {name: 'a'},
    changes: '\n one line\n' +
    ' line inbetween\n' +
    '-replace a line\n' +
    ' another line\n' +
    ' line two',
    file: {name: 'a'},
    changes: '\n one line\n' +
    ' line inbetween\n' +
    ' another line\n' +
    '-line two',
    file: {name: 'a'},
    changes: '\n-one line\n' +
    ' line inbetween\n' +
    ' another line\n' +
    '+add last',
    file: {name: 'a'},
    changes: '\n-line inbetween\n' +
    ' another line\n' +
    ' add last',
    file: {name: 'a'},
    changes: '\n-another line\n' +
    '-add last',
    file: {name: 'a'},
    changes: '\n Pellentesque a nulla a libero molestie blandit vitae id eros.\n' +
    ' Maecenas sit amet turpis condimentum enim volutpat imperdiet.\n' +
    ' Vestibulum at sem convallis, congue erat porttitor, mattis dui.\n' +
    '-Donec scelerisque massa in dignissim egestas.\n' +
    '-Morbi fermentum neque sit amet ante eleifend, non molestie nulla pretium.\n' +
    ' Integer non turpis eu quam bibendum pulvinar vel non ante.\n' +
    ' Etiam vel nibh aliquam, dignissim nunc vel, ultrices sapien.\n' +
    ' Nulla ac justo non tellus convallis suscipit.',
    file: {name: 'a'},
    file: {name: 'a'},
    changes: '\n Pellentesque a nulla a libero molestie blandit vitae id eros.\n' +
    ' Morbi fermentum neque sit amet ante eleifend, non molestie nulla pretium.\n' +
    ' Integer non turpis eu quam bibendum pulvinar vel non ante.\n' +
    '+Etiam vel nibh aliquam, dignissim nunc vel, ultrices sapien.\n' +
    '+Nulla ac justo non tellus convallis suscipit.',
    file: {name: 'a'},
    changes: '\n Pellentesque a nulla a libero molestie blandit vitae id eros.\n' +
    ' Morbi fermentum neque sit amet ante eleifend, non molestie nulla pretium.\n' +
    ' Integer non turpis eu quam bibendum pulvinar vel non ante.\n' +
    '-Etiam vel nibh aliquam, dignissim nunc vel, ultrices sapien.\n' +
    '-Nulla ac justo non tellus convallis suscipit.',
    linesChanged: { startLineBefore: 341, rangeBefore: 5,
      startLineAfter: 343,  rangeAfter: 3 }
  },
  {
    index: '16',
    file: {name: 'b', moved: true, from: 'a'},
    diffId: '@@ -341,5 +343,3 @@',
    fileUrl: 'base/blob/sha/fromatob',
    changes: '\n Pellentesque a nulla a libero molestie blandit vitae id eros.\n' +
    ' Morbi fermentum neque sit amet ante eleifend, non molestie nulla pretium.\n' +
    ' Integer non turpis eu quam bibendum pulvinar vel non ante.\n' +
    '-Etiam vel nibh aliquam, dignissim nunc vel, ultrices sapien.\n' +
    '-Nulla ac justo non tellus convallis suscipit.',

var testDiffsWithDelete = testDiffs.slice();
testDiffsWithDelete.push({
  index: '17',
  file: {name: 'a', deleted: true},
  diffId: '@@ -341,5 +343,3 @@',
  fileUrl: 'base/blob/sha/a',
  changes: '\n-Pellentesque a nulla a libero molestie blandit vitae id eros.\n' +
  '-Morbi fermentum neque sit amet ante eleifend, non molestie nulla pretium.\n' +
  '-Integer non turpis eu quam bibendum pulvinar vel non ante.\n' +
  '-Etiam vel nibh aliquam, dignissim nunc vel, ultrices sapien.\n' +
  '-Nulla ac justo non tellus convallis suscipit.',
  linesChanged: { startLineBefore: 341, rangeBefore: 5,
    startLineAfter: 343,  rangeAfter: 3 }
});