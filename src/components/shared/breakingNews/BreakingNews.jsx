import React from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500&display=swap');

  .news-wrapper {
    display: flex;
    align-items: center;
    border-top: 1.5px solid #e2e2e2;
    border-bottom: 1.5px solid #e2e2e2;
    overflow: hidden;
    background: #fff;
  }

  .news-badge {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    background: #D85A30;
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 10px 18px;
    white-space: nowrap;
    position: relative;
    z-index: 2;
  }

  .news-badge::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 12px solid #D85A30;
  }

  .pulse-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    animation: pulse 1.4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(0.7); }
  }

  .ticker-track-wrapper {
    flex: 1;
    overflow: hidden;
    padding-left: 28px;
    mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
  }

  .ticker-track {
    display: flex;
    width: max-content;
    animation: scroll 28s linear infinite;
  }

  .ticker-track:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .ticker-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
    white-space: nowrap;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #1a1a1a;
  }

  .ticker-item strong {
    font-weight: 500;
    color: #D85A30;
    font-family: 'Playfair Display', serif;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .ticker-sep {
    color: #ccc;
    font-size: 18px;
    font-weight: 300;
    margin: 0 20px;
  }
`;

const headlines = [
  {
    category: "Markets",
    text: "Global stocks rally as Fed signals rate pause for Q3 2026",
  },
  {
    category: "Tech",
    text: "Major AI lab unveils model with real-time reasoning capabilities",
  },
  {
    category: "Climate",
    text: "Record-breaking temperatures reported across South Asia this weekend",
  },
  {
    category: "Politics",
    text: "Diplomatic summit concludes with landmark trade agreement signed",
  },
  {
    category: "Science",
    text: "Astronomers detect unusual radio burst from nearby galaxy cluster",
  },
];

const BreakingNews = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="news-wrapper">
        <div className="news-badge">
          <span className="pulse-dot" />
          Breaking
        </div>

        <div className="ticker-track-wrapper">
          {/* Duplicate items for seamless loop */}
          <div className="ticker-track">
            {[...headlines, ...headlines].map((item, i) => (
              <React.Fragment key={i}>
                <div className="ticker-item">
                  <strong>{item.category}</strong>
                  {item.text}
                </div>
                <span className="ticker-sep">|</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BreakingNews;
