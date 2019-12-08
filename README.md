# lodash-bzextra
    extra functionalities to add and work with lodash

## Installation

```bash
npm install lodash-bzextras
```

## Usage

### getPositions

get multiple positions of items if there is [] in the path (means all items in array)

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

    var path = "key3[].test[].test4";
    var result = getPositions(input, path);
    /**
        result = [
            "key3[0].test[2].test4",
            "key3[1].test[3].test4",
        ]
     * */

```

if a path don't exist or path entry is incorrect it will return empty array

