# lodash-bzextra
    extra functionalities to add and work with lodash

## Installation

```bash
npm install lodash-bzextras
```

## Usage

### getPositions

get multiple positions of items if there is [] or [*] in the poss (means all items in array or object)

```javaScript
    var {getPositions} = require('lodash-bzextras');

    var input ={
        key1: 'string',
        key2: 'any',
        key3:[
            {
                test:[
                {
                    test2:'string'
                },
                {
                    test3:'string'
                },
                {
                    test4:'string'
                },
                ]
            },
            {
                test:[
                {
                    test1:'string'
                },
                {
                    test2:'string'
                },
                {
                    test3:'string'
                },
                {
                    test4:'string'
                },
                ]
            }
        ]
    }

    var poss = "key3[].test[].test4";
    var result = getPositions(input, poss);
    /**
        result = [
            "key3[0].test[2].test4",
            "key3[1].test[3].test4",
        ]
     * */
    var poss = "[*]";
    var result = getPositions(input, poss);
    /**
        result = [ 'key1', 'key2', 'key3' ],
        
     * */
    var poss = "[*][]";
    var result = getPositions(input, poss);
    /**
        result = [ 'key3[0]', 'key3[1]' ],
        
     * */

```

if a poss don't exist or poss entry is incorrect it will return empty array

