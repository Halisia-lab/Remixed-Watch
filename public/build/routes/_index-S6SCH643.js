import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-IDVHFTXG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_react4 = __toESM(require_react());

// app/components/mainButtons/CancelButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/mainButtons/CancelButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/mainButtons/CancelButton.tsx"
  );
  import.meta.hot.lastModified = "1693869797837.9058";
}
var CancelButton = ({
  onPress
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onPress, className: "flex flex-row bg-orange-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 z-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "mr-2", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#ffffff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "12", r: "10" }, void 0, false, {
        fileName: "app/components/mainButtons/CancelButton.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "15", y1: "9", x2: "9", y2: "15" }, void 0, false, {
        fileName: "app/components/mainButtons/CancelButton.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "9", y1: "9", x2: "15", y2: "15" }, void 0, false, {
        fileName: "app/components/mainButtons/CancelButton.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/mainButtons/CancelButton.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    "Cancel"
  ] }, void 0, true, {
    fileName: "app/components/mainButtons/CancelButton.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c = CancelButton;
var _c;
$RefreshReg$(_c, "CancelButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/mainButtons/NewWatchButton.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/mainButtons/NewWatchButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/mainButtons/NewWatchButton.tsx"
  );
  import.meta.hot.lastModified = "1693869805333.356";
}
var NewWatchButton = ({
  onPress
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: onPress, className: "flex flex-row bg-yellow-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 z-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "mr-2", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "#ffffff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: "12", cy: "12", r: "10" }, void 0, false, {
        fileName: "app/components/mainButtons/NewWatchButton.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("line", { x1: "12", y1: "8", x2: "12", y2: "16" }, void 0, false, {
        fileName: "app/components/mainButtons/NewWatchButton.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("line", { x1: "8", y1: "12", x2: "16", y2: "12" }, void 0, false, {
        fileName: "app/components/mainButtons/NewWatchButton.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/mainButtons/NewWatchButton.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    "New watch"
  ] }, void 0, true, {
    fileName: "app/components/mainButtons/NewWatchButton.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c2 = NewWatchButton;
var _c2;
$RefreshReg$(_c2, "NewWatchButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/watch/TimeZonesList.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/watch/TimeZonesList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/watch/TimeZonesList.tsx"
  );
  import.meta.hot.lastModified = "1694610634994.2458";
}
var TimeZonesList = ({
  onChooseTimeZone
}) => {
  _s();
  const [isOpened, setIsOpened] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute z-50 dropdown border w-fit my-4 p-3 bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => setIsOpened(!isOpened), className: "flex flex-row text-blue-500 text-lg", children: [
      "Choose time zone",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#4a90e2", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M6 9l6 6 6-6" }, void 0, false, {
        fileName: "app/components/watch/TimeZonesList.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/watch/TimeZonesList.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/watch/TimeZonesList.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    isOpened ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "menu", children: [...Array(20)].map((x, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "border-b py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => onChooseTimeZone(i), children: [
      "GMT+",
      i
    ] }, void 0, true, {
      fileName: "app/components/watch/TimeZonesList.tsx",
      lineNumber: 36,
      columnNumber: 85
    }, this) }, i, false, {
      fileName: "app/components/watch/TimeZonesList.tsx",
      lineNumber: 36,
      columnNumber: 47
    }, this)) }, void 0, false, {
      fileName: "app/components/watch/TimeZonesList.tsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/watch/TimeZonesList.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_s(TimeZonesList, "9ncJBgm3/jnwyg5t+wlOFkVYK9k=");
_c3 = TimeZonesList;
var _c3;
$RefreshReg$(_c3, "TimeZonesList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/watch/Watch.tsx
var import_react3 = __toESM(require_react());

// app/components/watch/TimeDisplayer.tsx
var import_react2 = __toESM(require_react());

// app/utils/formatNumber.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/formatNumber.ts"
  );
  import.meta.hot.lastModified = "1693729432356.8706";
}
var formatNumber = (potentiallySingleNumber) => {
  return potentiallySingleNumber < 10 ? `0${potentiallySingleNumber}` : `${potentiallySingleNumber}`;
};

