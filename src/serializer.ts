import { State } from "./reducer";

export const loadFile = async (file: File): Promise<State> => {
  const text = (file as any).text();
  return JSON.parse(await text);
};

export const saveFile = (filename: string, text: string) => {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};
