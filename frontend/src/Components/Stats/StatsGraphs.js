import React from 'react';
import styles from './StatsGraphs.module.css';
import { VictoryPie, VictoryLabel } from 'victory';

const StatsGraphs = ({ data }) => {
  if (data.length > 0)
    return (
      <section className={`${styles.container} animeLeft`}>
        <h1 className='title'>Estatísticas</h1>
        <div className={styles.graph}>
          <div className={styles.graphItem}>
            <VictoryPie
              labels={({ datum }) => `${datum.x}: ${datum.y}`}
              colorScale={['tomato', '#daa520', '#cc8400', '#ff8c00']}
              data={data[0]}
              innerRadius={50}
              padding={{ top: 10, bottom: 10, left: 80, right: 80 }}
              style={{
                labels: { fill: 'black', fontSize: 11 },
                data: {
                  fillOpacity: 0.9,
                  stroke: '#fff',
                  strokeWidth: 2,
                },
              }}
            />
            <VictoryLabel
              textAnchor='middle'
              style={{ fontSize: 20 }}
              x={200}
              y={200}
              text='Primeira Dose'
            />
          </div>
          <div className={styles.graphItem}>
            <VictoryPie
              labels={({ datum }) => `${datum.x}: ${datum.y}`}
              colorScale={['tomato', '#daa520', '#cc8400', '#ff8c00']}
              data={data[1]}
              innerRadius={50}
              padding={{ top: 10, bottom: 10, left: 80, right: 80 }}
              style={{
                labels: { fill: 'black', fontSize: 11 },
                data: {
                  fillOpacity: 0.9,
                  stroke: '#fff',
                  strokeWidth: 2,
                },
              }}
            />
            <VictoryLabel
              textAnchor='middle'
              style={{ fontSize: 20 }}
              x={200}
              y={200}
              text='Segunda Dose'
            />
          </div>
          <div className={styles.graphItem}>
            <VictoryPie
              labels={({ datum }) => `${datum.x}: ${datum.y}`}
              colorScale={['tomato', '#daa520', '#cc8400', '#ff8c00']}
              data={data[2]}
              innerRadius={50}
              padding={{ top: 10, bottom: 10, left: 80, right: 80 }}
              style={{
                labels: { fill: 'black', fontSize: 11 },
                data: {
                  fillOpacity: 0.9,
                  stroke: '#fff',
                  strokeWidth: 2,
                },
              }}
            />
            <VictoryLabel
              textAnchor='middle'
              style={{ fontSize: 20 }}
              x={200}
              y={200}
              text='Reforço'
            />
          </div>
        </div>
      </section>
    );
  else
    return (
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Não há estatísticas disponíveis</p>
      </div>
    );
};

export default StatsGraphs;