// app/utils/switchHourFormat.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/switchHourFormat.ts"
  );
  import.meta.hot.lastModified = "1693619596054.6304";
}
var switchHourFormat = (formated24h, hours) => {
  if (!formated24h && hours > 12) {
    return hours - 12;
  } else {
    return hours;
  }
};

// app/utils/getAmOrPm.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/getAmOrPm.ts"
  );
  import.meta.hot.lastModified = "1693619514472.3103";
}
var getAmOrPm = (hours) => {
  return hours >= 12 ? "PM" : "AM";
};

// app/components/watch/TimeDisplayer.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/watch/TimeDisplayer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/watch/TimeDisplayer.tsx"
  );
  import.meta.hot.lastModified = "1693681737457.7214";
}
var TimeDisplay = ({
  hours,
  minutes,
  seconds,
  isLightOn,
  editHoursMode,
  editMinutesMode,
  formated24h
}) => {
  _s2();
  const editMode = editHoursMode || editMinutesMode;
  const [formatedHours, setFormatedHours] = (0, import_react2.useState)(hours);
  (0, import_react2.useEffect)(() => {
    setFormatedHours(switchHourFormat(formated24h, hours));
  }, [formated24h, hours]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `${isLightOn ? "items-center flex-row bg-yellow-300 shadow-2xl shadow-yellow-300" : " bg-white"} text-black flex w-28 h-fit rounded-sm justify-center px-7 py-4 relative border border-black`, children: [
    editMode && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "absolute top-0 left-1 text-xs", children: "EDIT" }, void 0, false, {
      fileName: "app/components/watch/TimeDisplayer.tsx",
      lineNumber: 42,
      columnNumber: 26
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: `${editHoursMode ? " animate-pulse text-gray-600" : ""}`, children: formatNumber(formatedHours) }, void 0, false, {
      fileName: "app/components/watch/TimeDisplayer.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    ": ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: `${editMinutesMode ? " animate-pulse text-gray-600" : ""}`, children: formatNumber(minutes) }, void 0, false, {
      fileName: "app/components/watch/TimeDisplayer.tsx",
      lineNumber: 46,
      columnNumber: 15
    }, this),
    ":",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: formatNumber(seconds) }, void 0, false, {
      fileName: "app/components/watch/TimeDisplayer.tsx",
      lineNumber: 47,
      columnNumber: 14
    }, this),
    !formated24h && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-xs", children: getAmOrPm(hours) }, void 0, false, {
      fileName: "app/components/watch/TimeDisplayer.tsx",
      lineNumber: 48,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/watch/TimeDisplayer.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s2(TimeDisplay, "6PWp7Zg49TEai3Lo9iaergE3zjA=");
_c4 = TimeDisplay;
var _c4;
$RefreshReg$(_c4, "TimeDisplay");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/watch/WatchButton.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/watch/WatchButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/watch/WatchButton.tsx"
  );
  import.meta.hot.lastModified = "1693870089418.6907";
}
var WatchButton = ({
  label,
  className,
  onPress
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: `${className} absolute rounded-2xl bg-black h-10 w-14 text-xs flex place-items-center justify-center text-white`, onClick: onPress, children: label }, void 0, false, {
    fileName: "app/components/watch/WatchButton.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c5 = WatchButton;
var _c5;
$RefreshReg$(_c5, "WatchButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/getCorrectHour.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/getCorrectHour.ts"
  );
  import.meta.hot.lastModified = "1693618298217.312";
}
var getCorrectHour = (hour, timeZone) => {
  return (hour + timeZone) % 24;
};

// public/images/watch_image.jpg
var watch_image_default = "/build/_assets/watch_image-HBQ2Z2XT.jpg";

// app/models/Coordinates.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/models/Coordinates.ts"
  );
  import.meta.hot.lastModified = "1694354405903.6863";
}
var Coordinates = class {
  constructor(x, y) {
    this.transform = (number) => {
      return new Coordinates(this.x + number, this.y + number);
    };
    this.x = x;
    this.y = y;
  }
};

