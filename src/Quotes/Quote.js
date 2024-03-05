import Quotedata from "./Quotedata.json";

function QuoteList() {
  const LocalQuotesdata = Quotedata?.quotes;
  const ListQuotes = LocalQuotesdata.map((e) => (
    <div
      style={{
        backgroundColor: "beige",
        padding: 24,
        border: "1px solid greenyellow",
        borderRadius: 12,
        fontStyle: "italic",
        marginLeft:10,
        marginRight:10,
      }}
    >
      <div
        style={{
          fontWeight: 900,
        }}
      >
        {e.quote}
      </div>
      <div
        style={{
          display: "flex",
          padding: 8,
          paddingBottom: 0,
          justifyContent: "end",
        }}
      >
        Author : {e.author}
      </div>
      <div style={{ display: "flex", padding: 8, justifyContent: "end" }}>
        Id : {e.id}
      </div>
    </div>
  ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 24,
        flexDirection: "column",
      }}
    >
      {ListQuotes}
    </div>
  );
}
export default QuoteList;
