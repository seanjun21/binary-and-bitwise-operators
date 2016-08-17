* What is 2^5 in binary?
  - 100000

* What is 2^5 - 1 in binary?
  - 11111

* What is the general rule for binary numbers which are or the form 2^n or 2^n - 1?
  - For 2^n, there will only be a 1 at position n with 0s following.
  - 100000 (1 followed by 0 x n zeroes) <-- 2^5 example
  - For 2^n - 1, truncate most significant bit, and convert the rest of 0s to 1s.
  - 11111 (1 truncated, then 0 x n converted to 1s) <-- 2^5 - 1 example