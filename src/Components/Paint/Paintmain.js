import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import clap from "./sounds/Clap.wav";
import kick from "./sounds/Kick.WAV";
import hihat from "./sounds/Hihat.wav";
import snare from "./sounds/Snare_6.wav";
import tom from "./sounds/tom1.wav";
import tomx from "./sounds/tom2.wav";
export default function Paintmain() {
  const [useclap] = useSound(clap);
  const [usekick] = useSound(kick);
  const [usehihat] = useSound(hihat);
  const [usesnare] = useSound(snare);
  const [usetom] = useSound(tom);
  const [usetomx] = useSound(tomx);

  useEffect(() => {
    let alldc = document.getElementsByTagName("div");
    for (let i = 0; i < alldc.length - 1; i++) {
      alldc[i].classList.add(`text-white`);
      alldc[i].classList.add(`dark:text-black`);
    }

    alldc = document.getElementsByTagName("p");
    for (let i = 0; i < alldc.length - 1; i++) {
      alldc[i].classList.add(`text-white`);
      alldc[i].classList.add(`dark:text-black`);
    }
  }, []);

  const [boxes, setboxes] = useState([]);

  const renderBoxs = (p) => {
    for (let i = 1; i < 139 /*512 */; i++) {
      let row = i / 23;
      row = Math.ceil(row);
      let x = 0;
      x = row - 1;
      x = x * 23;
      x = i - x;

      setboxes((e) => [...e, { box: i, color: 0, row: row, col: x }]);
    }
  };
  const colorChangeHandler = (e) => {
    console.log();
    const mx = boxes.map((r, i) => {
      let x = 0;
      if (r.color != 1) x = r.color + 1;

      if (e.target.id == i) return { ...r, color: x };
      return { ...r };
    });
    console.log(mx);
    setboxes(mx);
  };
  const colorList = ["gray", "#9be9a8", "#40c463", "#30A14e", "#216e39"];
  const [Time, setTime] = useState(0);
  useEffect(() => {
    renderBoxs();
  }, []);
  const triggerSound = (T) => {
    boxes.map((item, index) => {
      if (item.col == T && (item.color == 1) & (item.row == 1)) useclap();
      if (item.col == T && (item.color == 1) & (item.row == 2)) usehihat();
      if (item.col == T && (item.color == 1) & (item.row == 3)) usekick();
      if (item.col == T && (item.color == 1) & (item.row == 4)) usesnare();
      if (item.col == T && (item.color == 1) & (item.row == 5)) usetom();
      if (item.col == T && (item.color == 1) & (item.row == 6)) usetomx();
    });
  };
  useEffect(() => {
    if (Time > 22) setTime(1);
    const intervalId = setInterval(() => {
      setTime(Time + 1);
      triggerSound(Time);
    }, 200);

    return () => clearInterval(intervalId);
  }, [Time]);

  const Clear = (e) => {
    const mx = boxes.map((r, i) => {
      return { ...r, color: 0 };
    });
    setboxes(mx);
  };
  const IRandomize = (e) => {
    const mx = boxes.map((r, i) => {
      let x = 0;
      x = Math.random(0, 0.4);
      x = Math.round(x);
      console.log({ x });
      return { ...r, color: x };
    });
    setboxes(mx);
  };
  return (
    <div className="PaintMain XASAF">
      {/* <p>{Time}</p> */}
      <div className="grid gridx py-2">
        {/*  */}
        {boxes.map((i, ind) => (
          <React.Fragment key={ind}>
            <div className={i.col == Time && "bg-white   XASAF"}>
              <div
                className={`w-5 h-5 p-0.4 mx-auto  rounded-md text-black bg-green-500`}
                style={{
                  background: colorList[i.color],
                }}
                id={ind}
                onClick={colorChangeHandler}
              ></div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex gap-x-2">
        <button className="px-2 rounded-md  bg-gray-800 " onClick={Clear}>
          Clear
        </button>
        <button className="px-2 rounded-md  bg-gray-800 " onClick={IRandomize}>
          Randomize
        </button>
      </div>
    </div>
  );
}
