let reportField = document.querySelector('.js-report-field');
let btn = document.querySelector('.js-report-collapse-btn');
let reportContainer = document.querySelector('.description__report');

const resizeWidth = 1441;
let isDesktopWidth = true;

window.innerWidth < resizeWidth ?
isDesktopWidth = false : null;

const onResizeCheckReportPosition = () => {
    if(window.innerWidth < resizeWidth) {
        isDesktopWidth = false;

        if(!reportContainer.classList.contains('js-collapsed')) {
            setRelativePosition(reportContainer);
        }
    } else {
        isDesktopWidth = true;
        if(!reportContainer.classList.contains('js-collapsed')) {
            setAbsolutPosition(reportContainer);
        }
    }
}

const setAbsolutPosition = (el) => {
    el.style.position =  'absolute';
    el.style.zIndex = 9;
}

const setRelativePosition = (el) => {
    el.style.position =  'static';
    el.style.zIndex = 0;
}

const onClickShowReport = () => {
    reportField.style.maxHeight = '390px';
    reportField.style.overflowY = 'auto';

    if(isDesktopWidth) {
        setAbsolutPosition(reportContainer);
    }

    reportContainer.classList.remove('js-collapsed');
    btn.innerHTML = 'Свернуть';

    btn.removeEventListener('click', onClickShowReport);
    btn.addEventListener('click', onClickHideReport);
}

const onClickHideReport = () => {
    reportField.style.maxHeight = '160px';
    reportField.style.overflowY = 'hidden';

    if(isDesktopWidth) {
        setRelativePosition(reportContainer);
    }

    reportContainer.classList.add('js-collapsed');
    btn.innerHTML = 'Развернуть';
    reportField.scrollTo(0,0);

    btn.removeEventListener('click', onClickHideReport);
    btn.addEventListener('click', onClickShowReport);
}

btn.addEventListener('click', onClickShowReport);
window.addEventListener('resize', onResizeCheckReportPosition)