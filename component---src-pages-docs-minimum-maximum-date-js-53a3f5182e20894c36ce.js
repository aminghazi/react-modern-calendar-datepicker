(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"44TC":function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),m=n.n(t),r=n("72SN"),c=n("dgKS"),l=n("Kvkj");a.default=function(){var e=Object(t.useState)(null),a=e[0],n=e[1],o=Object(t.useState)({year:2019,month:4,day:15}),s=o[0],i=o[1];return m.a.createElement(c.a,{title:"Minimum & Maximum Date"},m.a.createElement("p",null,"There are many cases where you want to somehow limit the user to choose a day in a appropriate range. That's when ",m.a.createElement("code",{className:"custom-code"},"minimumDate")," and ",m.a.createElement("code",{className:"custom-code"},"mximumDate")," props come in handy. Here are some examples:"),m.a.createElement("h2",{className:"Docs__titleSecondary"},"Limiting from Today"),m.a.createElement("div",{className:"Docs__sampleContainer"},m.a.createElement(l.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-modern-calendar-datepicker/lib/DatePicker.css";\nimport { Calendar, utils } from "react-modern-calendar-datepicker";\n\nconst App = () => {\n  const [selectedDay, setSelectedDay] = useState(null);\n  return (\n    <Calendar\n      value={selectedDay}\n      onChange={setSelectedDay}\n      minimumDate={utils().getToday()}\n      shouldHighlightWeekends\n    />\n  );\n};\n\nexport default App;\n\n          '),m.a.createElement(r.Calendar,{calendarClassName:"fontWrapper",value:a,inputPlaceholder:"Select a date",onChange:n,minimumDate:Object(r.utils)().getToday(),shouldHighlightWeekends:!0})),m.a.createElement("h2",{className:"Docs__titleSecondary"},"Specifying Both Minimum and Maximum"),m.a.createElement("div",{className:"Docs__sampleContainer"},m.a.createElement(l.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-modern-calendar-datepicke/lib/DatePicker.css";\nimport { Calendar } from "react-modern-calendar-datepicke";\n\nconst App = () => {\n  const defaultValue = {\n    year: 2019,\n    month: 4,\n    day: 15\n  };\n\n  const minimumDate = {\n    year: 2019,\n    month: 4,\n    day: 10\n  };\n\n  const maximumDate = {\n    year: 2019,\n    month: 4,\n    day: 21\n  }\n\n  const [selectedDay, setSelectedDay] = useState(\n    defaultValue\n  );\n  return (\n    <Calendar\n      value={selectedDay}\n      onChange={setSelectedDay}\n      minimumDate={minimumDate}\n      maximumDate={maximumDate}\n      shouldHighlightWeekends\n    />\n  );\n};\n\nexport default App;\n\n          '),m.a.createElement(r.Calendar,{calendarClassName:"fontWrapper",value:s,onChange:i,minimumDate:{year:2019,month:4,day:10},maximumDate:{year:2019,month:4,day:21},shouldHighlightWeekends:!0})))}}}]);
//# sourceMappingURL=component---src-pages-docs-minimum-maximum-date-js-53a3f5182e20894c36ce.js.map