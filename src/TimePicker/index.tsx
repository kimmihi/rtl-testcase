import { useState } from "react";

const TimePicker = () => {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickHour = (hour: number) => {
    setHour(hour.toString().padStart(2, "0"));
  };

  const handleClickMin = (min: number) => {
    setMin(min.toString().padStart(2, "0"));
  };

  const handleSubmit = () => {
    setTime(`${hour}:${min}`);
    setOpen(false);
  };

  return (
    <section
      style={{
        position: "relative",
        width: "300px",
      }}
    >
      <input
        placeholder="hh:mm"
        value={time}
        onFocus={handleOpen}
        onChange={() => null}
      />
      {open && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "16px",
            padding: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "200px",
              maxHeight: "200px",
              overflow: "auto",
              justifyContent: "center",
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>시간</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 24 }).map((_, i) => (
                  <tr key={i}>
                    <th
                      role="button"
                      onClick={() => handleClickHour(i)}
                      data-testid={`hour-${i}`}
                    >
                      {i.toString().padStart(2, "0")}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>분</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 60 }).map((_, i) => (
                  <tr key={i}>
                    <th
                      role="button"
                      onClick={() => handleClickMin(i)}
                      data-testid={`min-${i}`}
                    >
                      {i.toString().padStart(2, "0")}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <button onClick={handleClose}>닫기</button>
            <button onClick={handleSubmit}>확인</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TimePicker;
