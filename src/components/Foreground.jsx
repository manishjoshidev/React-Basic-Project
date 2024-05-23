import Card from "./Card";

function Foreground() {
  const data = [
    {
      desc: "Drake",
      filesize: ".5mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tgColor: "green" },
    },
    {
      desc: "diljeet",
      filesize: ".52mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tgColor: "green" },
    },
    {
      desc: "eminem",
      filesize: ".5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tgColor: "green" },
    },
  ];

  return (
    <div className="fixed top-10 left-10 z-[3] w-full h-full flex gap-10 flex-wrap p-10">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default Foreground;
