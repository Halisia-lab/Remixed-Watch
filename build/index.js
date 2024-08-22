var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/halisia/Documents/GE/RemixedWatch/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/halisia/Documents/GE/RemixedWatch/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2JVV372E.css";

// app/root.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_react6 = require("react");

// app/components/mainButtons/CancelButton.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), CancelButton = ({ onPress }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: onPress, className: "flex flex-row bg-orange-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 z-20", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "mr-2",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#ffffff",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "12", cy: "12", r: "10" }, void 0, !1, {
          fileName: "app/components/mainButtons/CancelButton.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }, void 0, !1, {
          fileName: "app/components/mainButtons/CancelButton.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("line", { x1: "9", y1: "9", x2: "15", y2: "15" }, void 0, !1, {
          fileName: "app/components/mainButtons/CancelButton.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/mainButtons/CancelButton.tsx",
      lineNumber: 7,
      columnNumber: 9
    },
    this
  ),
  "Cancel"
] }, void 0, !0, {
  fileName: "app/components/mainButtons/CancelButton.tsx",
  lineNumber: 6,
  columnNumber: 12
}, this);

// app/components/mainButtons/NewWatchButton.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), NewWatchButton = ({ onPress }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: onPress, className: "flex flex-row bg-yellow-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 z-20", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: "mr-2",
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#ffffff",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("circle", { cx: "12", cy: "12", r: "10" }, void 0, !1, {
          fileName: "app/components/mainButtons/NewWatchButton.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("line", { x1: "12", y1: "8", x2: "12", y2: "16" }, void 0, !1, {
          fileName: "app/components/mainButtons/NewWatchButton.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("line", { x1: "8", y1: "12", x2: "16", y2: "12" }, void 0, !1, {
          fileName: "app/components/mainButtons/NewWatchButton.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/mainButtons/NewWatchButton.tsx",
      lineNumber: 7,
      columnNumber: 9
    },
    this
  ),
  "New watch"
] }, void 0, !0, {
  fileName: "app/components/mainButtons/NewWatchButton.tsx",
  lineNumber: 6,
  columnNumber: 12
}, this);

// app/components/watch/TimeZonesList.tsx
var import_react3 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), TimeZonesList = ({ onChooseTimeZone }) => {
  let [isOpened, setIsOpened] = (0, import_react3.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute z-50 dropdown border w-fit my-4 p-3 bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        onClick: () => setIsOpened(!isOpened),
        className: "flex flex-row text-blue-500 text-lg",
        children: [
          "Choose time zone",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#4a90e2",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M6 9l6 6 6-6" }, void 0, !1, {
                fileName: "app/components/watch/TimeZonesList.tsx",
                lineNumber: 26,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/watch/TimeZonesList.tsx",
              lineNumber: 17,
              columnNumber: 13
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/watch/TimeZonesList.tsx",
        lineNumber: 13,
        columnNumber: 9
      },
      this
    ),
    isOpened ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "menu", children: [-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
      (x, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "border-b py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { onClick: () => onChooseTimeZone(x), children: [
        "GMT ",
        x > 0 ? `+${x}` : x
      ] }, void 0, !0, {
        fileName: "app/components/watch/TimeZonesList.tsx",
        lineNumber: 32,
        columnNumber: 55
      }, this) }, i, !1, {
        fileName: "app/components/watch/TimeZonesList.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ) }, void 0, !1, {
      fileName: "app/components/watch/TimeZonesList.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/watch/TimeZonesList.tsx",
    lineNumber: 12,
    columnNumber: 12
  }, this);
};

// app/components/watch/Watch.tsx
var import_react5 = require("react");

// app/components/watch/TimeDisplayer.tsx
var import_react4 = require("react");

// app/utils/formatNumber.ts
var formatNumber = (potentiallySingleNumber) => potentiallySingleNumber < 10 ? `0${potentiallySingleNumber}` : `${potentiallySingleNumber}`;

// app/utils/switchHourFormat.ts
var switchHourFormat = (formated24h, hours) => !formated24h && hours > 12 ? hours - 12 : hours;

// app/utils/getAmOrPm.ts
var getAmOrPm = (hours) => hours >= 12 ? "PM" : "AM";

