import {  } from '../actions/types'

const INITIAL_STATE = {
    stickies: [
        {
            code: "Hello world",
            language: "Text"
        },
        {
            code: `function foo(items, nada) {
                for (var i=0; i<items.length; i++) {
                    alert(items[i] + "juhu\n");
                }	// Real Tab.
            }`,
            language: "JavaScript"
        },
        {
            code: `function foo(items, nada) {
                for (var i=0; i<items.length; i++) {
                    alert(items[i] + "juhu\n");
                }	// Real Tab.
            }`,
            language: "JavaScript"
        },
        {
            code: `function foo(items, nada) {
                for (var i=0; i<items.length; i++) {
                    alert(items[i] + "juhu\n");
                }	// Real Tab.
            }`,
            language: "JavaScript"
        },
        {
            code: `function foo(items, nada) {
                for (var i=0; i<items.length; i++) {
                    alert(items[i] + "juhu\n");
                }	// Real Tab.
            }`,
            language: "JavaScript"
        },        
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}