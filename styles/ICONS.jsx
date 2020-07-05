import back from '../assets/ICONS/back.png'
import cancel from '../assets/ICONS/cancel.png'
import edit from '../assets/ICONS/edit.png'
import ok from '../assets/ICONS/ok.png'
import avatar from '../assets/ICONS/user.png'
import card from '../assets/ICONS/card.png'
import add from '../assets/ICONS/add.png'
import fav from '../assets/ICONS/fav.png'
import unfav from '../assets/ICONS/unfav.png'
import share from '../assets/ICONS/share.png'

import home from '../assets/ICONS/BottomTab/home.png'
import favorites from '../assets/ICONS/BottomTab/heart.png'
import bookings from '../assets/ICONS/BottomTab/bookings.png'
import wallet from '../assets/ICONS/BottomTab/wallet.png'
import settings from '../assets/ICONS/BottomTab/settings.png'

import activeHome from '../assets/ICONS/BottomTab/activeHome.png'
import activeFavorites from '../assets/ICONS/BottomTab/activeHeart.png'
import activeBookings from '../assets/ICONS/BottomTab/activeBookings.png'
import activeWallet from '../assets/ICONS/BottomTab/activeWallet.png'
import activeSettings from '../assets/ICONS/BottomTab/activeSettings.png'


export const ICONS = Object.freeze({
    back,
    cancel,
    edit,
    ok,
    avatar,
    card,
    add,
    fav,
    unfav,
    share
})

export const TAB_ICONS = Object.freeze({
    home: {
        active: activeHome,
        inActive: home
    },
    favorites: {
        active: activeFavorites,
        inActive: favorites
    },
    bookings: {
        active: activeBookings,
        inActive: bookings
    },
    wallet: {
        active: activeWallet,
        inActive: wallet
    },
    settings: {
        active: activeSettings,
        inActive: settings
    }
})