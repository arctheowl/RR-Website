import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./Container";
import backgroundImage from "../images/background-features.jpg";

const MobileCalc = () => {
  const [people, setPeople] = useState(4);
  const [frequency, setFrequency] = useState(2);
  const [timePeriod, setTimePeriod] = useState("Week");
  const [timeTaken, setTimeTaken] = useState(3);
  const [length, setLength] = useState("hours");
  const [salary, setSalary] = useState(40);
  const [savings, setSavings] = useState(0);

  const handleChange = (event: any, type: string) => {
    if (type === "people") {
      setPeople(event.target.value);
    } else if (type === "frequency") {
      setFrequency(event.target.value);
    } else if (type === "salary") {
      setSalary(event.target.value);
    } else if (type === "timeTaken") {
      setTimeTaken(event.target.value);
    }
  };

  useEffect(() => {
    switch (timePeriod) {
      case "Day":
        switch (length) {
          case "hours":
            setSavings(
              (salary / 52 / 40) * people * frequency * timeTaken * 1000 * 20
            );
            break;
          case "minutes":
            setSavings(
              (salary / 52 / 40 / 60) *
                people *
                frequency *
                timeTaken *
                1000 *
                20
            );
            break;

          case "days":
            setSavings(0);
          case "weeks":
            setSavings(0);
            break;
        }
        break;
      case "Week":
        switch (length) {
          case "hours":
            setSavings(
              (salary / 52 / 40) * people * frequency * timeTaken * 1000 * 4
            );
            break;
          case "minutes":
            setSavings(
              (salary / 52 / 40 / 60) *
                people *
                frequency *
                timeTaken *
                1000 *
                4
            );
            break;
          case "days":
            setSavings(
              (salary / 52 / 40) * 8 * people * frequency * timeTaken * 1000 * 4
            );
            break;
          case "weeks":
            setSavings(0);
            break;
        }
        break;
      case "Month":
        switch (length) {
          case "hours":
            setSavings(
              (salary / 52 / 40) * people * frequency * timeTaken * 1000
            );
            break;
          case "minutes":
            setSavings(
              (salary / 52 / 40 / 60) * people * frequency * timeTaken * 1000
            );
            break;
          case "days":
            setSavings(
              (salary / 52 / 40) * 8 * people * frequency * timeTaken * 1000
            );
            break;
          case "weeks":
            setSavings((salary / 52) * people * frequency * timeTaken * 1000);
            break;
        }
        break;
    }
  }, [people, frequency, timeTaken, salary, timePeriod, length]);

  return (
    <section
      aria-label="Automation Calculator"
      className="relative overflow-hidden bg-blue-600 pt-10 pb-10 sm:py-32"
      id="calc"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl text-blue-100 md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Automation Calculator
          </h2>
          <p className="mx-auto mt-6 text-lg tracking-tight text-blue-100 md:w-2/3">
            Many organisations are still using manual processes to complete
            tasks that could be automated. This calculator will help you to
            understand the potential savings that could be made by automating
            your processes.
          </p>
          <div className="md:flex-row md:gap-10 md:pt-10">
            <div className="stats grid grid-cols-2 rounded-lg bg-gray-800 bg-opacity-70 p-10">
              <div className="stat py-10">
                <div className="-mt-5 text-white md:text-xl">
                  No. of People Doing Process
                </div>
                <div className="stat-value p-10 text-3xl md:text-5xl">
                  {people}
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  className="range range-info"
                  value={people}
                  onChange={(e) => {
                    handleChange(e, "people");
                  }}
                />
              </div>
              <div className="stat mx-auto flex flex-col gap-5">
                <div className="-mt-5 text-white md:text-xl">
                  Time to Complete
                </div>
                <select
                  defaultValue={"Hours"}
                  className="select w-full max-w-xs bg-gray-800 bg-opacity-70"
                >
                  <option onClick={() => setLength("minutes")}>Minutes</option>
                  <option onClick={() => setLength("hours")}>Hours</option>
                  <option onClick={() => setLength("days")}>Days</option>
                  <option onClick={() => setLength("weeks")}>Weeks</option>
                </select>
                <div className="stat-value py-3 text-3xl">
                  {timeTaken} {length}
                </div>
                <input
                  type="range"
                  min="0"
                  max={length == "weeks" ? "4" : "50"}
                  className="range range-info"
                  value={timeTaken}
                  onChange={(e) => {
                    handleChange(e, "timeTaken");
                  }}
                />
              </div>

              <div className="stat mx-auto flex flex-col gap-5">
                <div className="-mt-5 text-white md:text-xl">
                  Frequency of Process
                </div>
                <select
                  defaultValue={"Week"}
                  className="select w-full max-w-xs bg-gray-800 bg-opacity-70"
                >
                  <option onClick={() => setTimePeriod("Day")}>Day</option>
                  <option onClick={() => setTimePeriod("Week")}>Week</option>
                  <option onClick={() => setTimePeriod("Month")}>Month</option>
                </select>
                <div className="stat-value text-3xl">
                  {frequency} Times a {timePeriod}
                </div>
                <input
                  type="range"
                  min="0"
                  max={7}
                  className="range range-info"
                  value={frequency}
                  onChange={(e) => {
                    handleChange(e, "frequency");
                  }}
                />
              </div>

              <div className="stat">
                <div className="-mt-5 text-white md:text-xl">Worker Salary</div>
                <div className="stat-value py-16 text-3xl">
                  {salary}K a year
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="range range-info"
                  value={salary}
                  onChange={(e) => {
                    handleChange(e, "salary");
                  }}
                />
              </div>
            </div>
            <div className="stats mx-auto mt-10 rounded-lg bg-gray-800 bg-opacity-70 p-10 shadow md:w-1/2">
              <div className="stat">
                <div className="">
                  <p className="-mt-5 text-3xl md:mb-3">Cost of Process</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    Total Cost of Process Per Day £
                    {Math.round((savings / 4 / 5) * 100) / 100}
                  </p>
                  <p>
                    Total Cost of Process Per Week £
                    {Math.round((savings / 4) * 100) / 100}
                  </p>
                  <p>
                    Total Cost of Process Per Month £
                    {Math.round(savings * 100) / 100}
                  </p>
                  <p>
                    Total Cost of Process Per Year £
                    {Math.round((savings / 4) * 52 * 100) / 100}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MobileCalc;
