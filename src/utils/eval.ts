function tryEval(command: string) {
  try {
    return eval(command);
  } catch (e) {
    return (e as Error).message;
  }
}

export default tryEval;
