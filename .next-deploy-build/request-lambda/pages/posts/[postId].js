/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4269:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _postId_; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./hooks/useStore.ts

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => (0,external_react_redux_.useDispatch)();
const useAppSelector = external_react_redux_.useSelector;
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: ./store/types/posts.ts
var posts = __webpack_require__(1467);
;// CONCATENATED MODULE: ./store/actions/onePost.ts


const onePost = (id, _embed) => async dispatch => {
  dispatch({
    type: posts/* PostsActionTypes.FETCH_ONE_POST */.J.FETCH_ONE_POST,
    payload: {}
  });

  try {
    const {
      data
    } = await external_axios_default().get(`${"https://simple-blog-api.crew.red"}/posts/${id}?_embed=${_embed}`);
    dispatch({
      type: posts/* PostsActionTypes.FETCH_ONE_POST_SUCCESS */.J.FETCH_ONE_POST_SUCCESS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: posts/* PostsActionTypes.FETCH_ONE_POST_SUCCESS */.J.FETCH_ONE_POST_SUCCESS,
      payload: e.message
    });
  }
};
// EXTERNAL MODULE: ./hooks/useForm.ts
var useForm = __webpack_require__(5061);
;// CONCATENATED MODULE: ./store/actions/addNewComment.ts


const addNewComment = body => async dispatch => {
  dispatch({
    type: posts/* PostsActionTypes.ADD_COMMENT */.J.ADD_COMMENT
  });

  try {
    const {
      data
    } = await external_axios_default().post("https://simple-blog-api.crew.red/comments", body);
    dispatch({
      type: posts/* PostsActionTypes.ADD_COMMENT_SUCCESS */.J.ADD_COMMENT_SUCCESS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: posts/* PostsActionTypes.ADD_COMMENT_ERROR */.J.ADD_COMMENT_ERROR,
      payload: e.message
    });
  }
};
// EXTERNAL MODULE: ./components/FormAddComment/FormAddComment.module.css
var FormAddComment_module = __webpack_require__(2432);
var FormAddComment_module_default = /*#__PURE__*/__webpack_require__.n(FormAddComment_module);
;// CONCATENATED MODULE: ./components/FormAddComment/FormAddComment.tsx








const FormAddComment = ({
  id
}) => {
  const dispatch = useAppDispatch();
  const initialState = {
    postId: Number(id),
    body: ""
  };
  const onSubmit = (0,external_react_.useCallback)(data => dispatch(addNewComment(data)), [dispatch]);
  const [dataForm, handleChange, handleSubmit] = (0,useForm/* useForm */.c)(initialState, onSubmit);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    className: (FormAddComment_module_default()).formAddComment,
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: "1",
      children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
        id: "1",
        className: (FormAddComment_module_default()).textarea,
        onChange: handleChange,
        value: dataForm.body,
        name: "body",
        placeholder: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
        required: true,
        children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: (FormAddComment_module_default()).btnAddComment,
      type: "submit",
      children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"
    })]
  });
};

/* harmony default export */ var FormAddComment_FormAddComment = (FormAddComment);
// EXTERNAL MODULE: ./styles/Post.module.css
var Post_module = __webpack_require__(2713);
var Post_module_default = /*#__PURE__*/__webpack_require__.n(Post_module);
// EXTERNAL MODULE: ./components/CommentListItem/CommentListItem.module.css
var CommentListItem_module = __webpack_require__(755);
var CommentListItem_module_default = /*#__PURE__*/__webpack_require__.n(CommentListItem_module);
;// CONCATENATED MODULE: ./components/CommentListItem/CommentListItem.tsx




const CommentListItem = ({
  comment
}) => /*#__PURE__*/jsx_runtime_.jsx("li", {
  className: (CommentListItem_module_default()).commentListItem,
  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
    className: (CommentListItem_module_default()).text,
    children: comment.body
  })
});

/* harmony default export */ var CommentListItem_CommentListItem = (CommentListItem);
// EXTERNAL MODULE: ./components/CommentList/CommentList.module.css
var CommentList_module = __webpack_require__(7701);
var CommentList_module_default = /*#__PURE__*/__webpack_require__.n(CommentList_module);
;// CONCATENATED MODULE: ./components/CommentList/CommentList.tsx






