import { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [cname, setCname] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [additionalInput, setAdditionalInput] = useState("");
  const [featureArr, setFeatureArr] = useState([
    {
      feature: "",
      subfeature: [""],
    },
  ]);

  const featureAdd = () => {
    const nextAdd = [
      ...featureArr,
      {
        feature: "",
        subfeature: [""],
      },
    ];
    setFeatureArr(nextAdd);
  };

  const subFeatureAdd = (index) => {
    let cloneArr = [...featureArr];
    let current = featureArr[index].subfeature;
    featureArr[index].subfeature = [...current, ""];
    setFeatureArr(cloneArr);
  };

  const reamoveSubfeature = (index, i) => {
    let cloneArr = [...featureArr].map((elem, indx) => ({
      ...elem,
      subfeature:
        i === indx
          ? elem.subfeature.filter((item, ind) => ind !== index)
          : elem.subfeature,
    }));
    setFeatureArr(cloneArr);
  };

  const handelFeatureChange = (e, index) => {
    let cloneArr = [...featureArr];
    cloneArr[index].feature = e.target.value;
    setFeatureArr(cloneArr);
  };

  const handelSubfeatureCahnge = (e, subIndex, index) => {
    let cloneArr = [...featureArr];
    cloneArr[index].subfeature[subIndex] = e.target.value;
    setFeatureArr(cloneArr);
  };

  let payLoad = {
    cname: cname,
    web: website,
    adrs: address,
    features: featureArr,
    addinput: additionalInput,
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log("feature:", payLoad);
    let result = await fetch("http://localhost:8080/save", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payLoad),
    });
    result = await result.json();
    alert("Company Added");
  };

  return (
    <div className="App">
      <form onSubmit={submitData}>
        <h1>Company Register</h1>
        <TextField
          style={{ marginBottom: "10px"  }}
          type="text"
          label="Enter Company Name"
          variant="outlined"
          value={cname}
          onChange={(e) => {
            setCname(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          type="text"
          style={{ marginBottom: "10px" }}
          label="Enter Company Website"
          variant="outlined"
          value={website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
          placeholder="Enter Company Website"
        />{" "}
        <br />
        <TextField
          type="text"
          label="Enter Company Address"
          style={{ marginBottom: "10px" }}
          variant="outlined"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />{" "}
        <br />
        <div className="divOne" >
          <Button
            className="addFeature"
            style={{ marginBottom: "10px" , borderRadius:"80px", marginRight:"-500px" }}
            variant="contained"
            color="success"
            type="button"
            onClick={featureAdd}
            addIcon={<AddIcon />}
          >
            +
          </Button>
          {featureArr.map((el, i) => (
            <div key={i} className="Div">
              <label>Feature</label>
              <TextField
                type="text"
                style={{ marginBottom: "10px" }}
                label="Enter Feature"
                variant="outlined"
                id={i}
                value={el.feature}
                onChange={(e) => handelFeatureChange(e, i)}
              />
              {featureArr.length > 1 && (
                <Button
                  variant="outlined"
                  style={{ marginBottom: "10px" }}
                  startIcon={<DeleteIcon />}
                  color="error"
                  type="button"
                  onClick={() =>
                    setFeatureArr(
                      [...featureArr].filter((element, indx) => indx !== i)
                    )
                  }
                >
                  Delete
                </Button>
              )}

              <div>
                <Button
                  style={{ marginBottom: "10px", borderRadius:"60px" }}
                  addIcon={<AddIcon />}
                  type="button"
                  variant="contained"
                  color="success"
                  className="addSubFeature"
                  onClick={() => subFeatureAdd(i)}
                >
                  Add SubFeature
                </Button>
                {el.subfeature.map((item, index) => (
                  <div key={index} className="subDiv">
                    <label>Sub feature</label>
                    <TextField
                      style={{ marginBottom: "10px" }}
                      type="text"
                      label="Enter Subfeature"
                      variant="outlined"
                      id={index}
                      value={item}
                      onChange={(e) => handelSubfeatureCahnge(e, index, i)}
                    />
                    {el.subfeature.length > 1 && (
                      <Button
                        style={{ marginBottom: "10px" }}
                        type="button"
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        color="error"
                        onClick={() => reamoveSubfeature(index, i)}
                      >
                        Delete
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <TextField
          variant="outlined"
          label="Addition Input"
          style={{ marginBottom: "10px" }}
          type="text"
          value={additionalInput}
          onChange={(e) => {
            setAdditionalInput(e.target.value);
          }}
        />{" "}
        <br />
        <Button
          variant="contained"
          style={{ marginBottom: "10px" }}
          endIcon={<SendIcon />}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
