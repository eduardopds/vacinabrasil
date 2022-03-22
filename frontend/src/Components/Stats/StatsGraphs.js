import React from 'react';
import styles from './StatsGraphs.module.css';
import { VictoryPie } from 'victory';

const StatsGraphs = ({ data }) => {
  const config = {
    colorScale: ['tomato', '#daa520', '#cc8400', '#ff8c00'],
    style: {
      labels: { fill: 'black', fontSize: 11 },
      data: {
        fillOpacity: 0.9,
        stroke: '#fff',
        strokeWidth: 2,
      },
    },
    padding: { top: 10, bottom: 10, left: 80, right: 80 },
  };
  if (data.length > 0)
    return (
      <section className={`${styles.container}`}>
        <h1 className='title'>Estatísticas</h1>
        <div className={styles.graph}>
          <div className={styles.graphItem}>
            <h1 className={styles.graphTitle}>Primeira Dose</h1>
            <VictoryPie
              labels={({ datum }) => `${datum.x}: ${datum.y}`}
              colorScale={config.colorScale}
              data={data[0]}
              innerRadius={50}
              padding={config.padding}
              style={config.style}
            />
          </div>
          <div className={styles.graphItem}>
            <h1 className={styles.graphTitle}>Segunda Dose</h1>
            <VictoryPie
              labels={({ datum }) => `${datum.x}: ${datum.y}`}
              colorScale={config.colorScale}
              data={data[1]}
              innerRadius={50}
              padding={config.padding}
              style={config.style}
            />
          </div>
          <div className={styles.graphItem}>
            <h1 className={styles.graphTitle}>Reforço</h1>
            <VictoryPie
              labels={({ datum }) => `${datum.x}: ${datum.y}`}
              colorScale={config.colorScale}
              data={data[2]}
              innerRadius={50}
              padding={config.padding}
              style={config.style}
            />
          </div>
        </div>
      </section>
    );
  else
    return (
      <div className={`${styles.noStats} ${styles.graphItem}`}>
        <p>Não há estatísticas disponíveis</p>
      </div>
    );
};

export default StatsGraphs;
