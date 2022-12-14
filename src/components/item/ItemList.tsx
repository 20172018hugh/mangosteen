import { Overlay } from 'vant';
import { defineComponent, PropType, reactive, ref, watchEffect } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { Time } from '../../shared/time';
import { Tab, Tabs } from '../../shared/Tabs';
import { Form, FormItem } from '../../shared/Form';
import { ItemSummary } from './ItemSummary';
import s from './ItemList.module.scss';
export const ItemList = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup: (props, context) => {
        const refSelected = ref('本月')
        const time = new Time()
        const customTime = reactive({
            start: new Time().format(),
            end: new Time().format()
        })
        const timeList = [
            {
                start: time.firstDayOfMonth(),
                end: time.lastDayOfMonth()
            },
            {
                start: time.add(-1, 'month').firstDayOfMonth(),
                end: time.add(-1, 'month').lastDayOfMonth()
            },
            {
                start: time.firstDayOfYear(),
                end: time.lastDayOfYear()
            }
        ]
        watchEffect(() => {
            if (refSelected.value === '自定义时间') {
                refOverlayVisible.value = true
            }
        })
        const refOverlayVisible = ref(false)
        return () => (
            <MainLayout>{
                {
                    title: () => '山竹记账',
                    icon: () => <Icon name="menu" />,
                    default: () => (
                        <div class={s.wrapper}>
                            <Tabs classPrefix={'customTabs'} v-model:selected={refSelected.value}>
                                <Tab name="本月">
                                    <ItemSummary
                                        startDate={timeList[0].start.format()}
                                        endDate={timeList[0].end.format()} />
                                </Tab>
                                <Tab name="上月">
                                    <ItemSummary
                                        startDate={timeList[1].start.format()}
                                        endDate={timeList[1].end.format()} />
                                </Tab>
                                <Tab name="今年">
                                    <ItemSummary
                                        startDate={timeList[2].start.format()}
                                        endDate={timeList[2].end.format()} />
                                </Tab>
                                <Tab name="自定义时间">
                                    <ItemSummary
                                        startDate={customTime.start}
                                        endDate={customTime.end} />
                                </Tab>
                            </Tabs>
                            <Overlay show={refOverlayVisible.value} class={s.overlay} >
                                <div class={s.overlay_inner}>
                                    <header>
                                        请选择时间
                                    </header>
                                    <main>
                                        <Form>
                                            <FormItem label='开始时间' v-model={customTime.start} type='date' />
                                        </Form>
                                    </main>
                                </div>
                            </Overlay>
                        </div>
                    )
                }
            }</MainLayout>
        )
    }
})