import { useState } from "react";
import Map from "./components/Map";
import Drawer from "./components/Drawer";
import Hamburger from "./assets/icons/burger-menu-svgrepo-com.svg";

function App() {
  const schoolData = [
    {
      schoolID: 0,
      schoolName: "國立臺灣大學",
      schoolType: "國立大學",
      longitude: 121.5397,
      latitude: 25.0173,
    },
    {
      schoolID: 1,
      schoolName: "國立清華大學",
      schoolType: "國立大學",
      longitude: 120.9937,
      latitude: 24.7956,
    },
    {
      schoolID: 2,
      schoolName: "國立陽明交通大學",
      schoolType: "國立大學",
      longitude: 120.9977,
      latitude: 24.787,
    },
    {
      schoolID: 3,
      schoolName: "國立臺灣師範大學",
      schoolType: "國立大學",
      longitude: 121.5279,
      latitude: 25.0268,
    },
    {
      schoolID: 4,
      schoolName: "國立中央大學",
      schoolType: "國立大學",
      longitude: 121.1938,
      latitude: 24.9683,
    },
    {
      schoolID: 5,
      schoolName: "國立政治大學",
      schoolType: "國立大學",
      longitude: 121.5777,
      latitude: 24.9875,
    },
    {
      schoolID: 6,
      schoolName: "國立成功大學",
      schoolType: "國立大學",
      longitude: 120.217,
      latitude: 23.0,
    },
    {
      schoolID: 7,
      schoolName: "國立臺北大學",
      schoolType: "國立大學",
      longitude: 121.4451,
      latitude: 24.9764,
    },
    {
      schoolID: 8,
      schoolName: "國立中山大學",
      schoolType: "國立大學",
      longitude: 120.2639,
      latitude: 22.6273,
    },
    {
      schoolID: 9,
      schoolName: "國立宜蘭大學",
      schoolType: "國立大學",
      longitude: 121.75,
      latitude: 24.75,
    },
    {
      schoolID: 10,
      schoolName: "東吳大學",
      schoolType: "私立大學",
      longitude: 121.5527,
      latitude: 25.0911,
    },
    {
      schoolID: 11,
      schoolName: "長庚大學",
      schoolType: "私立大學",
      longitude: 121.2683,
      latitude: 25.0338,
    },
    {
      schoolID: 12,
      schoolName: "大同大學",
      schoolType: "私立大學",
      longitude: 121.5244,
      latitude: 25.0706,
    },
    {
      schoolID: 13,
      schoolName: "臺北醫學大學",
      schoolType: "私立大學",
      longitude: 121.5567,
      latitude: 25.0328,
    },
    {
      schoolID: 14,
      schoolName: "東海大學",
      schoolType: "私立大學",
      longitude: 120.6036,
      latitude: 24.1818,
    },
    {
      schoolID: 15,
      schoolName: "逢甲大學",
      schoolType: "私立大學",
      longitude: 120.6496,
      latitude: 24.179,
    },
    {
      schoolID: 16,
      schoolName: "中原大學",
      schoolType: "私立大學",
      longitude: 121.2415,
      latitude: 24.9572,
    },
    {
      schoolID: 17,
      schoolName: "國立臺灣科技大學",
      schoolType: "國立科技大學",
      longitude: 121.5415,
      latitude: 25.0135,
    },
    {
      schoolID: 18,
      schoolName: "國立臺北科技大學",
      schoolType: "國立科技大學",
      longitude: 121.5332,
      latitude: 25.0431,
    },
    {
      schoolID: 19,
      schoolName: "國立高雄科技大學",
      schoolType: "國立科技大學",
      longitude: 120.3246,
      latitude: 22.6484,
    },
    {
      schoolID: 20,
      schoolName: "國立雲林科技大學",
      schoolType: "國立科技大學",
      longitude: 120.5439,
      latitude: 23.7086,
    },
    {
      schoolID: 21,
      schoolName: "龍華科技大學",
      schoolType: "國立科技大學",
      longitude: 121.2114,
      latitude: 24.9488,
    },
    {
      schoolID: 22,
      schoolName: "南臺科技大學",
      schoolType: "國立科技大學",
      longitude: 120.2854,
      latitude: 22.9337,
    },
    {
      schoolID: 23,
      schoolName: "明志科技大學",
      schoolType: "國立科技大學",
      longitude: 121.46,
      latitude: 25.0675,
    },
    {
      schoolID: 24,
      schoolName: "朝陽科技大學",
      schoolType: "國立科技大學",
      longitude: 120.6465,
      latitude: 24.1311,
    },
  ];

  return (
    <>
      <Drawer>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        sed hic, nostrum veritatis veniam numquam labore ullam? Nihil, id earum
        tenetur doloribus sed vitae eos sint laboriosam sequi aliquid incidunt.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis
        iure magnam possimus quidem quis porro deserunt id voluptatem deleniti,
        soluta omnis eveniet aperiam alias odit quae eius beatae amet? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti quod
        tempore ullam perspiciatis accusantium repellat! Natus sint maiores,
        nesciunt dolores doloremque quidem omnis praesentium deleniti magnam a
        cumque quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Officia nisi magni laudantium soluta eos praesentium vitae placeat, et
        eius, animi mollitia neque quam ex, cumque non reiciendis maxime commodi
        provident? Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
        excepturi reiciendis, enim ea nemo recusandae consequuntur, nisi sed
        nihil quaerat praesentium? Explicabo nisi impedit a recusandae eum!
        Veritatis, reiciendis sit!
      </Drawer>
      <Map schoolData={schoolData} />
    </>
  );
}

export default App;
