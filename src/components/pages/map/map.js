function SetMap(urlPart) {
  return (
    <iframe
      src={`http://challonge.com/${urlPart}/module`}
      width="100%"
      height="500"
      frameborder="0"
      scrolling="auto"
      allowtransparency="true"
    ></iframe>
  );
}

export default SetMap;
