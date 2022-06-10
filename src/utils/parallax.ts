const parrallax = (
  ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
  elem: HTMLElement | any
) => {
  const portHeight = window.innerHeight;
  const portWidth = window.innerWidth;

  elem.style.transform =
    "translate(-" +
    1 * (ev.pageX / (portWidth / 5)) +
    "%, " +
    1 * (ev.pageY / (portHeight / 5)) +
    "%)";
};

export default parrallax;
