import layout1Settings from './Layout1/Layout1Settings'
import layout2Settings from './Layout2/Layout2Settings'
import { themes } from '../PingMeTheme/initThemes'

// UPDATE BELOW CODE
// DOC http://demos.ui-lib.com/PingMe-react-doc/layout.html
export const PingMeLayoutSettings = {
    activeLayout: 'layout1', // layout1, layout2
    activeTheme: 'slateDark1', // View all valid theme colors inside PingMeTheme/themeColors.js
    perfectScrollbar: false,

    themes: themes,
    layout1Settings, // open Layout1/Layout1Settings.js
    layout2Settings, // open Layout1/Layout2Settings.js

    secondarySidebar: {
        show: true,
        open: false,
        theme: 'slateDark1', // View all valid theme colors inside PingMeTheme/themeColors.js
    },
    // Footer options
    footer: {
        show: true,
        fixed: false,
        theme: 'slateDark1', // View all valid theme colors inside PingMeTheme/themeColors.js
    },
}
