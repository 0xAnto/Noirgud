export const libraries = [
    {
      "category": "General",
      "libraries": [
        {
          "name": "Standard Library",
          "description": "Standard library that ships with all Noir releases",
          "link": "https://github.com/noir-lang/noir/tree/master/noir_stdlib"
        },
        {
          "name": "ZK Kit Noir",
          "description": "Collection of algorithm and utility libraries from Privacy & Scaling Explorations",
          "link": "https://github.com/privacy-scaling-explorations/zk-kit.noir"
        }
      ]
    },
    {
      "category": "Data Types",
      "subcategories": [
        {
          "name": "Numerics",
          "libraries": [
            {
              "name": "BigNum",
              "description": "Library for arithmetic computations of large unsigned integers of any length",
              "link": "https://github.com/noir-lang/noir-bignum"
            },
            {
              "name": "Fraction",
              "description": "Library for accessing fractional number data type in Noir",
              "link": "https://github.com/resurgencelabs/fraction"
            },
            {
              "name": "ZKFloat",
              "description": "Floating point library for Noir",
              "link": "https://github.com/0x3327/ZKFloat"
            },
            {
              "name": "Complex Numbers",
              "description": "Comprehensive suite of operations for complex numbers",
              "link": "https://github.com/doctoruber/complexnr"
            },
            {
              "name": "Fixed Point Library",
              "description": "Precise fixed-point arithmetic operations tailored for Noir",
              "link": "https://github.com/doctoruber/noir-fixed-point"
            }
          ]
        },
        {
          "name": "Dates & Times",
          "libraries": [
            {
              "name": "Noir Dates",
              "description": "A Noir library to parse and abstract away Dates",
              "link": "https://github.com/madztheo/noir-date"
            },
            {
              "name": "DateTimeNr",
              "description": "A Noir library to parse and abstract away DateTime objects",
              "link": "https://github.com/doctoruber/DateTimeNr"
            }
          ]
        }
      ]
    },
    {
      "category": "Data Type Manipulation",
      "subcategories": [
        {
          "name": "General",
          "libraries": [
            {
              "name": "nodash",
              "description": "Utility library for working with various data types, inspired by Lodash",
              "link": "https://github.com/olehmisar/nodash"
            }
          ]
        },
        {
          "name": "Numerics",
          "libraries": [
            {
              "name": "Matrix Operations",
              "description": "Functionality for performing various matrix operations",
              "link": "https://github.com/storswiftlabs/matrix_operations"
            },
            {
              "name": "Statistical Library",
              "description": "Comprehensive library for statistical computations in Noir",
              "link": "https://github.com/doctoruber/statnr"
            },
            {
              "name": "Quantized Arithmetic",
              "description": "Quantized value operations of zero-point quantization",
              "link": "https://github.com/storswiftlabs/quantized_arithmetic"
            }
          ]
        },
        {
          "name": "Bytes",
          "libraries": [
            {
              "name": "U(int)2B(ytes)",
              "description": "Library for converting `u8`->`u120`s to `[u8]` array",
              "link": "https://github.com/colinnielsen/noir-u2b"
            }
          ]
        },
        {
          "name": "Texts",
          "libraries": [
            {
              "name": "Base64",
              "description": "Library for base64 encoding",
              "link": "https://github.com/vlayer-xyz/noir-base64"
            },
            {
              "name": "Noir Base64 Library",
              "description": "Extension of `noir_base64` with support for Vectors and Base64 URL encoding and decoding",
              "link": "https://github.com/Envoy-VC/noir_base64_lib"
            },
            {
              "name": "JSON Parser",
              "description": "JSON string parsing, adheres to IETF RFC 8259",
              "link": "https://github.com/noir-lang/noir_json_parser"
            },
            {
              "name": "String Utils",
              "description": "Wrapper for String in Noir adding methods for common string operations",
              "link": "https://github.com/madztheo/noir-string-utils"
            },
            {
              "name": "String Search",
              "description": "Proof of substring existence within a larger string",
              "link": "https://github.com/noir-lang/noir_string_search"
            },
            {
              "name": "zkRegEx",
              "description": "Proof of Regular Expression (RegEx) verification",
              "link": "https://github.com/zkemail/zk-regex"
            }
          ]
        },
        {
          "name": "Arrays",
          "libraries": [
            {
              "name": "Sort",
              "description": "Efficient sorting of fixed-sized arrays",
              "link": "https://github.com/noir-lang/noir_sort"
            },
            {
              "name": "Sparse Array",
              "description": "Efficient immutable and mutable sparse arrays",
              "link": "https://github.com/noir-lang/sparse_array"
            }
          ]
        }
      ]
    },
    {
      "category": "Cryptography",
      "subcategories": [
        {
          "name": "Elliptic Curves",
          "libraries": [
            {
              "name": "BigCurve",
              "description": "Operations over elliptic curves instantiated with an arbitrary prime field",
              "link": "https://github.com/noir-lang/noir_bigcurve"
            },
            {
              "name": "Pairing over BLS12-381",
              "description": "Pairing over BLS12-381",
              "link": "https://github.com/ewynx/noir_bls12_381_pairing"
            }
          ]
        }
      ]
    }
  ]