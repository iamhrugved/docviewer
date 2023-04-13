import "./styles.css";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function App() {
  const docs = [
    {
      uri:
        "https://internal.gredu.co/files/user_scores/1633600395-FORMATIMPORTNILAIPENGETAHUANKELAS1A-1633600395-15.xlsx"
    },
    { uri: require("../public/c4611_sample_explain.pdf") },
    {
      uri:
        "https://docs.google.com/presentation/d/1ouiPSpa-YlLP9d5MW7Dl1I1Yv8hCk9aa6muo8gRfiKQ/edit?usp=sharing"
    }
  ];

  return (
    <div className="App">
      <h1>Sample react-doc-viewer</h1>
      <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={docs}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false
          }
        }}
        style={{ height: 500 }}
      />
    </div>
  );
}
