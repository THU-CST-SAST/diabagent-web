/**
 * Chinese text for the data in diabagent.js, keyed by its English name or id.
 * Terms follow the Chinese draft of the paper. Numbers stay in diabagent.js.
 */
export default {
  TITLE: "DiabAgent：迈向智能体生理控制",
  META: "清华大学 · 甜星在线社群 · Einsia AI · 2026",

  heroLinks: {
    Benchmark: "基准",
    Paper: "论文",
    Code: "代码",
  },

  simDimensions: {
    "Patient parameters": { value: "自定义", title: "患者参数", body: "可配置性别、年龄、身高、体重、初始血糖、胰岛素敏感性和治疗参数。预设只是起点，不限制可构建的患者。" },
    "Device and therapy categories": { title: "设备与治疗类别", body: "5 款泵、10 款笔、8 种 CGM 配置、6 种血糖仪配置；10 种胰岛素，以及 HCL、oref1 两种主要闭环算法。另含理想泵和 2 种传感器测试模型。" },
    "Events and disturbances": { value: "可组合", title: "事件与扰动", body: "可组合进餐与吸收、有氧或无氧运动、饮酒、应激、缺觉、月经周期、疾病、既往给药、输注故障和传感器异常，并配置时间、持续时长、强度与随机性。" },
    "Information presets": { title: "信息条件预设", body: "完整报告、部分报告或仅传感器与设备数据。还可配置报告概率、延迟、误差及逐类事件的信息屏蔽。" },
  },

  featured: {
    "c04-child-male": { tag: "领先最多", line: "跳过早餐和午餐，又运动数小时，这些都没有报告。" },
    "b03-adult-male": { tag: "得分最高", line: "进餐取消时，方波胰岛素仍在输注。" },
    "c04-older-male": { tag: "进步最快", line: "同样的隐藏日程，一天比一天处理得好。" },
    "e04-adolescent-female": { tag: "失败案例", line: "它发现过一次输注渗漏，渗漏再次出现时却没有察觉。" },
  },

  weekLearning: {
    "Record + plan + feedback": "记录 + 计划 + 执行反馈",
    "Record + review plan": "记录 + 复盘计划",
    "Cross-day record only": "仅跨日记录",
    "Daily record reset": "每日清空记录",
  },

  deviceStudy: {
    "Slow-meal overlap": "慢餐叠加",
    "Stress resolution": "应激消退",
    "Post-illness refeeding": "病后复食",
  },

  contextIntervals: {
    "15 min": "15 分钟",
    "30 min": "30 分钟",
    "60 min": "60 分钟",
    "120 min": "120 分钟",
  },

  contextRows: {
    I0: "自由文本报告",
    I1: "进餐时间和碳水量",
    I2: "仅传感器和设备",
  },

  events: {
    meal: "进餐",
    exercise: "运动",
    stress: "应激",
    illness: "疾病",
    sleep_loss: "睡眠不足",
    alcohol: "饮酒",
    alcohol_effect: "饮酒",
    infusion_deficit: "泵输注不足",
    sensor_drift: "传感器漂移",
    sensor_calibration_error: "错误校准",
  },

  baselines: {
    "OpenAPS (15 min)": "OpenAPS（15 分钟）",
    "BB+Rules (15 min)": "BB+Rules（15 分钟）",
    "BB (15 min)": "BB（15 分钟）",
  },

  groups: {
    A: { name: "进餐时机与吸收", line: "进餐可能推迟、相互叠加，或在给药后取消。" },
    B: { name: "先前剂量的胰岛素", line: "下一次决策时，先前的剂量仍在起效。" },
    C: { name: "运动", line: "运动使血糖下降，智能体只能看到下降本身。" },
    D: { name: "胰岛素需求变化", line: "应激、睡眠不足和黎明现象改变胰岛素需求。" },
    E: { name: "泵输注不足", line: "泵记录的剂量没有全部进入身体。" },
    F: { name: "传感器误差", line: "传感器读数会漂移、中断或出错。" },
    H: { name: "疾病与恢复", line: "胰岛素需求和食欲在不同时间恢复。" },
  },

  cohorts: {
    "Children, 9 y": "儿童，9 岁",
    "Adolescents, 15 y": "青少年，15 岁",
    "Adults, 39 y": "成人，39 岁",
    "Older adults, 70 y": "老年人，70 岁",
  },

  people: {
    "Boy, 9 y": "男孩，9 岁",
    "Girl, 9 y": "女孩，9 岁",
    "Teen boy, 15 y": "青少年男性，15 岁",
    "Teen girl, 15 y": "青少年女性，15 岁",
    "Man, 39 y": "成年男性，39 岁",
    "Woman, 39 y": "成年女性，39 岁",
    "Older man, 70 y": "老年男性，70 岁",
    "Older woman, 70 y": "老年女性，70 岁",
  },

  templates: {
    A01: "多次少量进食与慢吸收主餐叠加",
    A02: "两次慢餐尾部叠加后续进食",
    A03: "餐前已注射大剂量后取消进餐，随后运动",
    A04: "已注射餐时大剂量后取消早餐，随后长时间空腹",
    B01: "小餐后多次给药，吸收结束时胰岛素作用叠加",
    B02: "先前叠加给药后，运动与小餐交错",
    B03: "取消进餐后仍有剩余方波输注，补食延后",
    B04: "救援碳水仍在吸收，主餐又被推迟",
    C01: "两段运动穿插补给和多餐",
    C02: "肝糖输出短暂升高，随后有氧运动",
    C03: "晚间运动和饮酒的延迟作用",
    C04: "长时间有氧运动期间跳过早餐和午餐",
    D01: "两次短暂应激在后续运动前消退",
    D02: "睡眠不足和黎明现象后胰岛素需求回升",
    D03: "黎明相关需求消退时早餐仍在慢吸收，随后又有快速摄入",
    D04: "睡眠不足相关需求恢复时午餐仍在吸收，随后再次进食",
    D05: "两段餐后应激消退，分别叠加慢吸收与快速摄入",
    D06: "夜间慢餐尾部与饮酒延迟作用叠加，次日清晨再进食",
    E01: "无声的输注不足叠加多餐",
    E02: "三次间歇性输注不足，进餐不规律",
    E03: "主动修复输注不足后进行运动",
    E04: "无声的输注不足，同时传感器读数逐渐偏高",
    F01: "运动导致血糖下降，同时传感器读数偏高",
    F02: "餐后血糖真实升高，同时传感器读数偏低",
    F03: "传感器信号中断前后的进餐与运动",
    F04: "疾病恢复期伴错误校准和传感器漂移",
    F05: "校准即将到期，同时仍有慢餐吸收和近期给药",
    F06: "漏餐和运动导致低血糖，被传感器正偏差掩盖",
    H01: "患病期间多次进餐，慢吸收持续到恢复期",
    H02: "患病期间进食减少，此前仍有慢吸收和近期治疗",
    H03: "胰岛素需求先于食欲恢复，午餐慢吸收后又有快速摄入",
    H04: "疾病伴输注不足需要修复，随后胰岛素需求恢复",
  },
};
