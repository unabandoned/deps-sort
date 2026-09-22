// Vendored from shasum-object@1.0.1 (https://github.com/goto-bus-stop/shasum-object).
// Flagged abandoned (last release September 2025). Apache-2.0, not MIT like
// the rest of this package — see shasum-object.LICENSE alongside this file.
//
// Copied verbatim but for this header and the require of the vendored
// fast-safe-stringify beside it, so the non-string input path behaves exactly
// as it did. `row.source` is documented as file contents, but this is a
// library, so the branch is kept rather than assumed unreachable.
'use strict';

var createHash = require('crypto').createHash;
var stringify = require('./fast-safe-stringify');

module.exports = function shasum (input, hash, digest) {
    if (!hash) hash = 'sha1';
    if (!digest) digest = 'hex';
    if (typeof input !== 'string' && !Buffer.isBuffer(input)) input = stringify.stable(input);

    return createHash(hash)
        .update(input, typeof input === 'string' ? 'utf8' : undefined)
        .digest(digest);
};
