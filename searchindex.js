Search.setIndex({docnames:["cli","contributing","devices/_buttons","devices/_colors","devices/_rgbgradient","devices/index","devices/kanav2","devices/kinzuv2","devices/rival100","devices/rival110","devices/rival3","devices/rival300","devices/rival310","devices/rival500","devices/rival600","devices/rival700","devices/rival95","devices/sensei310","devices/sensei_raw","env","faq","index","install","python_api/high_level/index","python_api/index","python_api/internal/cli","python_api/internal/color_helpers","python_api/internal/devices","python_api/internal/handlers/buttons","python_api/internal/handlers/choice","python_api/internal/handlers/index","python_api/internal/handlers/multi_rgbcolor","python_api/internal/handlers/multidpi_range","python_api/internal/handlers/range","python_api/internal/handlers/rgbcolor","python_api/internal/handlers/rgbgradient","python_api/internal/handlers/rgbgradientv2","python_api/internal/helpers","python_api/internal/index","python_api/internal/mouse","python_api/internal/udev","python_api/internal/usbhid","requirements"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["cli.rst","contributing.rst","devices/_buttons.rst","devices/_colors.rst","devices/_rgbgradient.rst","devices/index.rst","devices/kanav2.rst","devices/kinzuv2.rst","devices/rival100.rst","devices/rival110.rst","devices/rival3.rst","devices/rival300.rst","devices/rival310.rst","devices/rival500.rst","devices/rival600.rst","devices/rival700.rst","devices/rival95.rst","devices/sensei310.rst","devices/sensei_raw.rst","env.rst","faq.rst","index.rst","install.rst","python_api/high_level/index.rst","python_api/index.rst","python_api/internal/cli.rst","python_api/internal/color_helpers.rst","python_api/internal/devices.rst","python_api/internal/handlers/buttons.rst","python_api/internal/handlers/choice.rst","python_api/internal/handlers/index.rst","python_api/internal/handlers/multi_rgbcolor.rst","python_api/internal/handlers/multidpi_range.rst","python_api/internal/handlers/range.rst","python_api/internal/handlers/rgbcolor.rst","python_api/internal/handlers/rgbgradient.rst","python_api/internal/handlers/rgbgradientv2.rst","python_api/internal/helpers.rst","python_api/internal/index.rst","python_api/internal/mouse.rst","python_api/internal/udev.rst","python_api/internal/usbhid.rst","requirements.rst"],objects:{"":{rivalcfg:[23,0,0,"-"]},"rivalcfg.cli":{PrintSupportedDevicesAction:[25,1,1,""],UpdateUdevRulesAction:[25,1,1,""],add_main_cli:[25,2,1,""],add_mouse_cli:[25,2,1,""],normalize_cli_option_name:[25,2,1,""]},"rivalcfg.color_helpers":{is_color:[26,2,1,""],parse_color_gradient_string:[26,2,1,""],parse_color_string:[26,2,1,""]},"rivalcfg.devices":{UnsupportedDevice:[27,3,1,""],get_profile:[27,2,1,""],list_plugged_devices:[27,2,1,""]},"rivalcfg.devices.rivalcfg.devices":{PROFILES:[27,4,1,""]},"rivalcfg.handlers":{choice:[29,0,0,"-"],multi_rgbcolor:[31,0,0,"-"],multidpi_range:[32,0,0,"-"],range:[33,0,0,"-"],rgbcolor:[34,0,0,"-"],rgbgradient:[35,0,0,"-"],rgbgradientv2:[36,0,0,"-"]},"rivalcfg.handlers.buttons":{buttons:[28,0,0,"-"]},"rivalcfg.handlers.buttons.buttons":{LAYOUTS:[28,4,1,""],add_cli_option:[28,2,1,""],build_layout:[28,2,1,""],is_buttons:[28,2,1,""],process_value:[28,2,1,""]},"rivalcfg.handlers.choice":{add_cli_option:[29,2,1,""],choices_to_list:[29,2,1,""],choices_to_string:[29,2,1,""],process_value:[29,2,1,""]},"rivalcfg.handlers.multi_rgbcolor":{add_cli_option:[31,2,1,""],process_value:[31,2,1,""]},"rivalcfg.handlers.multidpi_range":{add_cli_option:[32,2,1,""],process_value:[32,2,1,""]},"rivalcfg.handlers.range":{add_cli_option:[33,2,1,""],custom_range:[33,2,1,""],matches_value_in_range:[33,2,1,""],process_value:[33,2,1,""]},"rivalcfg.handlers.rgbcolor":{CheckColorAction:[34,1,1,""],add_cli_option:[34,2,1,""],process_value:[34,2,1,""]},"rivalcfg.handlers.rgbgradient":{CheckGradientAction:[35,1,1,""],add_cli_option:[35,2,1,""],is_rgbgradient:[35,2,1,""],process_value:[35,2,1,""]},"rivalcfg.handlers.rgbgradientv2":{add_cli_option:[36,2,1,""],process_value:[36,2,1,""]},"rivalcfg.helpers":{REGEXP_PARAM_STRING:[37,4,1,""],bytes_to_high_low_nibbles:[37,2,1,""],merge_bytes:[37,2,1,""],module_ls:[37,2,1,""],nibbles_to_byte:[37,2,1,""],parse_param_string:[37,2,1,""],uint_to_little_endian_bytearray:[37,2,1,""]},"rivalcfg.mouse":{Mouse:[39,1,1,""],get_mouse:[39,2,1,""]},"rivalcfg.mouse.Mouse":{_hid_write:[39,5,1,""],name:[39,5,1,""],product_id:[39,5,1,""],reset_settings:[39,5,1,""],save:[39,5,1,""],vendor_id:[39,5,1,""]},"rivalcfg.udev":{RULES_FILE_PATH:[40,4,1,""],are_rules_up_to_date:[40,2,1,""],generate_rules:[40,2,1,""],is_rules_file_up_to_date:[40,2,1,""],trigger:[40,2,1,""],write_rules_file:[40,2,1,""]},"rivalcfg.usbhid":{DeviceNotFound:[41,1,1,""],FakeDevice:[41,1,1,""],HID_REPORT_TYPE_FEATURE:[41,4,1,""],HID_REPORT_TYPE_OUTPUT:[41,4,1,""],is_device_plugged:[41,2,1,""],open_device:[41,2,1,""]},"rivalcfg.usbhid.FakeDevice":{bytes:[41,6,1,""],close:[41,5,1,""],open_path:[41,5,1,""],send_feature_report:[41,5,1,""],write:[41,5,1,""]},rivalcfg:{cli:[25,0,0,"-"],color_helpers:[26,0,0,"-"],devices:[27,0,0,"-"],get_first_mouse:[23,2,1,""],helpers:[37,0,0,"-"],udev:[40,0,0,"-"],usbhid:[41,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","exception","Python exception"],"4":["py","data","Python data"],"5":["py","method","Python method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:exception","4":"py:data","5":"py:method","6":"py:attribute"},terms:{"0000":23,"0000ff":[10,12,14,17,31,35,36],"005":1,"009":1,"00ccff":[15,36],"00f":26,"00ff00":[4,12,14,15,17,26,35,36],"00ffff":10,"01cafe":[4,12,14,15,17],"0ff":10,"0x00":[27,28,29,31,32,34,35,36,39],"0x01":[27,28,29,33,35,36],"0x02":[27,28,29],"0x03":[27,28,29,33],"0x04":[27,28,29,32,33],"0x05":[27,28,34,35,36],"0x06":28,"0x07":29,"0x09":27,"0x0a":[28,31],"0x0b":32,"0x0f":[28,31],"0x1038":[27,39,41],"0x14":28,"0x1702":[27,39,41],"0x170a":27,"0x1710":41,"0x19":28,"0x30":28,"0x31":28,"0x32":28,"0x42":37,"0x51":28,"0x61":28,"0xa":37,"0xa7":[32,33],"0xab":37,"0xb":37,"0xbaad":41,"0xff42":37,"0xffffff":37,"100":[1,5,12,13,14,15,17,19,20,21,27,32,33,39],"1000":[4,6,7,8,9,10,11,12,13,14,15,16,17,18,27,32,33,35,36],"1038":[1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,39,41],"105":[5,21],"106":[5,21],"110":[5,20,21,27,32,33],"1200":6,"12000":[12,13,14,15,17],"125":[6,7,8,9,10,11,12,13,14,15,16,17,18,27],"1250":[8,16],"128":10,"1362":18,"1366":7,"1369":18,"136d":18,"136f":18,"1378":7,"137a":6,"1380":18,"1384":11,"139":36,"1390":18,"1392":11,"1394":11,"142":33,"150":[26,33],"1500":[8,16],"15000":[4,12,14,15,17],"160":33,"1600":[6,7,9,10,11,12,13,14,15,17,32],"162":33,"1620":18,"164":33,"167":33,"168":33,"1700":15,"1702":[1,8,19,39,41],"1704":16,"1706":16,"1707":16,"1708":16,"170a":8,"170b":8,"170c":8,"170e":13,"171":37,"1710":11,"1712":11,"1714":11,"1716":11,"1718":11,"171a":11,"171c":11,"171e":12,"1720":12,"1722":17,"1724":14,"1729":9,"172e":14,"1730":15,"1736":12,"1750":[8,16],"1814":8,"1816":9,"1824":10,"190":[32,33],"200":[9,10,32,33],"2000":[6,8,10,16],"2015":22,"2400":6,"250":[6,7,8,9,10,11,12,13,14,15,16,17,18,27],"255":[3,4,8,9,10,11,12,13,14,15,17,26,31,34,35,36,37],"300":[2,5,18,20,21,32,33],"310":[5,21],"3200":[6,7],"3240":18,"3acbe8":[4,12,14,15,17],"400":[6,7,32],"4000":[6,8,10,16,33],"4152":[27,39],"48159":22,"500":[5,6,7,8,9,10,11,12,14,15,16,17,18,21,27,33],"5000":[4,12,14,15,17],"5670":18,"600":[5,21],"6500":11,"700":[5,21,36],"710":[5,21,36],"7200":[9,32,33],"800":[6,7,9,10,11,12,13,14,15,17,32],"8000":32,"8500":[10,32],"8706fe":[4,12,14,15,17],"880000":20,"abstract":41,"available\u00b9":[2,11,18],"byte":[30,35,36,37,41],"case":[1,20,26],"class":[25,27,28,29,31,32,33,34,35,36,38,41],"const":[25,34,35],"default":[2,4,6,7,8,9,10,11,12,13,14,15,16,17,18,25,27,28,29,31,32,33,34,35,36,39],"devices\u00b9":[2,11,18],"float":[33,37],"function":[25,26,30,37,38,40],"import":[23,26,27,37,39,41],"int":[10,27,28,29,31,32,33,34,35,36,37,39,41],"new":[1,40],"return":[23,25,26,27,28,29,31,32,33,34,35,36,37,39,40,41],"short":[26,27],"static":[4,12,14,15,17],"switch":[2,10,11,18,28],"true":[26,41],"try":1,"while":6,And:1,ApS:1,Bus:1,But:20,For:[2,11,18,19,28,32,33],Not:[2,11,18],One:[25,39],Ops:18,POS:[4,12,14,15,17],The:[0,2,3,4,8,9,10,11,12,13,14,15,16,17,18,21,22,23,25,26,27,28,29,31,32,33,34,35,36,37,39,40,41,42],Then:1,There:[27,30],Use:[22,39],Used:27,_hid_writ:39,abl:[0,2,6,7,8,9,10,11,12,13,14,15,16,17,18,28],about:[1,20,27],abov:[4,12,14,15,17],access:[27,41],accord:[4,12,14,15,17],account:40,acer:11,acliv:42,across:41,add:[25,28,29,31,32,33,34,35,36],add_cli_opt:[28,29,30,31,32,33,34,35,36],add_main_cli:25,add_mouse_cli:25,added:21,addit:[4,12,14,15,17,37,39],aesthet:1,after:29,aim:21,alia:28,alias:[2,11,18,28],all:[1,2,6,7,8,9,10,11,12,13,14,15,16,17,18,27,28,30,39,41],allow:[1,10,19,21,26,27,33],alow:[29,32,33],alreadi:1,also:[1,2,3,4,8,9,10,11,12,13,14,15,17,18,35,36,41,42],alwai:[1,10,23,27,39],amount:27,ani:[0,1,2,4,6,7,8,9,10,11,12,13,14,15,16,17,18,21,23,24,39,42],answer:1,anyth:19,api:[5,20,21,31,34,35,36],approv:21,apt:22,aqua:[3,4,8,9,10,11,12,13,14,15,17,31,34,35,36],archlinux:[21,42],are_rules_up_to_d:40,arg:37,argument:[0,2,6,7,8,9,10,11,12,13,14,15,16,17,18,28,29,31,32,33,34,35,36],argumentpars:[25,28,29,31,32,33,34,35,36],ask:[1,21],aspx:22,attribut:41,aur:21,avail:[0,1,2,11,18,20,22,27,28,29,39],back:[10,41],backlight:[27,34],bang:[5,21],bar:[35,37],base:40,bash:20,basic:0,baz:37,beast:11,been:24,befor:1,befound:23,behaviour:19,being:41,bellow:[2,11,18,37],best:1,between:[2,11,18,28,33],bind:28,bit:[3,8,9,10,11,12,13,14,15,17],black:[3,4,8,9,10,11,12,13,14,15,17,18,20,31,34,35,36],blob:28,blue:[3,4,8,9,10,11,12,13,14,15,17,31,34,35,36],bool:[26,28,35,40,41],both:[35,36],bottom:[10,14],bought:1,brand:1,breath:[8,9,11,18,29],bright:[6,18,21],brightness1:[6,20],brightness2:[6,20],bsd:[21,42],btn6:[8,9,16],btn6_mode:[8,9,16],bug:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,21],bui:1,build:[21,22,27],build_layout:28,busi:41,button1:[2,11,18,28],button2:[2,11,18,28],button3:[2,11,18,28],button4:[2,11,18,28],button5:[2,11,18,28],button6:[2,11,18,28],button7:[2,11,18],button8:[2,11,18,28],button:[1,5,8,9,10,16,30,35,38],button_dis:28,button_dpi_switch:28,button_field_length:28,button_keyboard:28,button_multimedia:28,button_scroll_down:28,button_scroll_up:28,buttonn:[2,11,18],buttons_map:[11,18,28],bytearrai:37,bytes_to_high_low_nibbl:37,bytesio:41,call:[26,28,29,31,32,33,34,35,36,37],can:[1,2,3,4,8,9,10,11,12,13,14,15,17,18,19,21,22,23,27,28,30,32,33,35,36,37,41],cannot:[2,11,18,20,28,41,42],caract:[2,11,18],care:28,chang:[1,4,10,12,14,15,17,19,27],chat:1,check:[1,26,28,35,40],checkcoloract:34,checkgradientact:35,china:[8,27],choic:[25,27,30,34,35,38],choices_to_list:29,choices_to_str:29,cli:[10,19,20,21,24,27,30,38],cli_pars:[25,28,29,31,32,33,34,35,36],click:[2,11,18,28],clone:22,close:41,cod:18,code:1,color1:[4,12,14,15,17,31],color2:31,color:[4,5,21,26,27,31,34,35,36],color_bottom:[10,31],color_count:[31,35],color_count_offset:35,color_field_length:36,color_help:[24,38],color_logo:[10,31],color_middl:[10,31],color_top:[10,31],colorn:[4,12,14,15,17],com:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,22,28],command:[1,3,4,5,19,20,21,22,27,28,29,31,32,33,34,35,36],compil:[22,37],complet:24,comput:[23,41],config:39,configur:[4,12,14,15,17,21,24,32],consid:[1,20],constant:38,contain:[26,27,28,29,37,38,40,41],content:[5,21,24,30,37,38,40],contribut:[20,21],contributor:[1,21],control:27,convert:[26,37],correspond:[1,27,29,32,33,41],cours:1,creat:21,css:[3,8,9,10,11,12,13,14,15,17],current:[2,10,11,18,28,39,40,42],current_vers:40,custom_rang:33,dai:27,darker:20,data:[27,39,41],date:40,deamon:20,debian:[22,42],debug:[19,41],decreas:[2,11,18],dedic:20,defin:[1,2,4,10,11,12,14,15,17,18,23,27,35,36,41],dell:[8,27],depend:[0,1,2,11,18,28,39],descript:[1,27,28,29,31,32,33,34,35,36],desir:[2,11,18],dest:[25,34,35],detail:22,dev0:40,dev:[22,41],devel:22,develop:24,devic:[0,2,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,30,38,39],devicenotfound:41,diablo:18,dict:[27,28,29,31,32,33,34,35,36,37],differ:[2,10,11,18,28,30,41],dim:21,disabl:[2,11,18,28],discuss:1,distribut:[1,42],distro:40,document:[0,3,8,9,10,11,12,13,14,15,17,24,27,38,39],doe:[1,16,21,41],done:[1,41],dota:[1,8,11,14,27],down:[2,11,18],download:22,dpi:[2,5,6,7,8,9,11,12,13,14,15,16,17,18,28,32,33],drop:[22,42],due:28,durat:[4,12,14,15,17,35,36],duration_length:[35,36],duration_offset:35,e90cc:[4,12,14,15,17],each:[10,27,30],easi:1,easier:1,edit:[1,8,11,12,14,16,18,27],effect:[8,9,11,12,14,15,17,18,21,29,35,36],effet:29,element:37,els:[1,2,11,18,23,28],end:[16,33],endian:37,endpoint:[27,39,41],engin:[1,21],environ:[21,23,27,41],eopkg:22,equal:[2,11,18,28],error:1,essenti:22,etc:40,everi:[38,41],everyon:1,evil:11,exampl:[1,2,3,8,9,10,11,13,18,19,20,28,29,31,32,33,34,35,36,37],except:[27,38],excud:35,exhaust:20,exit:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,25],explan:19,explicitli:28,express:[28,35,37],f00:[3,8,9,10,11,12,13,14,15,17,26,31,34,35,36],factori:[2,6,7,8,9,10,11,12,13,14,15,16,17,18,27,38],fade:11,fake:38,fakedevic:41,fallout:11,fals:[25,26,34,35,41],familli:27,fde700:[4,12,14,15,17],featur:[1,20,41],fedora:42,ff0000:[3,8,9,10,11,12,13,14,15,17,20,26,27,31,34,35,36,41],ff00:26,ff00e1:[15,36],ff1800:[4,8,9,10,11,12,13,14,15,17,27,31,34,35,36],ffe701:[4,12,14,15,17],ffea00:[15,36],field:[35,36],file:[1,27,40],find:1,first:[1,2,10,11,18,21,22,23],fix:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,27,39],flag:35,flozz:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,22,28],follow:[1,2,4,11,12,14,15,17,18,22,28,32,33,42],folow:[3,8,9,10,11,12,13,14,15,17],foo:[29,35,37],foobar:37,forc:19,form:[22,37],format:[4,8,9,10,11,12,13,14,15,17,26,31],found:[23,41],frequent:21,from:[9,10,11,12,13,14,15,17,18,21,23,24,26,27,28,29,31,32,33,34,35,36,37,38,39,41],fuchsia:[3,4,8,9,10,11,12,13,14,15,17,31,34,35,36],functionn:20,futur:22,game:[1,21,24],gap:33,gendoc:1,gener:[2,11,18,25,27,28,29,30,31,32,33,34,35,36,37,39,40],generate_rul:40,genius:11,get:[23,27,39],get_first_mous:23,get_mous:39,get_profil:[25,27,39],git:22,github:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,22,28],gitter:1,given:[25,26,28,29,31,32,33,34,35,36,37,40,41],gnu:42,gradient:[5,21,26,35,36],grai:[3,8,9,10,11,12,13,14,15,17,31,34,35,36],green:[3,8,9,10,11,12,13,14,15,17,31,34,35,36],gui:27,guild:18,hack:38,haiku:42,half:24,handl:[28,31,34,35,36,39,40],handler:[24,27,28,29,31,32,33,34,35,36,38],hardwar:20,has:[20,40],have:[1,16,20,22,24,28,32,33],header:[22,35],header_length:35,hello:[26,37],help:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,19,25,27,34,35],helper:[24,25,26,29,33,38],here:[1,19,20,27],hero:18,hexadecim:[26,31,34,35,36],hid:[38,39],hid_devic:39,hid_report_type_featur:[35,36,39,41],hid_report_type_output:[27,28,29,32,33,39,41],hidapi:[22,41,42],high:[6,18,21,24,37,38],home:28,how:[1,21,38],howl:12,html:[3,8,9,10,11,12,13,14,15,17],http:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,22,28],hurd:42,hyper:11,ident:1,identifi:[2,11,18],ignor:37,iii:18,implement:[20,38],increas:[2,11,18],index:[21,36],info:28,inform:[1,27,28,29,31,32,33,34,35,36,39],input:[30,32,33],input_rang:[32,33],insensit:26,instal:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,21,42],instanc:[25,28,29,31,32,33,34,35,36,39,41],instanci:39,instead:[2,11,18,20,38,39,41],integ:[33,37],interact:[23,24,38,41],interest:1,interf:[2,11,18],interfac:[3,4,8,9,10,11,12,13,14,15,17,41],interg:37,intern:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,21,24,27,39],interpret:1,invalid:[26,35,37,39],ioerror:41,is_button:28,is_color:26,is_device_plug:41,is_rgbgradi:35,is_rules_file_up_to_d:40,issu:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,41],its:[1,2,11,18,19,27,28,41],itself:[24,38],just:[1,2,11,18,20,27],kana:[5,20,21],kei:27,kind:28,kinzu:[5,21],know:38,label:[27,28,29,31,32,33,34,35,36],last:[26,37],layour:28,layout:[2,11,18],layout_multimedia:28,layout_qwerti:28,least:[30,35],led:[6,8,9,10,11,12,13,14,16,17,18,20,27,31,34,35,36],led_bright:18,led_brightness1:6,led_brightness2:6,led_id:[35,36],led_id_offset:35,left:14,lend:1,length:[35,36,37,39],lenovo:8,level:[21,24,38,41],librari:[20,21,42],libudev:22,libusb:22,light:[8,9,11,18,21,29],light_effect:[8,9,18,29],like:[1,2,3,8,9,10,11,12,13,14,15,17,18,27,32,33,35,36,42],lime:[3,4,8,9,10,11,12,13,14,15,17,31,34,35,36],limit:28,line:[3,4,5,21],link:1,lint:1,linux:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,21,40,42],list:[0,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,26,27,28,29,31,32,33,34,35,36,37,39],list_plugged_devic:27,littl:37,load:[19,39],logo:[10,11,12,13,14,15,17,20,35,36],logo_color:[11,12,13,14,15,17,35,36],logo_light_effect:11,look:[20,27,35],loop:[4,12,14,15,17],low:[6,16,18,20,37,41],lsusb:1,mac:21,machin:1,maco:42,made:[21,42],mai:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,19],main:25,make:24,manipul:39,map:28,mapping1:[2,11,18],mappingn:[2,11,18],maroon:[3,8,9,10,11,12,13,14,15,17,31,34,35,36],mask:35,master:28,match:[29,32,33,37],matches_value_in_rang:33,max:36,max_preset_count:32,maxgradi:36,maximum:[4,12,14,15,17,35,36],media:[2,11,18],medium:[6,18],memori:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,27,39],merg:37,merge_byt:37,messag:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18],metavar:[25,34,35],method:39,mice:[1,21,24,27,38],microsoft:[22,42],middl:[10,14],milisecond:[4,12,14,15,17],mix:10,mode:[8,9,16],model:[1,2,5,27],modul:[21,25,26,28,30,37,38,40,41],module_l:37,monochrom:20,more:[0,20,27,28,39],most:[23,26,27,37],mous:[0,1,4,8,9,10,12,13,14,15,17,21,23,24,25,27,29,31,32,33,34,35,36,38],mouse_profil:[25,39],msi:16,much:1,multi_rgbcolor:[30,38],multidpi_rang:[30,38],multipl:31,must:[1,35,40],mute:[2,11,18],my_test_setting1:25,myparam:37,name:[25,26,27,28,29,31,32,33,34,35,36,37,39],narg:[25,34,35],navi:[3,8,9,10,11,12,13,14,15,17,31,34,35,36],nearest:[32,33],necessari:1,need:[1,22,42],next:[2,11,18],nibbl:37,nibble1:37,nibble2:37,nibbles_to_byt:37,non:20,none:[23,25,27,34,35,39],noqa:28,nor:21,normalize_cli_option_nam:25,note:1,now:42,nox:1,nth:[2,11,18],number:[0,2,6,7,8,9,10,11,12,13,14,15,16,17,18,36,37,41],numer:29,off:[2,6,11,18,21],offset:[28,35],oliv:[3,8,9,10,11,12,13,14,15,17,31,34,35,36],omen:11,onc:37,one:[2,10,11,18,23,24,27,31,32,33,34,35,39,41],onli:[0,1,6,7,16,18,20,22,23,24,27,31,34,35,36,38,40],onlin:1,open:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,39,41],open_devic:[39,41],open_path:41,oper:[1,21,41],option:[0,2,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,27,28,29,30,31,32,33,34,35,36,39],option_str:[25,34,35],optionn:26,order:[1,29],org:22,origin:[5,21],other:[1,2,11,18,21,28],output:[1,32,33,40,41],output_rang:[32,33],overflow:37,overrid:27,override_default:27,own:[1,23,24,28,38],packag:[21,38],packet:39,packet_length:[27,39],pad:36,page:[20,21,22],pagedown:[2,11,18],pageup:[2,11,18],pair:[32,33],pap:[2,11,18],param:[35,37],paramet:[2,4,10,11,12,14,15,17,18,25,26,27,28,29,31,32,33,34,35,36,37,39,40,41],paramstr:37,pars:[26,37],parse_color_gradient_str:26,parse_color_str:26,parse_param_str:37,parser:[28,29,31,32,33,34,35,36,37],pass:[1,2,3,4,8,9,10,11,12,13,14,15,17,18],path:[40,41],paus:[2,11,18],pep8:1,per:20,permiss:[40,41],permissionerror:40,persist:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,27],pick:[29,32,33],pip3:[1,22],pip:22,place:[29,40],plai:[2,11,18],playpaus:[2,11,18,28],pleas:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,20],plug:[0,23,27,41],poll:[6,7,8,9,10,11,12,13,14,15,16,17,18,27],polling_r:[6,7,8,9,10,11,12,13,14,15,16,17,18,27],port:42,pos1:[4,12,14,15,17],pos:[4,12,14,15,17,26,35,36],posit:[4,12,14,15,17,26],posn:[4,12,14,15,17],possibl:[1,20],predat:11,prefer:22,prefix:41,prerequisit:21,prerequist:22,preset:[2,6,7,8,9,10,11,12,13,14,15,16,17,18,28,32,33],previou:[2,11,18],print:25,printabl:29,printsupporteddevicesact:25,privat:37,probabl:[21,24,27,36],process:[28,29,31,32,33,34,35,36],process_valu:[28,29,30,31,32,33,34,35,36],product:[1,27,39,41],product_id:[1,27,39,41],product_str:1,productid:19,profil:[19,25,30,38,39],program:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,21],project:[1,20,21],properti:39,proud:33,provid:[1,10,22,24,25,27,30,35,37,39,41],pubg:12,pull:21,purpl:[3,8,9,10,11,12,13,14,15,17,31,34,35,36],purpos:41,pypi:21,python3:22,python:[1,5,20,21,22,31,34,35,36,37],question:21,qwerti:[2,11,18,28],rainbow:21,rais:[27,39,40,41],rang:[30,32,38],range_start:33,range_step:33,range_stop:33,rate:[6,7,8,9,10,11,12,13,14,15,16,17,18,27],raw:[2,5,11,20,21],read:[38,39,41],real:[19,41],recent:[26,37],red:[3,4,8,9,10,11,12,13,14,15,17,20,26,31,34,35,36],regbradi:28,regexp_param_str:37,regual:37,regular:[0,6,7,8,9,10,11,12,13,14,15,16,17,18],relat:[26,40],releas:1,remap:28,repeat:35,repeat_offset:35,report:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,39,41],report_id:39,report_typ:[27,28,29,32,33,35,36,39],repositori:22,repport:27,request:[21,27,39,41],requir:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,21,22,25,27,30,33,34,35],reset:[2,6,7,8,9,10,11,12,13,14,15,16,17,18,28],reset_set:39,result:1,retail:8,revers:[1,21],rgb:[5,20,26,31,34,35,36],rgbcolor:[27,30,31,38],rgbgradient:[4,12,14,15,17,30,36,38],rgbgradient_head:[35,36],rgbgradientv2:[30,35,38],rgbgrandiant:37,rgbradient:35,right:[14,23],rival:[1,2,5,18,19,20,21,27,32,33,36,39,40],rivalcfg:[0,1,2,6,7,8,9,10,11,12,13,14,15,16,17,18,19,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42],rivalcfg_dri:[21,41],rivalcfg_profil:[21,23,27,41],root:[0,6,7,8,9,10,11,12,13,14,15,16,17,18],round:[32,33],rtype:28,rule:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,25,40],rules_file_path:40,run:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,21,22],runner:28,runtim:27,same:[10,27],save:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,39],save_command:27,script:[20,23,24,38],scroll:[2,11,18],scrolldown:[2,11,18,28],scrollup:[2,11,18,28],search:21,second:[2,4,10,11,12,14,15,17,18,20],section:[2,11,18],see:[0,2,11,18,22,27,28,37],seek:41,select:[2,6,10,11,18,28,29,32],selected_preset:[10,32],semi:28,semicolon:[2,11,18,28],send:[19,20,27,39,41],send_feature_report:41,sensei:[2,5,11,20,21],sensibl:[32,33],sensit:[5,6,7,8,9,11,12,13,14,15,16,17,18,32,33],sensitivity1:[6,7,8,9,11,12,13,14,15,16,17,18,32,33],sensitivity2:[6,7,8,9,11,12,13,14,15,16,17,18],sent:[27,30,39,41],separ:27,session:1,set:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,20,25,27,28,29,30,31,32,33,34,35,36,39,41],setting1:25,setting_info:[28,29,31,32,33,34,35,36],setting_nam:[28,29,31,32,33,34,35,36],sever:20,shift:21,shop:1,should:[23,27,39,42],show:[0,6,7,8,9,10,11,12,13,14,15,16,17,18],silver:[3,8,9,10,11,12,13,14,15,17,31,34,35,36],simpl:[35,36],simpler:24,simul:[2,11,18,41],singl:[32,37],size:37,small:1,softwar:21,solu:22,some:[1,2,11,18,19,27,28],somedai:42,someon:1,sometim:1,somewher:28,sort:29,sound:[2,11,18],sourc:21,spec:38,specif:[0,1,2,11,18,19,27,39],specifi:[2,11,18,28],split:[24,37],sponsor:1,start:[1,33],steadi:[8,9,11,18,29],steelseri:[1,5,21,24,27,38,39,40],step:[32,33],still:22,stm32:11,stop:[4,12,14,15,17,26,33,35,36],storm:18,str:[25,26,28,29,31,32,33,34,35,36,37,40],string:[10,26,28,29,35,37],strip:14,stuff:40,style:1,sudo:22,suffici:40,suport:[4,12,14,15,17],support:[0,1,2,3,4,21,22,23,24,25,26,27,28,31,32,34,35,36,39],sure:[2,11,18],swap:[2,11,18,28],symbol:28,syntax:[2,11,18,28,35,36,37],system:[1,21,22,41],take:40,tank:18,target:37,teal:[3,8,9,10,11,12,13,14,15,17,31,34,35,36],test:[19,21,25,41],than:1,thank:[1,21],thei:[2,11,18,32,42],them:[1,10],thi:[0,1,2,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42],thing:[1,24],think:1,third:28,those:[2,11,18],through:10,time:[4,12,14,15,17,20,23,27],todai:21,todo:[6,7,8,9,10,11,12,13,14,15,16,17,18],toggl:[2,11,18],too:[19,21],tool:[20,22],toolchain:22,top:[10,14],traceback:[26,37],tracker:1,transform:[25,29,30,32,33],trigger:[18,35,40],triggers_offset:35,troubl:1,tupl:[26,31,34,35,36],turn:[2,11,18,21],two:[10,20,30,33,37],type:[23,25,26,27,28,29,31,32,33,34,35,36,37,39,40,41],typo:1,ubuntu:[22,42],udev:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,24,25,38,42],uint_to_little_endian_bytearrai:37,under:[8,9,10,16],unknown:35,unoffici:21,unsign:37,unsupport:21,unsupporteddevic:[27,39],updat:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,25,27,40],updateudevrulesact:25,usabl:28,usag:[5,19,21,28,29,31,32,33,34,35,36],usb:[27,41],usbhid:[24,27,28,29,32,33,35,36,38,39],use:[1,2,3,8,9,10,11,12,13,14,15,17,18,19,20,22,23,24,28,42],used:[2,11,18,19,27,28,30,32,35,36,37,40,41],useful:[1,24,38,41],user:[0,6,7,8,9,10,11,12,13,14,15,16,17,18,40],using:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,28],util:21,valid:[26,28,30,34,35],valu:[2,4,6,7,8,9,10,11,12,13,14,15,16,17,18,27,29,30,31,32,33,34,35,36,37,39],value_pars:37,value_typ:[27,28,29,30,31,32,33,34,35,36],valueerror:[26,37,39],variabl:[21,41],varialb:27,variat:36,variou:[8,9,11,12,13,14,15,17],varou:[26,37],vendor:[27,39,41],vendor_id:[1,27,39,41],vendorid:19,veri:33,version:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,21,22,40],visual:22,volum:[2,11,18],volumedown:[2,11,18],volumeup:[2,11,18],wai:1,want:[1,10,19,23,24,28,38],war:18,websit:1,what:[1,23,27],wheel:[8,9,10,11,12,13,14,15,16,17,20],wheel_color:[11,12,13,14,15,17],wheel_light_effect:11,when:[1,2,10,11,18,19,23,27,28,29,31,32,33,34,35,36,41],where:[32,41],wherea:21,which:1,white:[3,8,9,10,11,12,13,14,15,17,31,34,35,36],why:21,window:[21,42],without:19,work:[1,21,22,28,38,42],world:[18,37],write:[39,40,41],write_rules_fil:40,writen:41,www:22,x00:41,x02:41,x03:41,xaa:41,xbb:41,xcc:41,yellow:[3,4,8,9,10,11,12,13,14,15,17,31,34,35,36],yet:[20,42],you:[0,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,28,32,33,35,38,39,41],your:[1,20,23,24,38],yourself:[20,39],z2_color:14,z3_color:14,z4_color:14,z5_color:14,z6_color:14,z7_color:14,zone:10},titles:["Command-Line Usage","Contributing","Mapping Special Actions","Hexadecimal notation","RGB Gradient expression","Supported Devices","SteelSeries Kana v2","SteelSeries Kinzu v2","SteelSeries Rival 100 and Rival 105","SteelSeries Rival 110 and Rival 106","SteelSeries Rival 3","SteelSeries Rival 300 and original Rival","SteelSeries Rival 310","SteelSeries Rival 500","SteelSeries Rival 600","SteelSeries Rival 700 and Rival 710","SteelSeries Rival 95 and Rival 100 PC Bang","SteelSeries Sensei 310","SteelSeries Sensei [RAW]","Environment Variables","Frequently Asked Questions","Welcome to rivalcfg\u2019s documentation!","Installing","High Level Python API","Python API","cli","color_helpers","devices","buttons","choice","handlers","multi_rgbcolor","multidpi_range","range","rgbcolor","rgbgradient","rgbgradientv2","helpers","Internal Python API","mouse","udev","usbhid","Requirements"],titleterms:{"100":[8,16],"105":8,"106":9,"110":9,"300":11,"310":[12,17],"500":13,"600":14,"700":15,"710":15,"class":39,"function":[28,29,31,32,33,34,35,36,39,41],Not:42,The:1,action:[2,11,18,28],api:[3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,23,24,27,38],archlinux:22,ask:20,aur:22,bang:16,bright:20,bug:1,build:1,button:[2,11,18,28],can:20,choic:29,cli:[25,28,29,31,32,33,34,35,36],color:[3,8,9,10,11,12,13,14,15,17,20],color_help:26,command:[0,6,7,8,9,10,11,12,13,14,15,16,17,18],constant:41,contribut:1,devic:[1,5,27,28,29,31,32,33,34,35,36,41],dict:[4,12,14,15,17],dim:20,document:[1,21],doe:20,dpi:10,effect:20,engin:20,environ:19,exampl:[4,12,14,15,17],except:41,express:[4,12,14,15,17],factori:39,fake:41,frequent:20,from:22,gradient:[4,12,14,15,17,20],handler:30,helper:37,hexadecim:[3,8,9,10,11,12,13,14,15,17],hid:41,high:23,how:20,indic:21,instal:22,intern:38,kana:6,kei:[2,11,18,28],keyboard:[2,11,18,28],kinzu:7,layout:28,level:23,light:20,line:[0,6,7,8,9,10,11,12,13,14,15,16,17,18],linux:22,map:[2,11,18],mayb:42,model:[6,7,8,9,10,11,12,13,14,15,16,17,18],modul:27,mous:[2,11,18,20,28,39],multi_rgbcolor:31,multidpi_rang:32,multimedia:[2,11,18,28],name:[3,8,9,10,11,12,13,14,15,17],notat:[3,8,9,10,11,12,13,14,15,17],off:20,onli:[3,4,8,9,10,11,12,13,14,15,17],oper:42,origin:11,packag:22,prerequisit:22,profil:[27,28,29,31,32,33,34,35,36],pull:1,pypi:22,python:[3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,23,24,38,42],question:[1,20],rainbow:20,rang:33,raw:18,request:1,requir:42,rgb:[3,4,8,9,10,11,12,13,14,15,17],rgbcolor:34,rgbgradient:35,rgbgradientv2:36,rival:[8,9,10,11,12,13,14,15,16],rivalcfg:[20,21],rivalcfg_dri:19,rivalcfg_profil:19,run:1,sensei:[17,18],sensit:10,shift:20,sourc:22,spec:27,special:[2,11,18,28],steelseri:[6,7,8,9,10,11,12,13,14,15,16,17,18,20],support:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,42],system:42,tabl:21,test:1,tupl:[3,8,9,10,11,12,13,14,15,17],turn:20,udev:40,unsupport:1,usag:[0,6,7,8,9,10,11,12,13,14,15,16,17,18],usbhid:41,valu:28,variabl:19,version:42,welcom:21,wherea:20,why:20,window:22}})