// app/components/watch/TimeDisplayer.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), TimeDisplay = ({ hours, minutes, seconds, isLightOn, editHoursMode, editMinutesMode, formated24h }) => {
  let editMode = editHoursMode || editMinutesMode, [formatedHours, setFormatedHours] = (0, import_react4.useState)(hours);
  return (0, import_react4.useEffect)(() => {
    setFormatedHours(switchHourFormat(formated24h, hours));
  }, [formated24h, hours]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      className: `${isLightOn ? "items-center flex-row bg-yellow-300 shadow-2xl shadow-yellow-300" : " bg-white"} text-black flex w-28 h-fit rounded-sm justify-center px-7 py-4 relative border border-black`,
      children: [
        editMode && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "absolute top-0 left-1 text-xs", children: "EDIT" }, void 0, !1, {
          fileName: "app/components/watch/TimeDisplayer.tsx",
          lineNumber: 28,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: `${editHoursMode ? " animate-pulse text-gray-600" : ""}`, children: formatNumber(formatedHours) }, void 0, !1, {
          fileName: "app/components/watch/TimeDisplayer.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        ": ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: `${editMinutesMode ? " animate-pulse text-gray-600" : ""}`, children: formatNumber(minutes) }, void 0, !1, {
          fileName: "app/components/watch/TimeDisplayer.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        ":",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: formatNumber(seconds) }, void 0, !1, {
          fileName: "app/components/watch/TimeDisplayer.tsx",
          lineNumber: 34,
          columnNumber: 14
        }, this),
        !formated24h && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-xs", children: getAmOrPm(hours) }, void 0, !1, {
          fileName: "app/components/watch/TimeDisplayer.tsx",
          lineNumber: 35,
          columnNumber: 30
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/watch/TimeDisplayer.tsx",
      lineNumber: 25,
      columnNumber: 9
    },
    this
  );
};

// app/components/watch/WatchButton.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), WatchButton = ({ label, className, onPress }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  "button",
  {
    className: `${className} absolute rounded-2xl bg-black h-10 w-14 text-xs flex place-items-center justify-center text-white`,
    onClick: onPress,
    children: label
  },
  void 0,
  !1,
  {
    fileName: "app/components/watch/WatchButton.tsx",
    lineNumber: 9,
    columnNumber: 9
  },
  this
);

// app/utils/getCorrectHour.ts
var getCorrectHour = (hour, timeZone) => (hour + timeZone) % 24;

// public/images/watch_image.jpg
var watch_image_default = "/build/_assets/watch_image-HBQ2Z2XT.jpg";

// app/models/Coordinates.ts
var Coordinates = class {
  constructor(x, y) {
    this.transform = (number) => new Coordinates(this.x + number, this.y + number);
    this.x = x, this.y = y;
  }
};

