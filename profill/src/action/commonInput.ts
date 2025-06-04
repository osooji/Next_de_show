export async function commonInput(
  text:string,
  FormData:FormData
) {
  const inputText = structuredClone(text);
  const newText = FormData.get('text') as string;
  inputText = newText;
  return inputText;
}