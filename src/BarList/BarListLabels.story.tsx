import React from 'react';
import { BarList } from './BarList';
import { BarListSeries } from './BarListSeries';

export default {
  title: 'Charts/Bar List/Labels',
  component: BarList
};

export const Bottom = () => (
  <BarList
    style={{ width: 350 }}
    data={[
      { key: 'Vulnerability Patch', data: 50 },
      { key: 'Critical Failure', data: 25 },
      { key: 'Physical Intrusion', data: 5 },
      { key: 'Phishing Attempts', data: 100 }
    ]}
    series={<BarListSeries labelPosition="bottom" />}
  />
);

export const End = () => (
  <BarList
    style={{ width: 350 }}
    data={[
      { key: 'Vulnerability Patch', data: 50 },
      { key: 'Critical Failure', data: 25 },
      { key: 'Physical Intrusion', data: 5 },
      { key: 'Phishing Attempts', data: 100 }
    ]}
    series={<BarListSeries labelPosition="end" />}
  />
);

export const Start = () => (
  <BarList
    style={{ width: 350 }}
    data={[
      { key: 'Vulnerability Patch', data: 50 },
      { key: 'Critical Failure', data: 25 },
      { key: 'Physical Intrusion', data: 5 },
      { key: 'Phishing Attempts', data: 100 }
    ]}
    series={<BarListSeries labelPosition="start" />}
  />
);

export const None = () => (
  <BarList
    style={{ width: 350 }}
    data={[
      { key: 'Vulnerability Patch', data: 50 },
      { key: 'Critical Failure', data: 25 },
      { key: 'Physical Intrusion', data: 5 },
      { key: 'Phishing Attempts', data: 100 }
    ]}
    series={<BarListSeries labelPosition="none" />}
  />
);

export const LongValueStart = () => (
  <BarList
    style={{ width: 350 }}
    data={[
      { key: 'Vulnerability Patch', data: 5000 },
      { key: 'Critical Failure', data: 50000 },
      { key: 'Physical Intrusion', data: 500000 },
      { key: 'Phishing Attempts', data: 5000000 }
    ]}
    series={<BarListSeries labelPosition="start" />}
  />
);

export const LongValueEnd = () => (
  <BarList
    style={{ width: 350 }}
    data={[
      { key: 'Vulnerability Patch', data: 5000 },
      { key: 'Critical Failure', data: 50000 },
      { key: 'Physical Intrusion', data: 500000 },
      { key: 'Phishing Attempts', data: 5000000 }
    ]}
    series={<BarListSeries labelPosition="end" />}
  />
);
