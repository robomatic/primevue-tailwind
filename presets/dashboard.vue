<script setup lang="ts">
import { computed } from 'vue';
import { Button, Card, Divider, Link } from '@ray/ui';
import { PageHeader, PageHeaderTitle } from '@/components';
import { useDashboardSetting } from '@/hooks/setting/use-dashboard-setting';
import { useI18n } from '@/hooks/web/use-i18n';
import type { NotifyMessage } from '@/store/modules/message';
import { useMessageStore } from '@/store/modules/message';
import localizeListItems from '@/util/localize-list-items';
import SpecialMessage from './components/manager-message.vue';
import PanelEmployeeRank from './components/panel-employee-rank.vue';
import PanelNetActivity from './components/panel-net-activity.vue';
import PanelSchedule from './components/panel-schedule.vue';
import PanelShortcuts from './components/panel-shortcuts.vue';
import { dashboardAppLinks } from './constants/dashboard-app-links';
import type { AppLink, AppLinkGroup } from './types';

const dashboardSetting = useDashboardSetting();
const { t } = useI18n();

const { addNotifyMessage, addConfirmMessage } = useMessageStore();
const toggleDark = function () {
    document.getElementsByTagName('html')[0]?.classList.toggle('dark');
};

const localizedDashboardAppLinks = computed(() => {
    const newBaseList = JSON.parse(JSON.stringify(dashboardAppLinks));
    return newBaseList.map((linkGroup: AppLinkGroup) => {
        linkGroup.links = localizeListItems(linkGroup.links, ['title', 'description'], t) as AppLink[];
        return linkGroup;
    });
});
</script>

<template>
    <div>
        <PageHeader>
            <PageHeaderTitle>{{ t('term.dashboard') }}</PageHeaderTitle>
            <SpecialMessage />
            <div class="flex gap-1">
                <Button
                    label="Show Toast"
                    icon="i-prime-check"
                    @click="addNotifyMessage({ type: 'error', message: 'test' + Math.random() } as NotifyMessage)" />
                <Button
                    label="Show Confirm"
                    icon="i-prime-check"
                    severity="secondary"
                    @click="
                        addConfirmMessage({
                            id: 'test',
                            type: 'confirm',
                            message: 'Confirm Test',
                            acceptCallback: () =>
                                addNotifyMessage({
                                    type: 'success',
                                    message: 'Confirmed' + Math.random(),
                                } as NotifyMessage),
                            rejectCallback: () =>
                                addNotifyMessage({
                                    type: 'error',
                                    message: 'Rejected' + Math.random(),
                                } as NotifyMessage),
                        })
                    " />
                <Link label="Invoice" to="/invoice" outlined />
                <Button label="Primary" />
                <Button label="Secondary" severity="secondary" />
                <Button label="Link" link />
                <Button label="Plain" plain />
                <Button label="Info" severity="info" />
                <Button label="text" text />
                <Button label="warning" severity="warning" />
                <Button label="success" severity="success" />
                <Button label="help" severity="help" />
                <Button label="danger" severity="danger" @click="toggleDark" />
            </div>
        </PageHeader>
        <div class="container text-sm p-4 block lg:flex gap-4 text-xs">
            <!-- first column -->
            <div class="flex flex-1 flex-col gap-4 mb-4 lg:mb-0">
                <PanelNetActivity v-if="dashboardSetting.getActivityEnabled.value" />
                <template v-for="appLinkGroup in localizedDashboardAppLinks" :key="appLinkGroup">
                    <div>
                        <Divider>{{ t(appLinkGroup.title) }}</Divider>
                    </div>
                    <div class="flex gap-4">
                        <Card v-for="linkItem in appLinkGroup.links" :key="linkItem.title" v-bind="linkItem" />
                    </div>
                </template>
            </div>
            <!-- second column -->
            <div class="flex flex-1 flex-col gap-4">
                <PanelEmployeeRank v-if="dashboardSetting.getEmployeeRankEnabled.value" />
                <PanelSchedule v-if="dashboardSetting.getScheduleEnabled.value" />
                <PanelShortcuts v-if="dashboardSetting.getShortcutsEnabled.value" />
            </div>
        </div>
    </div>
</template>
