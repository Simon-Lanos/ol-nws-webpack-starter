export default function (modal, sites) {
    const dl = document.createElement('dl');
    sites.forEach((site) => {
        for (const props in site) {
            const dt = document.createElement('dt');
            dt.innerText = props;
            const dd = document.createElement('dd');
            dd.innerText = site[props];

            dl.appendChild(dt);
            dl.appendChild(dd);
        }
    });
    modal.innerHTML = '';
    modal.appendChild(dl);
};