// app/models/Matrix.ts
var _Matrix = class {
  constructor(rows, cols, cells) {
    this.get2dDeterminant = () => this.rows === 2 && this.cols === 2 ? this.cells[0][0] * this.cells[1][1] - this.cells[0][1] * this.cells[1][0] : null;
    this.get3dDeterminant = () => {
      if (this.rows !== 3 || this.cols !== 3)
        return null;
      let cells = this.cells;
      var determinant = 0;
      let otherIndexes = /* @__PURE__ */ new Map();
      otherIndexes.set(0, [1, 2]), otherIndexes.set(1, [0, 2]), otherIndexes.set(2, [0, 1]);
      for (let i = 0; i < 3; i++) {
        let determinant2D = new _Matrix(2, 2, [[cells[1][otherIndexes.get(i)[0]], cells[1][otherIndexes.get(i)[1]]], [cells[2][otherIndexes.get(i)[0]], cells[2][otherIndexes.get(i)[1]]]]).get2dDeterminant();
        if (determinant2D !== null) {
          let Adj = determinant2D * cells[0][i], signedAdj = i % 2 === 0 ? Adj : -Adj;
          determinant += signedAdj;
        }
      }
      return determinant;
    };
    this.getInverse = () => {
      if (this.get3dDeterminant() === 0 || this.get3dDeterminant === null)
        return null;
      {
        let transposedMatrix = new _Matrix(3, 3, this.transpose());
        return new _Matrix(3, 3, transposedMatrix.getAdjMatrix()).muliplyWithNumber(this.get3dDeterminant());
      }
    };
    this.muliplyWithNumber = (number) => {
      let multipliedMatrix = this.cells;
      for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++)
          multipliedMatrix[i][j] = this.cells[i][j] * number;
      return multipliedMatrix;
    };
    this.multiplyMatrix = (matrix) => {
      if (this.cells.length !== matrix.cells[0].length)
        return null;
      let cells = new _Matrix(3, 3, [[], [], []]).cells;
      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
          cells[i][j] = this.cells[i][0] * matrix.cells[0][j] + this.cells[i][1] * matrix.cells[1][j] + this.cells[i][2] * matrix.cells[2][j];
      return cells;
    };
    this.multiplyVector = (vector) => {
      let multipliedMatrix = [];
      for (var i = 0; i < 3; i++) {
        for (var cell = 0, j = 0; j < 3; j++)
          cell += this.cells[i][j] * vector[j];
        multipliedMatrix.push(cell);
      }
      return multipliedMatrix;
    };
    this.transpose = () => {
      let old = this.cells, transposedMatrix = new _Matrix(3, 3, [[], [], []]);
      for (let row = 0; row < 3; row++)
        for (let col = 0; col < 3; col++)
          transposedMatrix.cells[row][col] = this.cells[col][row];
      return transposedMatrix.cells;
    };
    this.getAdjMatrix = () => {
      let adjMatrixCells = [[], [], []], signedIndexes = [
        ["+", "-", "+"],
        ["-", "+", "-"],
        ["+", "-", "+"]
      ], cells = this.cells, otherIndexes = /* @__PURE__ */ new Map();
      otherIndexes.set(0, [1, 2]), otherIndexes.set(1, [0, 2]), otherIndexes.set(2, [0, 1]);
      for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++) {
          let determinant2D = new _Matrix(
            2,
            2,
            [
              [cells[otherIndexes.get(i)[0]][otherIndexes.get(j)[0]], cells[otherIndexes.get(i)[0]][otherIndexes.get(j)[1]]],
              [cells[otherIndexes.get(i)[1]][otherIndexes.get(j)[0]], cells[otherIndexes.get(i)[1]][otherIndexes.get(j)[1]]]
            ]
          ).get2dDeterminant();
          if (determinant2D !== null) {
            let signedAdj = signedIndexes[i][j] === "+" ? determinant2D : -determinant2D;
            adjMatrixCells[i][j] = signedAdj;
          }
        }
      return adjMatrixCells;
    };
    this.rows = rows, this.cols = cols, this.cells = cells;
  }
}, Matrix = _Matrix;
Matrix.translation = (tx, ty) => [
  [1, 0, tx],
  [0, 1, ty],
  [0, 0, 1]
], Matrix.scale = (sx, sy) => [
  [sx, 0, 0],
  [0, sy, 0],
  [0, 0, 1]
], Matrix.rotation = (angle) => {
  let angleRadians = angle * Math.PI / 180, cosTheta = Math.cos(angleRadians), sinTheta = Math.sin(angleRadians);
  return [
    [cosTheta, sinTheta, 0],
    [-sinTheta, cosTheta, 0],
    [0, 0, 1]
  ];
};

// app/components/mainButtons/RotateButton.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), RotateButton = ({ isRotationOn, onPress }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "button",
  {
    onClick: onPress,
    className: "flex flex-row bg-blue-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 h-4 items-center z-20",
    children: isRotationOn ? "Stop" : "Rotation"
  },
  void 0,
  !1,
  {
    fileName: "app/components/mainButtons/RotateButton.tsx",
    lineNumber: 8,
    columnNumber: 9
  },
  this
);

// app/components/mainButtons/ZoomButton.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), ZoomButton = ({ label, onPress }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "button",
  {
    onClick: onPress,
    className: "flex flex-row bg-blue-900 text-lg w-8 p-4 font-bold rounded-full text-white mx-2 h-8 justify-center items-center z-20",
    children: label
  },
  void 0,
  !1,
  {
    fileName: "app/components/mainButtons/ZoomButton.tsx",
    lineNumber: 8,
    columnNumber: 9
  },
  this
);

