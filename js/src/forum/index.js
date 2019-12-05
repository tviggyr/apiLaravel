import {extend} from 'flarum/extend';
import app from 'flarum/app';
import LinkButton
    from 'flarum/components/Button';
import UserCard
    from "flarum/components/UserCard";
import SettingsPage from 'flarum/components/SettingsPage';
import HeaderPrimary from 'flarum/components/HeaderPrimary';


app.initializers.add('tviggyr/ext-api-laravel', () => {

    // extend(UserCard.prototype, 'infoItems', function (items) {
    //     items.add('tviggyr-button',
    //         LinkButton.component({
    //             className: 'Button',
    //             children: app.translator.trans('tviggyr-button.forum.profile.view-profile'),
    //             icon: 'far fa-id-card',
    //             onclick() {
    //                 alert('oleg')
    //             }
    //         })
    //     );
    //     items.add('tviggy-count', m('span', app.translator.trans('tviggyr-button.forum.profile.view-count', {
    //         count: 5
    //     })))
    // });

    extend(SettingsPage.prototype, 'settingsItems', function (items) {

        items.remove('account')

    });

    extend(HeaderPrimary.prototype, 'items', items => {
        items.add('menu-first', m('a', {href: 'https://3dpassion.com/cnc'}, 'CNC Prototyping'))
        items.add('menu', m('a', {href: 'https://3d-passion.myshopify.com/collections/store'}, '3D passion store'))
        items.add('sub-menu', [
            m('span', 'Marketplace'),
            m('ul', {class:'submenu'},[
                m('li', m('a', {href: 'https://3dpassion.com/models'}, 'browse')),
                m('li', m('a', {href: 'https://3dpassion.com/upload'}, 'upload your project'))
            ])
        ])
        items.add('menu nova', m('a', {href: 'https://3dpassion.com/nova'}, 'Get NOVA'))
        items.add('menu forum', m('span',  'Forum'))
    });

    console.log('[tviggyr/ext-api-laravel] Hello, forum!');
});
