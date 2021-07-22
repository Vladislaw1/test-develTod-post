exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 2738:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a54b4f32bdc1ef890ddd.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/9PM9oH38y0s3vf6vhzFLt/_buildManifest.js","static/9PM9oH38y0s3vf6vhzFLt/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-588261c74baf7142d208.js","static/chunks/321-7ea428c56a318bead133.js","static/css/f89857438f0c4bf8cfbd.css","static/chunks/pages/index-bac207314e740b7cb8f2.js"],"/_app":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-588261c74baf7142d208.js","static/css/086196a90c4e24cc9863.css","static/chunks/pages/_app-1879bed809bc10204a31.js"],"/_error":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-588261c74baf7142d208.js","static/chunks/pages/_error-9faf4177fb4e528b4124.js"],"/posts/[postId]":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-588261c74baf7142d208.js","static/chunks/321-7ea428c56a318bead133.js","static/css/8842faa86204140d1527.css","static/chunks/pages/posts/[postId]-fbb5b615a2e5de6d20c9.js"],"/posts/new":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-588261c74baf7142d208.js","static/chunks/321-7ea428c56a318bead133.js","static/css/fdadb53b86290c681d1c.css","static/chunks/pages/posts/new-7d27ad51cc7e05d9577f.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 9392:
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ 1146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(7561);
// EXTERNAL MODULE: ./store/types/posts.ts
var posts = __webpack_require__(1467);
;// CONCATENATED MODULE: ./store/reducers/postReducer.ts

const initialState = {
  posts: [],
  post: {
    id: "",
    title: "",
    body: "",
    comments: [{
      postId: "",
      body: "",
      id: ""
    }]
  },
  loading: false,
  error: null
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case posts/* PostsActionTypes.FETCH_POSTS */.J.FETCH_POSTS:
      return {
        posts: [],
        post: {},
        loading: true,
        error: null
      };

    case posts/* PostsActionTypes.FETCH_POSTS_SUCCESS */.J.FETCH_POSTS_SUCCESS:
      return {
        posts: action.payload,
        post: {},
        loading: false,
        error: null
      };

    case posts/* PostsActionTypes.FETCH_POSTS_ERROR */.J.FETCH_POSTS_ERROR:
      return {
        posts: [],
        post: {},
        loading: false,
        error: action.payload
      };

    case posts/* PostsActionTypes.FETCH_ONE_POST */.J.FETCH_ONE_POST:
      return {
        posts: state.posts,
        post: {},
        loading: true,
        error: null
      };

    case posts/* PostsActionTypes.FETCH_ONE_POST_SUCCESS */.J.FETCH_ONE_POST_SUCCESS:
      return {
        posts: state.posts,
        post: action.payload,
        loading: false,
        error: null
      };

    case posts/* PostsActionTypes.FETCH_ONE_POST_ERROR */.J.FETCH_ONE_POST_ERROR:
      return {
        posts: state.posts,
        post: {},
        loading: false,
        error: action.payload
      };

    case posts/* PostsActionTypes.ADD_NEW_POST */.J.ADD_NEW_POST:
      return {
        posts: state.posts,
        post: {},
        loading: true,
        error: null
      };

    case posts/* PostsActionTypes.ADD_NEW_POST_SUCCESS */.J.ADD_NEW_POST_SUCCESS:
      console.log(state);
      return {
        posts: [...state.posts, action.payload],
        post: {},
        loading: false,
        error: null
      };

    case posts/* PostsActionTypes.ADD_NEW_POST_ERROR */.J.ADD_NEW_POST_ERROR:
      return {
        posts: [],
        post: {},
        loading: false,
        error: null
      };

    case posts/* PostsActionTypes.DELETE_POST */.J.DELETE_POST:
      return {
        posts: state.posts,
        post: {},
        loading: true,
        error: null
      };

    case posts/* PostsActionTypes.DELETE_POST_SUCCESS */.J.DELETE_POST_SUCCESS:
      {
        const {
          posts
        } = state;
        const {
          payload
        } = action;
        const filterPost = posts.filter(({
          id
        }) => id !== payload);
        return {
          posts: filterPost,
          post: {},
          loading: false,
          error: null
        };
      }

    case posts/* PostsActionTypes.DELETE_POST_ERROR */.J.DELETE_POST_ERROR:
      return {
        posts: state.posts,
        post: {},
        loading: false,
        error: action.payload
      };

    case posts/* PostsActionTypes.ADD_COMMENT */.J.ADD_COMMENT:
      return {
        posts: state.posts,
        post: state.post,
        loading: true,
        error: null
      };

    case posts/* PostsActionTypes.ADD_COMMENT_SUCCESS */.J.ADD_COMMENT_SUCCESS:
      {
        const comments = state.post.comments;
        comments.push(action.payload);
        return {
          posts: state.posts,
          post: state.post,
          loading: false,
          error: null
        };
      }

    case posts/* PostsActionTypes.ADD_COMMENT_ERROR */.J.ADD_COMMENT_ERROR:
      return {
        posts: state.posts,
        post: state.post,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./store/reducers/index.ts


/* harmony default export */ var reducers = ((0,external_redux_.combineReducers)({
  posts: postsReducer
}));
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(5176);
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(5694);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);
;// CONCATENATED MODULE: ./store/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let store;
const store_initialState = {};

function initStore(preloadedState = store_initialState) {
  return (0,external_redux_.createStore)(reducers, preloadedState, (0,external_redux_devtools_extension_.composeWithDevTools)((0,external_redux_.applyMiddleware)((external_redux_thunk_default()))));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState));
    store = undefined;
  }

  if (true) return _store;
  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = (0,external_react_.useMemo)(() => initializeStore(initialState), [initialState]);
  return store;
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/NavBar/NavBar.module.css
var NavBar_module = __webpack_require__(2892);
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);
;// CONCATENATED MODULE: ./components/NavBar/NavBar.tsx



