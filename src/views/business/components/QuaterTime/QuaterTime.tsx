import { useState, ChangeEvent } from "react";

export default function QuaterTime() {
  const [timeType, setTimeType] = useState();
  const [timeOption] = useState([
    { value: "Q", label: "季度考核" },
    { value: "Y", label: "年度考核" },
  ]);

  const [quater, setQuater] = useState();
  const optionConfig = {
    quater: [
      { value: "Q1", label: "Q1" },
      { value: "Q2", label: "Q2" },
      { value: "Q3", label: "Q3" },
      { value: "Q4", label: "Q4" },
    ],
  };
  const [quaterOption, setQuarterOption] = useState(optionConfig.quater);

  const handleTimeTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTimeType = event.target.value as string;
    setTimeType(selectedTimeType);

    if (selectedTimeType === "Q") {
      setQuarterOption(optionConfig.quater);
    } else if (selectedTimeType === "Y") {
      setQuarterOption([{ value: "Y", label: "Y" }]);
    }
  };

  return (
    <div>
      <label>
        考核时间类型：
        <select value={timeType} onChange={handleTimeTypeChange}>
          {timeOption.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        考核季度：
        <select
          value={quater}
          onChange={(event) => setQuater(event.target.value)}>
          {quaterOption.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