const CommentList = () => {
  const post = useAppSelector(state => state.posts.post);
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: (CommentList_module_default()).commentList,
    children: post.comments.map(el => /*#__PURE__*/jsx_runtime_.jsx(CommentListItem_CommentListItem, {
      comment: el
    }, el.id))
  });
};

/* harmony default export */ var CommentList_CommentList = (CommentList);
;// CONCATENATED MODULE: ./pages/posts/[postId].tsx











const Post = props => {
  const dispatch = useAppDispatch();
  const post = useAppSelector(state => state.posts.post);
  const {
    0: openComments,
    1: setOpenComment
  } = (0,external_react_.useState)();
  const {
    postId,
    embed
  } = props;
  (0,external_react_.useEffect)(() => {
    dispatch(onePost(postId, embed));
  }, [dispatch, postId, embed]);

  const showComment = () => {
    setOpenComment(!openComments);
  };

  const textBtn = openComments ? 'Скрыть коментарии' : 'Показать коментарии';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["Post ", post.title]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Generated by create next app"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "../../public/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: (Post_module_default()).postPage,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Post_module_default()).post,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: (Post_module_default()).caption,
            children: post.title
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: (Post_module_default()).body,
            children: post.body
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: (Post_module_default()).btnShwComm,
            onClick: showComment,
            children: textBtn
          }), openComments && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(CommentList_CommentList, {}), /*#__PURE__*/jsx_runtime_.jsx(FormAddComment_FormAddComment, {
              id: postId
            })]
          })]
        })]
      })
    })]
  });
};

Post.getInitialProps = async ctx => {
  const {
    postId,
    _embed: embed
  } = ctx.query;
  return {
    postId,
    embed
  };
};

/* harmony default export */ var _postId_ = (Post);

/***/ }),

/***/ 3422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_app": function() { return /* binding */ _app; },
  "config": function() { return /* binding */ config; },
  "default": function() { return /* binding */ next_serverless_loaderpage_2Fposts_2F_5BpostId_5D_absolutePagePath_private_next_pages_2Fposts_2F_5BpostId_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_9PM9oH38y0s3vf6vhzFLt_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_225ebe4c75faed7cdf2bb9ae52ce7de3f7_22_2C_22previewModeSigningKey_22_3A_22c9941324818b6c308b40e62128b6de7c2c8edc83662ce4c6b907a521e349135b_22_2C_22previewModeEncryptionKey_22_3A_22fa39d73b08b4d4c1b03a298cb2d4d55eff567477889af8d48a627ffbcbbf2798_22_7D_loadedEnvFiles_W10_3D_i18n_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; },
  "render": function() { return /* binding */ render; },
  "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
  "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
  "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
  "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
  "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; }
});

