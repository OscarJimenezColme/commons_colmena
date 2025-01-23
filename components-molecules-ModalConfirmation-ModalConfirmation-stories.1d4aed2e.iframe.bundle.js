"use strict";(self.webpackChunk_colmena_commons=self.webpackChunk_colmena_commons||[]).push([[1449],{"./src/components/molecules/ModalConfirmation/ModalConfirmation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ModalBasic:()=>ModalBasic,ModalDualButtons:()=>ModalDualButtons,ModalWithImage:()=>ModalWithImage,WithCharacters:()=>WithCharacters,WithModalComplete:()=>WithModalComplete,WithoutImages:()=>WithoutImages,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),components_atoms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/index.ts"),assets_icons_Academic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/assets/icons/Academic.tsx"),assets_icons_Download__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/assets/icons/Download.tsx"),_ModalConfirmation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/molecules/ModalConfirmation/ModalConfirmation.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal/ModalConfirmation",component:_ModalConfirmation__WEBPACK_IMPORTED_MODULE_4__.Z,argTypes:{}},StoryModal=props=>{const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),openProps=props.open;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{openProps&&setOpen(openProps)}),[openProps]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_atoms__WEBPACK_IMPORTED_MODULE_1__.Button,{label:"Open modal",onClick:()=>setOpen(!0)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ModalConfirmation__WEBPACK_IMPORTED_MODULE_4__.Z,{...props,onClose:event=>{setOpen(!1),props.onClose?.(event)},open,icon:!0})]})},Default={render:StoryModal,args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"cm-mt-2",children:"Modal content"}),fullWidth:!0,closeIcon:"kk",open:!1,title:"¿Estás seguro de eliminar el trabajador seleccionado?",confirmLabel:"Aceptar",cancelLabel:"Cancelar"}},WithCharacters={render:StoryModal,args:{img:!0,title:"Tittle 1",description:"Description del modal",startIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(assets_icons_Academic__WEBPACK_IMPORTED_MODULE_2__.v,{}),confirmLabel:"Button text",endIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(assets_icons_Download__WEBPACK_IMPORTED_MODULE_3__.U,{}),cancelLabel:"Button text"}},WithModalComplete={render:StoryModal,args:{maxWidth:"extraSmall",img:!0,title:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:["No encontramos ninguna ciudad",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{}),"relacionada a este departamento."]}),description:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:["Por favor, consulta nuevamente eligiendo otro departamento de la lista.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]}),confirmLabel:"Entendido",buttonContained:!0,fullWidth:!0}},WithoutImages={render:StoryModal,args:{img:!1,title:"¿Estás seguro de eliminar el trabajador seleccionado?",confirmLabel:"Aceptar",cancelLabel:"Cancelar",buttonContained:!0,buttonOutlined:!0}},ModalBasic={render:StoryModal,args:{title:"El usuario y contraseña ingresados no son válidos.",confirmLabel:"Entendido",buttonContained:!0,description:"Por favor verifica los datos."}},ModalDualButtons={render:StoryModal,args:{title:"¿Estás seguro de eliminar el trabajador seleccionado?",confirmLabel:"No, cancelar",cancelLabel:"Sí, seguro",buttonContained:!0,buttonOutlined:!0}},ModalWithImage={render:StoryModal,args:{title:"¡El documento se ha descargado exitosamente!",img:!0,description:"Por favor revisa el resultado y si necesitas hacer una nueva búsqueda, da clic en el botón “Limpiar"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    children: <div className=\"cm-mt-2\">Modal content</div>,\n    fullWidth: true,\n    closeIcon: 'kk',\n    open: false,\n    title: '¿Estás seguro de eliminar el trabajador seleccionado?',\n    confirmLabel: 'Aceptar',\n    cancelLabel: 'Cancelar'\n  }\n}",...Default.parameters?.docs?.source}}},WithCharacters.parameters={...WithCharacters.parameters,docs:{...WithCharacters.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    img: true,\n    title: 'Tittle 1',\n    description: 'Description del modal',\n    startIcon: <Academic />,\n    confirmLabel: 'Button text',\n    endIcon: <Download />,\n    cancelLabel: 'Button text'\n  }\n}",...WithCharacters.parameters?.docs?.source}}},WithModalComplete.parameters={...WithModalComplete.parameters,docs:{...WithModalComplete.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    maxWidth: 'extraSmall',\n    img: true,\n    title: <>\r\n        No encontramos ninguna ciudad\r\n        <br />\r\n        relacionada a este departamento.\r\n      </>,\n    description: <>\r\n        Por favor, consulta nuevamente eligiendo otro departamento de la lista.\r\n        <br />\r\n      </>,\n    confirmLabel: 'Entendido',\n    buttonContained: true,\n    fullWidth: true\n  }\n}",...WithModalComplete.parameters?.docs?.source}}},WithoutImages.parameters={...WithoutImages.parameters,docs:{...WithoutImages.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    img: false,\n    title: '¿Estás seguro de eliminar el trabajador seleccionado?',\n    confirmLabel: 'Aceptar',\n    cancelLabel: 'Cancelar',\n    buttonContained: true,\n    buttonOutlined: true\n  }\n}",...WithoutImages.parameters?.docs?.source}}},ModalBasic.parameters={...ModalBasic.parameters,docs:{...ModalBasic.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    title: 'El usuario y contraseña ingresados no son válidos.',\n    confirmLabel: 'Entendido',\n    buttonContained: true,\n    description: 'Por favor verifica los datos.'\n  }\n}",...ModalBasic.parameters?.docs?.source}}},ModalDualButtons.parameters={...ModalDualButtons.parameters,docs:{...ModalDualButtons.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    title: '¿Estás seguro de eliminar el trabajador seleccionado?',\n    confirmLabel: 'No, cancelar',\n    cancelLabel: 'Sí, seguro',\n    buttonContained: true,\n    buttonOutlined: true\n  }\n}",...ModalDualButtons.parameters?.docs?.source}}},ModalWithImage.parameters={...ModalWithImage.parameters,docs:{...ModalWithImage.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    title: '¡El documento se ha descargado exitosamente!',\n    img: true,\n    description: 'Por favor revisa el resultado y si necesitas hacer una nueva búsqueda, da clic en el botón “Limpiar'\n  }\n}",...ModalWithImage.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithCharacters","WithModalComplete","WithoutImages","ModalBasic","ModalDualButtons","ModalWithImage"]}}]);