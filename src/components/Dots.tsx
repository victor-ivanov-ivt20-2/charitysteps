const Dots = ({ active }: { active: number }) => {
  return (
    <div className="flex gap-2">
      {[0, 1, 2].map((s) => (
        <div
          key={s}
          className={`w-2 h-2 ${
            s === active ? "" : "opacity-30"
          } bg-blue-600 rounded-full`}
        ></div>
      ))}
    </div>
  );
};

export default Dots;