// app/models/Matrix.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/models/Matrix.ts"
  );
  import.meta.hot.lastModified = "1694354148623.0164";
}
var _Matrix = class {
  constructor(rows, cols, cells) {
    this.get2dDeterminant = () => {
      return this.rows === 2 && this.cols === 2 ? this.cells[0][0] * this.cells[1][1] - this.cells[0][1] * this.cells[1][0] : null;
    };
    this.get3dDeterminant = () => {
      if (this.rows !== 3 || this.cols !== 3)
        return null;
      const cells = this.cells;
      var determinant = 0;
      const otherIndexes = /* @__PURE__ */ new Map();
      otherIndexes.set(0, [1, 2]);
      otherIndexes.set(1, [0, 2]);
      otherIndexes.set(2, [0, 1]);
      for (let i = 0; i < 3; i++) {
        const matrix2d = new _Matrix(2, 2, [[cells[1][otherIndexes.get(i)[0]], cells[1][otherIndexes.get(i)[1]]], [cells[2][otherIndexes.get(i)[0]], cells[2][otherIndexes.get(i)[1]]]]);
        const determinant2D = matrix2d.get2dDeterminant();
        if (determinant2D !== null) {
          const Adj = determinant2D * cells[0][i];
          const signedAdj = i % 2 === 0 ? Adj : -Adj;
          determinant += signedAdj;
        }
      }
      return determinant;
    };
    this.getInverse = () => {
      if (this.get3dDeterminant() === 0 || this.get3dDeterminant === null) {
        return null;
      } else {
        const transposedMatrix = new _Matrix(3, 3, this.transpose());
        const adjMatrix = new _Matrix(3, 3, transposedMatrix.getAdjMatrix());
        return adjMatrix.muliplyWithNumber(this.get3dDeterminant());
      }
    };
    this.muliplyWithNumber = (number) => {
      const multipliedMatrix = this.cells;
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          multipliedMatrix[i][j] = this.cells[i][j] * number;
        }
      }
      return multipliedMatrix;
    };
    this.multiplyMatrix = (matrix) => {
      if (this.cells.length !== matrix.cells[0].length)
        return null;
      const multipliedMatrix = new _Matrix(3, 3, [[], [], []]);
      const cells = multipliedMatrix.cells;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          cells[i][j] = this.cells[i][0] * matrix.cells[0][j] + this.cells[i][1] * matrix.cells[1][j] + this.cells[i][2] * matrix.cells[2][j];
        }
      }
      return cells;
    };
    this.multiplyVector = (vector) => {
      const multipliedMatrix = [];
      for (var i = 0; i < 3; i++) {
        var cell = 0;
        for (var j = 0; j < 3; j++) {
          cell += this.cells[i][j] * vector[j];
        }
        multipliedMatrix.push(cell);
      }
      return multipliedMatrix;
    };
    this.transpose = () => {
      const old = this.cells;
      const transposedMatrix = new _Matrix(3, 3, [[], [], []]);
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          transposedMatrix.cells[row][col] = this.cells[col][row];
        }
      }
      return transposedMatrix.cells;
    };
    this.getAdjMatrix = () => {
      let adjMatrixCells = [[], [], []];
      const signedIndexes = [
        ["+", "-", "+"],
        ["-", "+", "-"],
        ["+", "-", "+"]
      ];
      const cells = this.cells;
      const otherIndexes = /* @__PURE__ */ new Map();
      otherIndexes.set(0, [1, 2]);
      otherIndexes.set(1, [0, 2]);
      otherIndexes.set(2, [0, 1]);
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const matrix2d = new _Matrix(
            2,
            2,
            [
              [cells[otherIndexes.get(i)[0]][otherIndexes.get(j)[0]], cells[otherIndexes.get(i)[0]][otherIndexes.get(j)[1]]],
              [cells[otherIndexes.get(i)[1]][otherIndexes.get(j)[0]], cells[otherIndexes.get(i)[1]][otherIndexes.get(j)[1]]]
            ]
          );
          let determinant2D = matrix2d.get2dDeterminant();
          if (determinant2D !== null) {
            const signedAdj = signedIndexes[i][j] === "+" ? determinant2D : -determinant2D;
            adjMatrixCells[i][j] = signedAdj;
          }
        }
      }
      return adjMatrixCells;
    };
    this.rows = rows;
    this.cols = cols;
    this.cells = cells;
  }
};
var Matrix = _Matrix;
Matrix.translation = (tx, ty) => {
  return [
    [1, 0, tx],
    [0, 1, ty],
    [0, 0, 1]
  ];
};
Matrix.scale = (sx, sy) => {
  return [
    [sx, 0, 0],
    [0, sy, 0],
    [0, 0, 1]
  ];
};
Matrix.rotation = (angle) => {
  const angleRadians = angle * Math.PI / 180;
  const cosTheta = Math.cos(angleRadians);
  const sinTheta = Math.sin(angleRadians);
  return [
    [cosTheta, sinTheta, 0],
    [-sinTheta, cosTheta, 0],
    [0, 0, 1]
  ];
};

