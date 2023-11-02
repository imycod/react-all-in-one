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

  function getIndex(key: string) {
    const date = new Date();
    const month = date.getMonth() + 1;
    const periods = {
      Q: {
        // 季度考核
        divisor: 3,
        round: Math.ceil,
      },
      H: {
        // 半年度考核
        divisor: 6,
        round: Math.ceil,
      },
      M: {
        // 月度考核
        divisor: 1,
        round: Math.round,
      },
      Y: {
        // 年度
        divisor: null,
        round: null,
      },
    };
    const period = periods[key];
    let index = 0;
    if (period.divisor) {
      index = period.round(month / period.divisor); // -1 看你model options的value是从0开始还是从1开始
    }
    return index;
  }

  //   function generateMonthOptions() {
  //     const ls = [];
  //     for (let i = 0; i < 12; i++) {
  //       const obj = {
  //         index: `${i}`,
  //         label: `M${i + 1}`,
  //       };
  //       ls.push(obj);
  //     }
  //     return ls;
  //   }

  useEffect(() => {
    console.log('query',query);
    // const index = getIndex(query);
    // console.log( query['quarter']);
    // query['quarter'] = query + index 
    // setQuery(query + index)
    // console.log(index);
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
        // const index = getIndex(value);
        // console.log(value + index);
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
