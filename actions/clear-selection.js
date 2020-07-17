export function clearSelection({ selection, context, colors }) {
  if (selection) {
    context.fillStyle = colors.secondary;
    const { x, y, width, height } = selection;
    context.fillRect(x, y, width, height);
  }
}