// app/components/mainButtons/RotateButton.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/mainButtons/RotateButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/mainButtons/RotateButton.tsx"
  );
  import.meta.hot.lastModified = "1693869982740.8313";
}
var RotateButton = ({
  isRotationOn,
  onPress
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { onClick: onPress, className: "flex flex-row bg-blue-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 h-4 items-center z-20", children: isRotationOn ? "Stop" : "Rotation" }, void 0, false, {
    fileName: "app/components/mainButtons/RotateButton.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c6 = RotateButton;
var _c6;
$RefreshReg$(_c6, "RotateButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/mainButtons/ZoomButton.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/mainButtons/ZoomButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/mainButtons/ZoomButton.tsx"
  );
  import.meta.hot.lastModified = "1693870011571.134";
}
var ZoomButton = ({
  label,
  onPress
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { onClick: onPress, className: "flex flex-row bg-blue-900 text-lg w-8 p-4 font-bold rounded-full text-white mx-2 h-8 justify-center items-center z-20", children: label }, void 0, false, {
    fileName: "app/components/mainButtons/ZoomButton.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c7 = ZoomButton;
var _c7;
$RefreshReg$(_c7, "ZoomButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/mainButtons/ResetButton.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/mainButtons/ResetButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/mainButtons/ResetButton.tsx"
  );
  import.meta.hot.lastModified = "1693869947146.1846";
}
var ResetButton = ({
  onPress
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { onClick: onPress, className: "flex flex-row bg-red-700 text-sm w-fit p-2 font-bold rounded-xl text-white mx-2 place-self-center z-20", children: "Reset" }, void 0, false, {
    fileName: "app/components/mainButtons/ResetButton.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c8 = ResetButton;
var _c8;
$RefreshReg$(_c8, "ResetButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/mainButtons/PlayButton.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/mainButtons/PlayButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/mainButtons/PlayButton.tsx"
  );
  import.meta.hot.lastModified = "1693869922132.6008";
}
var PlayButton = ({
  isMoving,
  onPress
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: onPress, className: "flex flex-row bg-green-500 text-sm w-fit p-4 font-bold rounded-xl text-white mx-2 my-4 h-4 items-center z-20", children: [
    "Turn",
    isMoving ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#ffffff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("rect", { x: "6", y: "4", width: "4", height: "16" }, void 0, false, {
        fileName: "app/components/mainButtons/PlayButton.tsx",
        lineNumber: 27,
        columnNumber: 198
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("rect", { x: "14", y: "4", width: "4", height: "16" }, void 0, false, {
        fileName: "app/components/mainButtons/PlayButton.tsx",
        lineNumber: 27,
        columnNumber: 245
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/mainButtons/PlayButton.tsx",
      lineNumber: 27,
      columnNumber: 25
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#ffffff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("polygon", { points: "5 3 19 12 5 21 5 3" }, void 0, false, {
      fileName: "app/components/mainButtons/PlayButton.tsx",
      lineNumber: 27,
      columnNumber: 475
    }, this) }, void 0, false, {
      fileName: "app/components/mainButtons/PlayButton.tsx",
      lineNumber: 27,
      columnNumber: 302
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/mainButtons/PlayButton.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c9 = PlayButton;
var _c9;
$RefreshReg$(_c9, "PlayButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/inputFields/OriginInput.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/inputFields/OriginInput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/inputFields/OriginInput.tsx"
  );
  import.meta.hot.lastModified = "1693870463705.11";
}
var OriginInput = ({
  isTurning,
  onChange,
  placeholder
}) => {
  return isTurning && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", onChange: (x) => onChange(Number(x.target.value)), className: "flex w-9 border border-gray-500 mx-1 z-20 place-content-center text-center", placeholder }, void 0, false, {
    fileName: "app/components/inputFields/OriginInput.tsx",
    lineNumber: 26,
    columnNumber: 23
  }, this);
};
_c10 = OriginInput;
var _c10;
$RefreshReg$(_c10, "OriginInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/watch/Watch.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/watch/Watch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/watch/Watch.tsx"
  );
  import.meta.hot.lastModified = "1694353075685.9287";
}
var Watch = ({
  timeZone
}) => {
  _s3();
  const today = /* @__PURE__ */ new Date();
  const [hours, setHours] = (0, import_react3.useState)(getCorrectHour(today.getUTCHours(), timeZone));
  const [minutes, setMinutes] = (0, import_react3.useState)(today.getMinutes());
  const [seconds, setSeconds] = (0, import_react3.useState)(today.getSeconds());
  const [isLightOn, setIsLightOn] = (0, import_react3.useState)(false);
  const [formated24h, setFormated24h] = (0, import_react3.useState)(true);
  const [editHoursMode, setEditHoursMode] = (0, import_react3.useState)(false);
  const [editMinutesMode, setEditMinutesMode] = (0, import_react3.useState)(false);
  const [position, setPosition] = (0, import_react3.useState)(new Coordinates(1, 1));
  const [translationMatrix, setTranslationMatrix] = (0, import_react3.useState)(new Matrix(3, 3, Matrix.translation(0.05, 0.05)));
  const [isTurning, setisTurning] = (0, import_react3.useState)(false);
  const [origin, setOrigin] = (0, import_react3.useState)(new Coordinates(1, 1));
  const [rotationAngle, setRotationAngle] = (0, import_react3.useState)(0);
  const [rotationMatrix, setRotationMatrix] = (0, import_react3.useState)(new Matrix(3, 3, Matrix.rotation(0)));
  const [isRotationOn, setIsRotationOn] = (0, import_react3.useState)(false);
  const [size, setSize] = (0, import_react3.useState)(new Coordinates(1, 1));
  const [scaleMatrix, setScaleMatrix] = (0, import_react3.useState)(new Matrix(3, 3, Matrix.scale(1, 1)));
  const [animationMatrix, setAnimationMatrix] = (0, import_react3.useState)(new Matrix(3, 3, [[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
  const rotate = () => {
    setTimeout(() => {
      setRotationAngle((rotationAngle + 2) % 360);
      setRotationMatrix(new Matrix(3, 3, Matrix.rotation(rotationAngle)));
      setAnimationMatrix(new Matrix(3, 3, rotationMatrix.multiplyMatrix(scaleMatrix)));
    }, 50);
  };
  const zoomIn = () => {
    setSize(new Coordinates(size.x + 0.1, size.y + 0.1));
    setScaleMatrix(new Matrix(3, 3, Matrix.scale(size.x, size.y)));
    setAnimationMatrix(new Matrix(3, 3, rotationMatrix.multiplyMatrix(scaleMatrix)));
  };
  const zoomOut = () => {
    setSize(new Coordinates(size.x - 0.1, size.y - 0.1));
    setScaleMatrix(new Matrix(3, 3, Matrix.scale(size.x, size.y)));
    setAnimationMatrix(new Matrix(3, 3, rotationMatrix.multiplyMatrix(scaleMatrix)));
  };
  const turnAroundCoordinates = () => {
    setTimeout(() => {
      const rotationM = new Matrix(3, 3, Matrix.rotation(1));
      const newCoordinates = new Matrix(3, 3, rotationM.multiplyMatrix(translationMatrix)).multiplyVector([position.x, position.y, 1]);
      setPosition(new Coordinates(newCoordinates[0], newCoordinates[1]));
    }, 10);
  };
  const updateTime = () => {
    setTimeout(() => {
      increaseSeconds();
    }, 1e3);
    setTimeout(() => {
      increaseMinutes();
    }, 60 * 1e3);
    setTimeout(() => {
      increaseHours;
    }, 60 * 60 * 1e3);
  };
  const swithLight = () => {
    setIsLightOn(!isLightOn);
  };
  const increaseSeconds = () => {
    setSeconds((seconds + 1) % 60);
    if (seconds === 0) {
      setMinutes(minutes + 1);
    }
  };
  const increaseMinutes = () => {
    setMinutes((minutes + 1) % 60);
    if (minutes === 0) {
      setHours(hours + 1);
    }
  };
  const increaseHours = () => {
    setHours((hours + 1) % 24);
  };
  const increaseAccordingMode = () => {
    if (editHoursMode)
      increaseHours();
    else if (editMinutesMode)
      increaseMinutes();
  };
  const changeMode = () => {
    if (!editHoursMode && !editMinutesMode) {
      setEditHoursMode(true);
    }
    if (editHoursMode) {
      setEditMinutesMode(true);
      setEditHoursMode(false);
    }
    ;
    if (editMinutesMode) {
      setEditMinutesMode(false);
    }
  };
  const resetTime = () => {
    setEditHoursMode(false);
    setEditMinutesMode(false);
    setHours(getCorrectHour(today.getUTCHours(), timeZone));
    setMinutes(today.getMinutes());
    setSeconds(today.getSeconds());
  };
  const resetAnimations = () => {
    setRotationAngle(0);
    setisTurning(false);
    setIsRotationOn(false);
    setSize(new Coordinates(1, 1));
    setOrigin(new Coordinates(1, 1));
    setPosition(new Coordinates(1, 1));
    setScaleMatrix(new Matrix(3, 3, Matrix.scale(1, 1)));
    setRotationMatrix(new Matrix(3, 3, Matrix.rotation(0)));
    setAnimationMatrix(new Matrix(3, 3, [[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
  };
  const changeOriginX = (newCoordinate) => {
    setOrigin(new Coordinates(Number(newCoordinate), origin.y));
  };
  const changeOriginY = (newCoordinate) => {
    setOrigin(new Coordinates(origin.x, -Number(newCoordinate)));
  };
  (0, import_react3.useEffect)(() => {
    if (isRotationOn) {
      rotate();
    }
    if (isTurning) {
      turnAroundCoordinates();
    }
    updateTime();
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-col items-center m-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: {
      left: `${position.x}rem`,
      top: `${position.y}rem`,
      transform: `matrix(${animationMatrix.cells[0][0]}, ${animationMatrix.cells[0][1]}, ${animationMatrix.cells[1][0]}, ${animationMatrix.cells[1][1]}, ${origin.x}, ${origin.y})`
    }, className: `relative h-56 w-56 flex justify-center place-items-center `, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: watch_image_default, className: "absolute h-full w-full" }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 174,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { className: "absolute top-16 text-black text-xs", children: [
        "GMT+ ",
        timeZone
      ] }, void 0, true, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 175,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(WatchButton, { className: "top-16 right-0 h-6 w-10 ", label: "MODE", onPress: () => changeMode() }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 178,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(WatchButton, { className: "top-32 left-0 h-5 w-10", label: "LIGHT", onPress: () => swithLight() }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 179,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(WatchButton, { className: "bottom-16 right-16 h-4 w-8 bg-blue-600", label: "+1", onPress: () => increaseAccordingMode() }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 180,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(WatchButton, { className: "bottom-16 left-16 h-4 w-12 bg-orange-500", label: "RESET", onPress: () => resetTime() }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 181,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(WatchButton, { className: "right-2 h-6 w-8 top-32", label: "AM", onPress: () => setFormated24h(!formated24h) }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 182,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(TimeDisplay, { hours, seconds, minutes, isLightOn, editHoursMode, editMinutesMode, formated24h }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 185,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/watch/Watch.tsx",
      lineNumber: 169,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row h-6 items-center m-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(PlayButton, { isMoving: isTurning, onPress: () => setisTurning(!isTurning) }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 190,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(OriginInput, { isTurning, onChange: changeOriginX, placeholder: "x" }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 191,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(OriginInput, { isTurning, onChange: changeOriginY, placeholder: "y" }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 192,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/watch/Watch.tsx",
      lineNumber: 189,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row items-center my-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(RotateButton, { isRotationOn, onPress: () => setIsRotationOn(!isRotationOn) }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 196,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ZoomButton, { label: "+", onPress: () => zoomIn() }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 197,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ZoomButton, { label: "-", onPress: () => zoomOut() }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 198,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ResetButton, { onPress: () => resetAnimations() }, void 0, false, {
        fileName: "app/components/watch/Watch.tsx",
        lineNumber: 198,
        columnNumber: 69
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/watch/Watch.tsx",
      lineNumber: 195,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/watch/Watch.tsx",
    lineNumber: 168,
    columnNumber: 10
  }, this);
};
_s3(Watch, "yAPl02CtTg5zLPKww5SMfJOWo+I=");
_c11 = Watch;
var _c11;
$RefreshReg$(_c11, "Watch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1693870164079.1462";
}
var meta = () => {
  return [{
    title: "Watch Exercise"
  }];
};
function Index() {
  _s4();
  const [timeZonesList, setTimeZoneList] = (0, import_react4.useState)([0]);
  const [isDropDownDisplayed, setIsDropDownDisplayed] = (0, import_react4.useState)(false);
  const [isDropDownOpened, setIsDropDownOpened] = (0, import_react4.useState)(false);
  const createWatch = (timeZone) => {
    setTimeZoneList(timeZonesList.concat(timeZone));
    setIsDropDownOpened(false);
    setIsDropDownDisplayed(false);
  };
  const hideDropDown = () => {
    setIsDropDownDisplayed(false);
    setIsDropDownOpened(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "m-4 p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row ", children: [
      " ",
      isDropDownDisplayed ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(CancelButton, { onPress: hideDropDown }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 63
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(NewWatchButton, { onPress: () => setIsDropDownDisplayed(true) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 105
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    isDropDownDisplayed ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TimeZonesList, { onPress: () => setIsDropDownOpened(!isDropDownOpened), isOpen: isDropDownOpened, onChooseTimeZone: createWatch }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 162
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20", children: timeZonesList.map((timeZone, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Watch, { timeZone }, index, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 58,
      columnNumber: 49
    }, this)) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s4(Index, "J/4+gV1NvKvbWFB1WMwxUGl2o80=");
_c12 = Index;
var _c12;
$RefreshReg$(_c12, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-S6SCH643.js.map
