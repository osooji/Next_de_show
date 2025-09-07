// get
export async function GET() {
  const response = await fetch('https://localhost5432/[ID]');
  const stateJson = await response.json();
  console.log(stateJson)
  return stateJson;
}

// POST
export async function POST() {
  const response = await fetch('https://localhost5432/[ID]');
  const stateJson = await response.json();
  console.log(stateJson)
  return ;
}

// SET
export async function SET() {
  const response = await fetch('https://localhost5432/[ID]');
  const stateJson = await response.json();
  console.log(stateJson)
  return stateJson;
}

// DELETE
export async function DELETE() {
  const response = await fetch('https://localhost5432/[ID]');
  const stateJson = await response.json();
  console.log(stateJson)
  return ;
}