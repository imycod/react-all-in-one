import { useEffect, useState } from "react";

export default function QuaterTimeConfig() {
  const [query, setQuery] = useState("Q");

  const [basCycleOptions] = useState([
    { value: "Q", label: "季度考核" },
    { value: "Y", label: "年度考核" },
    { value: "H", label: "半年度考核" },
    { value: "M", label: "月度考核" },
  ]);
  const [basQuaterOptions, setQuarterOption] = useState([]);

  function setBasQuarterOptions(prop: string) {
    const optionConfig = {
      Q: [
        { value: "Q1", label: "Q1" },
        { value: "Q2", label: "Q2" },
        { value: "Q3", label: "Q3" },
        { value: "Q4", label: "Q4" },
      ],
      M: [
        { value: "M1", label: "M1" },
        { value: "M2", label: "M2" },
      ],
      H: [
        { value: "H1", label: "H1" },
        { value: "H2", label: "H2" },
      ],
      Y: [{ value: "Y", label: "Y" }],
    };

    setQuarterOption(optionConfig[prop]);
  }
  useEffect(() => {
    setBasQuarterOptions("Q");
  }, []);

  function setOption(options) {
    return options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  }

  useEffect(() => {
    console.log(111);
    console.log(query);
  }, [query]);

  const model = [
    {
      type: "select",
      prop: "timeType",
      options: setOption(basCycleOptions),
      label: "考核周期",
      onchange: (event) => {
        const value = event.target.value;
        setQuery(value);
        console.log(value);
        console.log(2222);
        console.log(query);
        setBasQuarterOptions(value);
      },
    },
    {
      type: "select",
      prop: "quarter",
      options: setOption(basQuaterOptions),
      label: "考核时间",
      onchange: (event) => {
        const value = event.target.value;
        setQuery(value);
      },
    },
  ];

  return (
    <div>
      {model.map((item) => {
        if (item.type === "select") {
          return (
            <select
              key={item.prop}
              value={query[item.prop]}
              onChange={item.onchange}>
              {item.options}
            </select>
          );
        }
        return null;
      })}
    </div>
  );
}
