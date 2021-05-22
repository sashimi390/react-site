// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyMyResponsiveBar = ({ data /* see data tab */ }) => {
    if (data == null)
        return "";
    return (
        <div style={{ width: "100%", height: "500px" }}>
            <ResponsiveBar
                data={data}
                keys={['deaths']}
                indexBy="name_ja"
                margin={{ top: 0, right: 80, bottom: 80, left: 80 }}
                padding={0.1}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'category10' }}
                defs={[
                    {
                        id: 'deaths',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 10,
                    tickPadding: 10,
                    tickRotation: -45,
                    legend: '都道府県',
                    legendPosition: 'middle',
                    legendOffset: 60
                }}
                axisLeft={{
                    tickSize: 12,
                    tickPadding: 0,
                    tickRotation: 30,
                    legend: '死者数',
                    legendPosition: 'middle',
                    legendOffset: -60
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 10,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    );

}
export default MyMyResponsiveBar;