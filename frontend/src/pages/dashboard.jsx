const Dashboard = () => {
  return (
    <div className="col" style={{ padding: "1%" }}>
      <div
        className="col"
        style={{
          backgroundColor: "rgba(240, 208, 255, 0.5)",

          borderRadius: "10px",
          padding: "1%",
        }}
      >
        <div className="col-12 d-flex flex-row justify-content-between">
          <div
            style={{
              fontSize: "200%",
              fontWeight: "500",
              color: "#36454F",
            }}
          >
            Dashboard
          </div>
          <div
            style={{
              fontSize: "140%",
              fontWeight: "500",
              color: "#ffffff",
              backgroundColor: "#5D3FD3",
              borderRadius: "12px",
              width: "13%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {new Date().toLocaleDateString()}
          </div>
        </div>
        <div
          className="col-12"
          style={{ position: "relative", marginBottom: "3%" }}
        >
          <img
            src="/assets/tabgirl.png"
            alt="Tab Girl"
            style={{
              width: "30%",
              position: "absolute",
            }}
          />
          <img
            src="/assets/top.png"
            alt="top2"
            style={{ width: "100%", height: "25vh", marginTop: "5%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "40%",
              right: "20%",
              fontSize: "170%",
              color: "#191970",
              fontWeight: "700",
            }}
          >
            Hello, <span style={{ color: "#5D3FD3" }}>Sanlaksha Nishali</span>
          </div>
          <div
            style={{
              position: "absolute",
              top: "60%",
              right: "4.5%",
              fontSize: "105%",
              color: "#848884",
              fontWeight: "400",
              maxWidth: "40%",
            }}
          >
            Welcome back! We’re thrilled to kick off another day together,
            filled with endless possibilities to learn and grow as a team.
          </div>
        </div>
        <div className="col-12">
          <img
            src="/assets/graph.png"
            alt="Graph"
            style={{ width: "30%", marginRight: "3%" }}
          />
          <img
            src="/assets/activity.png"
            alt="Activity"
            style={{ width: "30%", marginRight: "3%" }}
          />
          <img src="/assets/tube.png" alt="Tube" style={{ width: "30%" }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
