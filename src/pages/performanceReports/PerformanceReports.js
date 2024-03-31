import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "./PerformanceReports.css";

function PerformanceReports() {
  const dummyData = {
    topNews: [
      { title: "CSK Vs GT", views: 1000, likes: 500 },
      { title: "Arvind Kejriwal Arrested", views: 800, likes: 300 },
      { title: "Education", views: 1200, likes: 700 },
    ],
    trendOverTime: [
      { date: "2024-01-01", views: 500, likes: 200 },
      { date: "2024-01-02", views: 600, likes: 250 },
      { date: "2024-01-03", views: 700, likes: 300 },
      // More data...
    ],
    engagementRate: {
      shares: 500,
      comments: 300,
    },
  };

  let trendOverTimeChartInstance;
  let engagementRateChartInstance;

  useEffect(() => {
    // Draw line chart
    const trendOverTimeCanvas = document.getElementById(
      "trend-over-time-chart"
    );
    trendOverTimeChartInstance = new Chart(trendOverTimeCanvas, {
      type: "line",
      data: {
        labels: dummyData.trendOverTime.map((data) => data.date),
        datasets: [
          {
            label: "Views",
            data: dummyData.trendOverTime.map((data) => data.views),
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
          {
            label: "Likes",
            data: dummyData.trendOverTime.map((data) => data.likes),
            borderColor: "rgb(255, 99, 132)",
            tension: 0.1,
          },
        ],
      },
      options: {},
    });

    // Draw pie chart
    const engagementRateCanvas = document.getElementById(
      "engagement-rate-chart"
    );
    engagementRateChartInstance = new Chart(engagementRateCanvas, {
      type: "pie",
      data: {
        labels: ["Shares", "Comments"],
        datasets: [
          {
            label: "Engagement Rate",
            data: [
              dummyData.engagementRate.shares,
              dummyData.engagementRate.comments,
            ],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          },
        ],
      },
    });

    return () => {
      // Cleanup when unmounting
      trendOverTimeChartInstance.destroy();
      engagementRateChartInstance.destroy();
    };
  }, []);

  return (
    <div className="performance-reports-container">
      <div className="main-content">
        {/* Top Performing News */}
        <div className="chart-container">
          <h2 className="top-performing-news">Top Performing News</h2>

          <div className="color-symbols">
            <span className="views-symbol" style={{ color: "#0000FF" }}>
              &#x25A0;
            </span>{" "}
            Views
            <span className="likes-symbol" style={{ color: "#008000" }}>
              &#x25A0;
            </span>
            Likes
          </div>

          {/* Implement bar chart for top news */}
          <div className="bar-chart">
            {/* Dummy implementation */}
            {dummyData.topNews.map((news, index) => (
              <div key={index} className="bar">
                <span>{news.title}</span>
                <div className="bar-graph">
                  <div
                    className="views"
                    style={{ height: `${news.views / 10}px` }}
                    data-count={news.views}
                  ></div>
                  <div
                    className="likes"
                    style={{ height: `${news.likes / 10}px` }}
                    data-count={news.likes}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trends Over Time */}
        <div className="chart-container">
          <h2>Trends Over Time</h2>
          {/* Implement line graph for trends over time */}
          <canvas id="trend-over-time-chart"></canvas>
        </div>
        {/* Engagement Rate Breakdown */}
        <div className="chart-container">
          <h2>Engagement Rate Breakdown</h2>
          {/* Implement pie chart for engagement rate breakdown */}
          <canvas id="engagement-rate-chart"></canvas>
        </div>
      </div>
    </div>
  );
}

export default PerformanceReports;
