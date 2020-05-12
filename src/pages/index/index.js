import React, { useState } from 'react';
import { PickerView, PickerViewColumn } from 'remax/wechat'
import { View } from 'remax/one';

const PickerViewDemo = () => {
    const data =
        [
            [
                { label: '春', value: 'spring' },
                { label: '夏', value: 'summer' }
            ],
            [
                { label: '浙江', value: 'zhejiang' },
                { label: '深圳', value: 'Shenzhen' },
                { label: '广东', value: 'Guangdong' },
                { label: '北京', value: 'Beijing' },
            ],
            [
                { label: '南京', value: 'nanjing' },
                { label: '无锡', value: 'wuxi' },
                { label: '杭州', value: 'hangzhou' },
                { label: '广州', value: 'guangzhou' },
            ]
        ]

    const [value, setValue] = useState([])
    const onChange = (e) => {
        console.log(e.detail.value);

        setValue(e.detail.value)
    }
    return (
        <View>
            <PickerView
                value={value}
                onChange={onChange}
                style={{ width: '100%', height: ' 300PX' }}
                indicatorStyle={{ height: '68rpx' }}
            >
                <PickerViewColumn>
                    {data[0].map((it) => (
                        <View key={it.value} style={{ height: '68rpX', lineHeight: '68rpx' }}>{it.label}</View>
                    ))}
                </PickerViewColumn>
                <PickerViewColumn>
                    {data[1].map((it) => (
                        <View key={it.value} style={{ height: '68rpx', lineHeight: '68rpx' }}> {it.label}</View>
                    ))}
                </PickerViewColumn>
                <PickerViewColumn>
                    {data[2].map((it) => (
                        <View key={it.value} style={{ height: '68rpx', lineHeight: '68rpx' }} > {it.label}</View>
                    ))}
                </PickerViewColumn>
            </PickerView >
        </View >
    );
}

export default PickerViewDemo;