/* eslint-disable jsx-a11y/anchor-is-valid */




const NavBar = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: (NavBar_module_default()).navigation,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: (NavBar_module_default()).navList,
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (NavBar_module_default()).navListItem,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          as: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: (NavBar_module_default()).navListItemLink,
            children: "All posts"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (NavBar_module_default()).navListItem,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/posts/new",
          as: "/posts/new",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: (NavBar_module_default()).navListItemLink,
            children: "Add post"
          })
        })
      })]
    })
  }), children]
});

/* harmony default export */ var NavBar_NavBar = (NavBar);
;// CONCATENATED MODULE: ./pages/_app.tsx


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MyApp = ({
  Component,
  pageProps
}) => {
  const store = useStore(pageProps.initialReduxState);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(NavBar_NavBar, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
    })
  });
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 1467:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ PostsActionTypes; }
/* harmony export */ });
let PostsActionTypes;

(function (PostsActionTypes) {
  PostsActionTypes["FETCH_POSTS"] = "FETCH_POSTS";
  PostsActionTypes["FETCH_POSTS_SUCCESS"] = "FETCH_POSTS_SUCCESS";
  PostsActionTypes["FETCH_POSTS_ERROR"] = "FETCH_POSTS_ERROR";
  PostsActionTypes["FETCH_ONE_POST"] = "FETCH_ONE_POST";
  PostsActionTypes["FETCH_ONE_POST_SUCCESS"] = "FETCH_ONE_POST_SUCCESS";
  PostsActionTypes["FETCH_ONE_POST_ERROR"] = "FETCH_ONE_POST_ERROR";
  PostsActionTypes["ADD_NEW_POST"] = "ADD_NEW_POST";
  PostsActionTypes["ADD_NEW_POST_SUCCESS"] = "ADD_NEW_POST_SUCCESS";
  PostsActionTypes["ADD_NEW_POST_ERROR"] = "ADD_NEW_POST_ERROR";
  PostsActionTypes["DELETE_POST"] = "DELETE_POST";
  PostsActionTypes["DELETE_POST_SUCCESS"] = "DELETE_POST_SUCCESS";
  PostsActionTypes["DELETE_POST_ERROR"] = "DELETE_POST_ERROR";
  PostsActionTypes["ADD_COMMENT"] = "ADD_COMMENT";
  PostsActionTypes["ADD_COMMENT_SUCCESS"] = "ADD_COMMENT_SUCCESS";
  PostsActionTypes["ADD_COMMENT_ERROR"] = "ADD_COMMENT_ERROR";
})(PostsActionTypes || (PostsActionTypes = {}));

/***/ }),

/***/ 2892:
/***/ (function(module) {

// Exports
module.exports = {
	"navigation": "NavBar_navigation__USUY3",
	"navList": "NavBar_navList__2xQR6",
	"navListItem": "NavBar_navListItem__PaPFa",
	"navListItemLink": "NavBar_navListItemLink__7h_Vh"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;