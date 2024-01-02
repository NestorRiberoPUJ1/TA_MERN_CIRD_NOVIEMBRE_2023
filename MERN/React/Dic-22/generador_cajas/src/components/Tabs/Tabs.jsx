import { Fragment, useState } from "react"


import styles from "./Tabs.module.css"



const demoTabs = [
    { tab: "TAB1", content: "CONTENT TAB1" },
    { tab: "TAB2", content: "CONTENT TAB2" },
    { tab: "TAB3", content: "CONTENT TAB3" },

]


const Tabs = ({ tabList }) => {

    const [selected, setSelected] = useState(null);

    tabList = demoTabs;

    return (
        <Fragment>
            <div className={styles.tabNav}>
                {
                    tabList.map((item, idx) => {
                        return (
                            <button
                                key={idx}
                                className={selected === idx ? styles.tabBtnSelected : styles.tabBtn}
                                onClick={() => setSelected(idx)}
                            >
                                {item.tab}
                            </button>
                        )
                    })
                }
            </div>

            <div className={styles.content}>
                {tabList[selected]?.content}
            </div>
        </Fragment>
    )
}


export default Tabs;

