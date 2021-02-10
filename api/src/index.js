import app from "./app";
import "./database";

async function main() {
  try {
    app.listen(app.get("port"), () => {
      console.log(`Server on port ${app.get("port")}`);
    });
  } catch (err) {
    console.log("ERROR");
    console.error(err);
  }
}

main();
