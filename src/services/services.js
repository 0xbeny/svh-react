const services=[
    {
        id:"0",
        titleEN:"فناوری اطلاعات و ارتباطات",
        titleFA:"ICT",
        icon:"fa fa-home",
        href:"/information-communication-technology"
    },
    {
        id:"1",
        titleEN:"برق و ابزار دقیق",
        titleFA:"ICT",
        icon:"fa fa-home",
        href:"/information-communication-technology"
    },
    {
        id:"2",
        titleEN:"مدیریت پروژه",
        titleFA:"ICT",
        icon:"fa fa-home",
        href:"/information-communication-technology"
    },
    {
        id:"3",
        titleEN:"تحلیل کسب و کار",
        titleFA:"ICT",
        icon:"fa fa-home",
        href:"/information-communication-technology"
    },
];
const infoHeaderData = [
    {
      key: 0,
      FAname: "fa fa-phone",
      meta: "۰۲۱-۸۸۹۲۶۵۰۵",
      divClass: "col-2",
    },
    {
      key: 1,
      FAname: "fa fa-whatsapp",
      meta: "۰۲۱-۸۸۹۲۶۵۰۵",
      divClass: "col-2",
    },
    {
      key: 2,
      FAname: "fa fa-map-marker",
      meta: "آدرس سامانه ورز هزاره",
      divClass: "col-2",
    },
    {
      key: 3,
      FAname: "fa fa-user",
      meta: "ورود",
      divClass: "col-6 info-login",
    },
  ];
export function getCardData(){
    return services;
}
export function getHeaderInfoData(){
    return infoHeaderData;
}