// app/components/mainButtons/ResetButton.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), ResetButton = ({ onPress }) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  "button",
  {
    onClick: onPress,
    className: "flex flex-row bg-red-700 text-sm w-fit p-2 font-bold rounded-xl text-white mx-2 place-self-center z-20",
    children: "Reset"
  },
  void 0,
  !1,
  {
    fileName: "app/components/mainButtons/ResetButton.tsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
);

// app/components/mainButtons/PlayButton.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), PlayButton = ({ isMoving, onPress }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  "button",
  {
    onClick: onPress,
    className: "flex flex-row bg-green-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 my-4 h-4 items-center z-20",
    children: [
      "Turn",
      isMoving ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#ffffff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("rect", { x: "6", y: "4", width: "4", height: "16" }, void 0, !1, {
          fileName: "app/components/mainButtons/PlayButton.tsx",
          lineNumber: 13,
          columnNumber: 190
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("rect", { x: "14", y: "4", width: "4", height: "16" }, void 0, !1, {
          fileName: "app/components/mainButtons/PlayButton.tsx",
          lineNumber: 13,
          columnNumber: 237
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/mainButtons/PlayButton.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#ffffff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("polygon", { points: "5 3 19 12 5 21 5 3" }, void 0, !1, {
        fileName: "app/components/mainButtons/PlayButton.tsx",
        lineNumber: 15,
        columnNumber: 190
      }, this) }, void 0, !1, {
        fileName: "app/components/mainButtons/PlayButton.tsx",
        lineNumber: 15,
        columnNumber: 17
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/mainButtons/PlayButton.tsx",
    lineNumber: 7,
    columnNumber: 9
  },
  this
);

// app/components/inputFields/OriginInput.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), OriginInput = ({ isTurning, onChange, placeholder }) => isTurning && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  "input",
  {
    type: "text",
    onChange: (x) => onChange(Number(x.target.value)),
    className: "flex w-9 border border-gray-500 mx-1 z-20 place-content-center text-center",
    placeholder
  },
  void 0,
  !1,
  {
    fileName: "app/components/inputFields/OriginInput.tsx",
    lineNumber: 9,
    columnNumber: 9
  },
  this
);

