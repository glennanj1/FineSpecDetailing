import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function ActionAlerts({ type, message }) {
  if (type === "success")
    return (
      <Stack
        sx={{ width: "100%", position: "fixed", top: 0, left: 0 }}
        spacing={2}
      >
        <Alert variant="filled" severity="success" onClose={() => {}}>
          <AlertTitle>Success</AlertTitle>
          {message}
        </Alert>
      </Stack>
    );
  if (type === "error") {
    <Stack
      sx={{ width: "100%", position: "fixed", top: 0, left: 0 }}
      spacing={2}
    >
      <Alert variant="filled" severity="error" onClose={() => {}}>
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Stack>;
  }
}
