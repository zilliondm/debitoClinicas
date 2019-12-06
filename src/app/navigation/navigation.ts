import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: '',
        type: 'group',
        children: [
            {
                id: 'Inbox',
                title: 'Bandeja de entrada',
                type: 'item',
                icon: 'dashboard',
                url: '/inbox',
              
            },
            {
                id: 'Detail',
                title: 'Historial',
                type: 'item',
                icon: 'folder',
                url: '/sample',
            },
            {
                id: 'History',
                title: 'Estadisticas',
                type: 'item',
                icon: 'bar_chart',
                url: '/history',
            },

        ]
    }
];
