import React from "react";
import { Calendar, Keyboard, Button, Box, MaskedInput } from "grommet";

const DateTimeContent = ({ date: initialDate, time: initialTime, onClose }) => {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const close = () => onClose(date || initialDate, time || initialDate);
  return (
    <Box align="center">
      <Calendar
        animate={false}
        date={date || initialDate}
        onSelect={setDate}
        showAdjacentDays={false}
      />
      <Box flex={false} pad="medium" gap="medium">
        <Keyboard
          onEnter={(event) => {
            event.preventDefault();
            close();
          }}
        >
          <MaskedInput
            mask={[
              {
                length: [1, 2],
                options: [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                ],
                regexp: /^1[1-2]$|^[0-9]$/,
                placeholder: "hh",
              },
              { fixed: ":" },
              {
                length: 2,
                options: ["00", "15", "30", "45"],
                regexp: /^[0-5][0-9]$|^[0-9]$/,
                placeholder: "mm",
              },
              { fixed: " " },
              {
                length: 2,
                options: ["am", "pm"],
                regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                placeholder: "ap",
              },
            ]}
            value={time || initialTime}
            name="time"
            onChange={(event) => setTime(event.target.value)}
          />
        </Keyboard>
        <Box flex={false}>
          <Button label="Done" onClick={() => close()} />
        </Box>
      </Box>
    </Box>
  );
};

export default DateTimeContent;