// app/components/watch/Watch.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), Watch = ({ timeZone }) => {
  let today = /* @__PURE__ */ new Date(), [hours, setHours] = (0, import_react5.useState)(getCorrectHour(today.getUTCHours(), timeZone)), [minutes, setMinutes] = (0, import_react5.useState)(today.getMinutes()), [seconds, setSeconds] = (0, import_react5.useState)(today.getSeconds()), [isLightOn, setIsLightOn] = (0, import_react5.useState)(!1), [formated24h, setFormated24h] = (0, import_react5.useState)(!0), [editHoursMode, setEditHoursMode] = (0, import_react5.useState)(!1), [editMinutesMode, setEditMinutesMode] = (0, import_react5.useState)(!1), [position, setPosition] = (0, import_react5.useState)(new Coordinates(1, 1)), [translationMatrix, setTranslationMatrix] = (0, import_react5.useState)(new Matrix(3, 3, Matrix.translation(0.05, 0.05))), [isTurning, setisTurning] = (0, import_react5.useState)(!1), [origin, setOrigin] = (0, import_react5.useState)(new Coordinates(1, 1)), [rotationAngle, setRotationAngle] = (0, import_react5.useState)(0), [rotationMatrix, setRotationMatrix] = (0, import_react5.useState)(new Matrix(3, 3, Matrix.rotation(0))), [isRotationOn, setIsRotationOn] = (0, import_react5.useState)(!1), [size, setSize] = (0, import_react5.useState)(new Coordinates(1, 1)), [scaleMatrix, setScaleMatrix] = (0, import_react5.useState)(new Matrix(3, 3, Matrix.scale(1, 1))), [animationMatrix, setAnimationMatrix] = (0, import_react5.useState)(new Matrix(3, 3, [[1, 0, 0], [0, 1, 0], [0, 0, 1]])), rotate = () => {
    setTimeout(() => {
      setRotationAngle((rotationAngle + 2) % 360), setRotationMatrix(new Matrix(3, 3, Matrix.rotation(rotationAngle))), setAnimationMatrix(new Matrix(3, 3, rotationMatrix.multiplyMatrix(scaleMatrix)));
    }, 50);
  }, zoomIn = () => {
    setSize(new Coordinates(size.x + 0.1, size.y + 0.1)), setScaleMatrix(new Matrix(3, 3, Matrix.scale(size.x, size.y))), setAnimationMatrix(new Matrix(3, 3, rotationMatrix.multiplyMatrix(scaleMatrix)));
  }, zoomOut = () => {
    setSize(new Coordinates(size.x - 0.1, size.y - 0.1)), setScaleMatrix(new Matrix(3, 3, Matrix.scale(size.x, size.y))), setAnimationMatrix(new Matrix(3, 3, rotationMatrix.multiplyMatrix(scaleMatrix)));
  }, turnAroundCoordinates = () => {
    setTimeout(() => {
      let rotationM = new Matrix(3, 3, Matrix.rotation(1)), newCoordinates = new Matrix(3, 3, rotationM.multiplyMatrix(translationMatrix)).multiplyVector([position.x, position.y, 1]);
      setPosition(new Coordinates(newCoordinates[0], newCoordinates[1]));
    }, 10);
  }, updateTime = () => {
    setTimeout(() => {
      increaseSeconds();
    }, 1e3), setTimeout(() => {
      increaseMinutes();
    }, 60 * 1e3), setTimeout(() => {
    }, 60 * 60 * 1e3);
  }, swithLight = () => {
    setIsLightOn(!isLightOn);
  }, increaseSeconds = () => {
    setSeconds((seconds + 1) % 60), seconds === 0 && setMinutes(minutes + 1);
  }, increaseMinutes = () => {
    setMinutes((minutes + 1) % 60), minutes === 0 && setHours(hours + 1);
  }, increaseHours = () => {
    setHours((hours + 1) % 24);
  }, increaseAccordingMode = () => {
    editHoursMode ? increaseHours() : editMinutesMode && increaseMinutes();
  }, changeMode = () => {
    !editHoursMode && !editMinutesMode && setEditHoursMode(!0), editHoursMode && (setEditMinutesMode(!0), setEditHoursMode(!1)), editMinutesMode && setEditMinutesMode(!1);
  }, resetTime = () => {
    setEditHoursMode(!1), setEditMinutesMode(!1), setHours(getCorrectHour(today.getUTCHours(), timeZone)), setMinutes(today.getMinutes()), setSeconds(today.getSeconds());
  }, resetAnimations = () => {
    setRotationAngle(0), setisTurning(!1), setIsRotationOn(!1), setSize(new Coordinates(1, 1)), setOrigin(new Coordinates(1, 1)), setPosition(new Coordinates(1, 1)), setScaleMatrix(new Matrix(3, 3, Matrix.scale(1, 1))), setRotationMatrix(new Matrix(3, 3, Matrix.rotation(0))), setAnimationMatrix(new Matrix(3, 3, [[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
  }, changeOriginX = (newCoordinate) => {
    setOrigin(new Coordinates(Number(newCoordinate), origin.y));
  }, changeOriginY = (newCoordinate) => {
    setOrigin(new Coordinates(origin.x, -Number(newCoordinate)));
  };
  return (0, import_react5.useEffect)(() => {
    isRotationOn && rotate(), isTurning && turnAroundCoordinates(), updateTime();
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col items-center m-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "div",
      {
        style: { left: `${position.x}rem`, top: `${position.y}rem`, transform: `matrix(${animationMatrix.cells[0][0]}, ${animationMatrix.cells[0][1]}, ${animationMatrix.cells[1][0]}, ${animationMatrix.cells[1][1]}, ${origin.x}, ${origin.y})` },
        className: "relative h-56 w-56 flex justify-center place-items-center ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: watch_image_default, className: "absolute h-full w-full" }, void 0, !1, {
            fileName: "app/components/watch/Watch.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "absolute top-16 text-black text-xs", children: [
            "GMT ",
            timeZone >= 0 ? `+${timeZone}` : `${timeZone}`
          ] }, void 0, !0, {
            fileName: "app/components/watch/Watch.tsx",
            lineNumber: 175,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(WatchButton, { className: "top-16 right-0 h-6 w-10 ", label: "MODE", onPress: () => changeMode() }, void 0, !1, {
            fileName: "app/components/watch/Watch.tsx",
            lineNumber: 178,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(WatchButton, { className: "top-32 left-0 h-5 w-10", label: "LIGHT", onPress: () => swithLight() }, void 0, !1, {
            fileName: "app/components/watch/Watch.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(WatchButton, { className: "bottom-16 right-16 h-4 w-8 bg-blue-600", label: "+1", onPress: () => increaseAccordingMode() }, void 0, !1, {
            fileName: "app/components/watch/Watch.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(WatchButton, { className: "bottom-16 left-16 h-4 w-12 bg-orange-500", label: "RESET", onPress: () => resetTime() }, void 0, !1, {
            fileName: "app/components/watch/Watch.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(WatchButton, { className: "right-2 h-6 w-8 top-32", label: "AM", onPress: () => setFormated24h(!formated24h) }, void 0, !1, {
            fileName: "app/components/watch/Watch.tsx",
            lineNumber: 182,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(TimeDisplay, { hours, seconds, minutes, isLightOn, editHoursMode, editMinutesMode, formated24h }, void 0, !1, {
            fileName: "app/components/watch/Watch.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 172,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-row h-6 items-center m-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(PlayButton, { isMoving: isTurning, onPress: () => setisTurning(!isTurning) }, void 0, !1, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 190,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(OriginInput, { isTurning, onChange: changeOriginX, placeholder: "x" }, void 0, !1, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 191,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(OriginInput, { isTurning, onChange: changeOriginY, placeholder: "y" }, void 0, !1, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 192,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/watch/Watch.tsx",
      lineNumber: 189,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-row items-center my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(RotateButton, { isRotationOn, onPress: () => setIsRotationOn(!isRotationOn) }, void 0, !1, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 196,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ZoomButton, { label: "+", onPress: () => zoomIn() }, void 0, !1, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 197,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ZoomButton, { label: "-", onPress: () => zoomOut() }, void 0, !1, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 198,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ResetButton, { onPress: () => resetAnimations() }, void 0, !1, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 198,
        columnNumber: 69
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/watch/Watch.tsx",
      lineNumber: 195,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/watch/Watch.tsx",
    lineNumber: 171,
    columnNumber: 9
  }, this);
};

// app/routes/_index.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Watch Exercise" }
];
function Index() {
  let [timeZonesList, setTimeZoneList] = (0, import_react6.useState)([0]), [isDropDownDisplayed, setIsDropDownDisplayed] = (0, import_react6.useState)(!1), [isDropDownOpened, setIsDropDownOpened] = (0, import_react6.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "m-4 p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-row ", children: [
      " ",
      isDropDownDisplayed ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(CancelButton, { onPress: () => {
        setIsDropDownDisplayed(!1), setIsDropDownOpened(!1);
      } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        NewWatchButton,
        {
          onPress: () => setIsDropDownDisplayed(!0)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 37,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    isDropDownDisplayed ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      TimeZonesList,
      {
        onPress: () => setIsDropDownOpened(!isDropDownOpened),
        isOpen: isDropDownOpened,
        onChooseTimeZone: (timeZone) => {
          setTimeZoneList(timeZonesList.concat(timeZone)), setIsDropDownOpened(!1), setIsDropDownDisplayed(!1);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20", children: timeZonesList.map((timeZone, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Watch, { timeZone }, index, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 53,
      columnNumber: 49
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EK4ZBNPQ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-5ZLGJ2ZF.js", "/build/_shared/chunk-PMU7QF3Q.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SB3FCICH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-6HO5GXUA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "58936714", hmr: { runtime: "/build/_shared/chunk-PMU7QF3Q.js", timestamp: 1724336697151 }, url: "/build/manifest-58936714.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