;// CONCATENATED MODULE: external "next/dist/next-server/server/node-polyfill-fetch"
var node_polyfill_fetch_namespaceObject = require("next/dist/next-server/server/node-polyfill-fetch");;
// EXTERNAL MODULE: ./.next/routes-manifest.json
var routes_manifest = __webpack_require__(5706);
// EXTERNAL MODULE: ./.next/build-manifest.json
var build_manifest = __webpack_require__(2738);
// EXTERNAL MODULE: ./.next/react-loadable-manifest.json
var react_loadable_manifest = __webpack_require__(9392);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/page-handler.js
var page_handler = __webpack_require__(9436);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fposts%2F%5BpostId%5D&absolutePagePath=private-next-pages%2Fposts%2F%5BpostId%5D.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=&distDir=private-dot-next&buildId=9PM9oH38y0s3vf6vhzFLt&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%225ebe4c75faed7cdf2bb9ae52ce7de3f7%22%2C%22previewModeSigningKey%22%3A%22c9941324818b6c308b40e62128b6de7c2c8edc83662ce4c6b907a521e349135b%22%2C%22previewModeEncryptionKey%22%3A%22fa39d73b08b4d4c1b03a298cb2d4d55eff567477889af8d48a627ffbcbbf2798%22%7D&loadedEnvFiles=W10%3D&i18n=!

      
      
      
      

      
      const { processEnv } = __webpack_require__(4227)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(8881)

      const appMod = __webpack_require__(1146)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(4269)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ var next_serverless_loaderpage_2Fposts_2F_5BpostId_5D_absolutePagePath_private_next_pages_2Fposts_2F_5BpostId_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_distDir_private_dot_next_buildId_9PM9oH38y0s3vf6vhzFLt_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_225ebe4c75faed7cdf2bb9ae52ce7de3f7_22_2C_22previewModeSigningKey_22_3A_22c9941324818b6c308b40e62128b6de7c2c8edc83662ce4c6b907a521e349135b_22_2C_22previewModeEncryptionKey_22_3A_22fa39d73b08b4d4c1b03a298cb2d4d55eff567477889af8d48a627ffbcbbf2798_22_7D_loadedEnvFiles_W10_3D_i18n_ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(routes_manifest/* rewrites */.Dg)
        ? routes_manifest/* rewrites */.Dg
        : []

      if (!Array.isArray(routes_manifest/* rewrites */.Dg)) {
        combinedRewrites.push(...routes_manifest/* rewrites.beforeFiles */.Dg.beforeFiles)
        combinedRewrites.push(...routes_manifest/* rewrites.afterFiles */.Dg.afterFiles)
        combinedRewrites.push(...routes_manifest/* rewrites.fallback */.Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,page_handler/* getPageHandler */.u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: build_manifest,
        reactLoadableManifest: react_loadable_manifest,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/posts/[postId]",
        buildId: "9PM9oH38y0s3vf6vhzFLt",
        escapedBuildId: "9PM9oH38y0s3vf6vhzFLt",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"5ebe4c75faed7cdf2bb9ae52ce7de3f7",previewModeSigningKey:"c9941324818b6c308b40e62128b6de7c2c8edc83662ce4c6b907a521e349135b",previewModeEncryptionKey:"fa39d73b08b4d4c1b03a298cb2d4d55eff567477889af8d48a627ffbcbbf2798"}
      })
      
    

/***/ }),

/***/ 755:
/***/ (function(module) {

// Exports
module.exports = {
	"commentListItem": "CommentListItem_commentListItem__Dc9lo"
};


/***/ }),

/***/ 7701:
/***/ (function(module) {

// Exports
module.exports = {
	"commentList": "CommentList_commentList__L3-zY"
};


/***/ }),

/***/ 2432:
/***/ (function(module) {

// Exports
module.exports = {
	"formAddComment": "FormAddComment_formAddComment__2MB4b",
	"btnAddComment": "FormAddComment_btnAddComment__3bT44",
	"textarea": "FormAddComment_textarea__1VzpY"
};


/***/ }),

/***/ 2713:
/***/ (function(module) {

// Exports
module.exports = {
	"post": "Post_post__39Kna",
	"caption": "Post_caption__1a41r",
	"body": "Post_body__3fAXg",
	"btnShwComm": "Post_btnShwComm__168pZ"
};


/***/ }),

/***/ 5517:
/***/ (function(module) {

"use strict";
module.exports = require("@hapi/accept");;

/***/ }),

/***/ 4227:
/***/ (function(module) {

"use strict";
module.exports = require("@next/env");;

/***/ }),

/***/ 227:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ 3932:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ 816:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 9034:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/i18n/detect-domain-locale.js");;

/***/ }),

/***/ 939:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/i18n/detect-locale-cookie.js");;

/***/ }),

/***/ 7468:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/i18n/normalize-locale-path.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9577:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-route-from-asset-path.js");;

/***/ }),

/***/ 2378:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/path-match.js");;

/***/ }),

/***/ 2480:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/prepare-destination.js");;

/***/ }),

/***/ 199:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/route-matcher.js");;

/***/ }),

/***/ 4386:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/route-regex.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 2240:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/api-utils.js");;

/***/ }),

/***/ 9622:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/denormalize-page-path.js");;

/***/ }),

/***/ 6171:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ 8460:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/render.js");;

/***/ }),

/***/ 7369:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/send-payload.js");;

/***/ }),

/***/ 5105:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 1191:
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7561:
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ 5176:
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ 5694:
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ }),

/***/ 1168:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ }),

/***/ 8835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [56,845,706,961,61], function() { return __webpack_require__(3422); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			475: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(56);
/******/ 			__webpack_require__.e(845);
/******/ 			__webpack_require__.e(706);
/******/ 			__webpack_require__.e(961);
/******/ 			__webpack_require__.e(61);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;