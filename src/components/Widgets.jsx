import Widget1 from "./Widget1";
import Widget2 from "./Widget2";
import Widget3 from "./Widget3";

const Widgets = () => {
  return (
    <section>
      <section>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 p-4 md:h-80 md:flex-row md:p-0">
          <div className="h-full flex-1 bg-white rounded-xl">
            <Widget1 />
          </div>
          <div className="h-full flex-1 rounded-xl bg-white">
            <Widget2 />
          </div>
        </div>
      </section>
      <Widget3 />
    </section>
  );
};

export default Widgets;
