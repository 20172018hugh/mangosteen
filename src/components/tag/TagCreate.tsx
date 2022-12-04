import { defineComponent, reactive } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import s from './Tag.module.scss';
import { Rules, validate } from '../../utils/validate';
import { TagForm } from './TagForm';
export const TagCreate = defineComponent({
    setup: (props, context) => {
        const formData = reactive({
            name: '',
            sign: '',
        })
        const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
        const onsubmit = (e: Event) => {
            const rules: Rules<typeof formData> = [
                { key: 'name', type: 'required', message: '必填' },
                { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
                { key: 'sign', type: 'required', message: '必填' },
            ]
            Object.assign(errors, {
                name: undefined,
                sign: undefined
            })
            Object.assign(errors, validate(formData, rules))
            e.preventDefault()
        }
        return () => (
            <MainLayout>{{
                title: () => '新建标签',
                icon: () => <Icon name="left" class={s.icon} onClick={() => { }} />,
                default: () => (
                    <TagForm />
                )
            }}</MainLayout>
        )
    }
})