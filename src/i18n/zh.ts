import type { I18nMessages } from "@/i18n/types";

export const zh: I18nMessages = {
  seoTitle: "全网 API 纯净度检测所 | 大模型接口真伪测速工具",
  seoDescription:
    "免费检测 API 中转站是否存在协议篡改、能力掺水、身份错配等问题。致力于帮助开发者和企业快速识别高纯度、高并发的稳定模型接口。",
  seoOgTitle: "全网 API 纯净度检测所 | 大模型接口真伪测速工具",
  seoOgDescription:
    "快速检测 API 代理源是否靠谱，客观评估接口纯净度、流式响应速度与架构稳定性。",
  appTitle: "API 纯净度检测所",
  appSubtitle: "拒绝“高配低卖”，快速识别中转站接口真假",
  securityNotice:
    "为保障账户安全，建议优先使用测试专用 API Key。本工具采用纯前端处理逻辑，不会上传或存储你的 API Key。检测历史仅保存在当前浏览器本地。",
  configSectionTitle: "接口配置",
  introSectionTitle: "什么是 API 纯净度检测？",
  introSectionBody1:
    "这个页面用于帮助你快速判断一个 API 接口到底是在稳定转发真实模型，还是存在包装、降级掺水等情况。我们会通过多轮探测请求，对接口的流式响应结构、知识表现、身份一致性以及指纹特征进行交叉判断。",
  introSectionBody2:
    "在构建复杂的自动化工作流或进行高并发业务前，先做一次低成本的技术核验，能有效避免因接口“掺水”导致的业务逻辑崩溃和封号风险。",
  faqSectionTitle: "常见问题",
  faqQuestion1: "什么样的 API 代理服务更靠谱？",
  faqAnswer1:
    "市面上很多廉价中转站采用层层嵌套的普通 API 转发，延迟高且极易漏字报错。真正企业级的代理服务，通常采用底层反向代理技术，直连官方节点池，在保证 100% 纯净度的同时，提供极高的并发稳定性和网络穿透能力。",
  faqQuestion2: "接口“掺水”会对业务产生什么影响？",
  faqAnswer2:
    "影响极其恶劣。最常见的是用低阶模型冒充高阶模型（如 3.5 冒充 4.0），这会导致模型在处理复杂长文本、代码逻辑或接入 n8n、Make 等工作流时，频繁出现上下文遗忘、JSON 格式化失败或指令不遵循等致命错误。",
  faqQuestion3: "检测评分标准是什么？",
  faqAnswer3:
    "我们会向目标接口发送特定的结构化探针，并结合协议完整性、响应延迟（TTFB）、知识问答准确率、身份一致性等维度综合评分。交叉验证能让大部分“挂羊头卖狗肉”的劣质接口无所遁形。",
  
  // ==========================================
  // 下面这两行是最核心的引流转化位，一定要改！
  // ==========================================
  faqQuestion4: "有稳定且支持高并发的纯净接口推荐吗？",
  faqAnswer4:
    "我们团队依托核心反向代理架构，搭建了专为复杂业务设计的高并发纯净接口池。完美兼容各种自动化流程，不掺水、防阻断。新用户可在此获取专属测试额度：",
  faqAnswer4LinkLabel: "👉 申请专属测试接口",

  validationEndpointRequired: "请输入 API 接口地址",
  validationApiKeyRequired: "请输入 API Key",
  validationModelRequired: "请选择目标模型",

  turnstileMissingSiteKey: "缺少验证码校验模块",
  turnstileCompleteFirst: "请先完成人机验证",
  humanVerificationFailed: "网络环境校验失败",
  humanVerificationFailedDetail: "请刷新页面重新验证后再试。",

  detectionComplete: "检测完成",
  detectionFailed: "检测失败",
  detectionFailedDetail: "请求过程中出现异常，这通常说明该接口网络极不稳定或已阻断。",

  upstreamPrefix: "目标站点返回：",
  systemPrefix: "系统提示：",

  actionStartDetection: "开始极限测压",
  actionScanning: "深度探测中...",

  resultTitle: "诊断报告",
  reportIdPrefix: "报告编号",

  historyTitle: "最近检测历史",
  historyEmptyTitle: "引擎准备就绪",
  historyEmptyDescription: "您的检测记录将加密保存在本地",
  historyExport: "导出报告",
  historyClear: "清除缓存",
  historyTimestamp: "测试时间",
  historyModel: "目标模型",
  historyEndpoint: "接口地址",
  historyScore: "纯净度评分",
  historyStatus: "网络状态",

  toastViewingReport: "正在生成可视化报告",
  toastExportComingSoon: "PDF 导出功能即将上线",
  toastHistoryCleared: "本地缓存已安全清除",

  verifyModalTitle: "安全环境校验",
  verifyModalDescription: "为防止接口被恶意测压，请完成安全验证。",
  verifyModalCancel: "取消",
  verifyModalConfirm: "开始校验",

  apiEndpointLabel: "API 接口地址 (Base URL)",
  apiEndpointPlaceholder: "例如: https://xxxxx.com",
  apiKeyLabel: "API Key (密钥)",
  apiKeyPlaceholder: "sk-...",
  apiNoProvidersFound: "未匹配到已知服务商规范",
  apiActionCopy: "复制结果",
  apiActionClear: "清空输入",

  modelTargetLabel: "指定探测模型",

  overlayAnalyzing: "正在进行底层指纹分析...",

  metricLatency: "首字延迟 (TTFB)",
  metricTokensPerSecond: "输出速率 (Tokens/s)",
  metricInputTokens: "消耗输入 Tokens",
  metricOutputTokens: "消耗输出 Tokens",

  scoreLabelAuthentic: "100% 纯净可信",
  scoreLabelMostlyReliable: "基本可靠",
  scoreLabelSuspicious: "疑似包装掺水",
  scoreLabelFake: "劣质虚假接口",

  checkProtocolName: "底层协议一致性",
  checkProtocolStable: "完美匹配",
  checkProtocolPartial: "部分匹配 (存在风险)",
  checkProtocolWeak: "严重异常",

  checkResponseStructureName: "流式数据结构",
  checkResponseJsonValid: "JSON 格式严谨",
  checkResponseSinglePrompt: "流式截断",
  checkResponseInvalid: "结构损毁",

  checkKnowledgeCutoffName: "核心智力校验",
  checkPass: "满分通过",
  checkFail: "智力异常",

  checkIdentityName: "模型身份一致性",
  checkIdentityConsistent: "身份吻合",
  checkIdentityMismatch: "身份被篡改",

  checkThinkingChainName: "高阶思维链 (CoT) 痕迹",
  checkThinkingPresent: "有效触发",
  checkThinkingNotFound: "能力被降级屏蔽",

  checkSignatureName: "安全指纹校验",
  checkSignatureLengthOk: "验证通过",
  checkSignatureShort: "指纹残缺",
  checkSignatureMissing: "指纹被剥离",

  probeRequestFailedTitle: "接口握手失败",
  probeRequestFailedDetail: "检测到该接口拒绝连接或响应超时，请检查您的上游网络质量。",
  probeInvalidResponseTitle: "接口返回致命错误",
  upstreamNoErrorDetail: "上游网关未抛出标准错误码，疑似中间件崩溃。",

  footerBrand: "技术团队 提供支持",
  footerEmail: "联系我们",
  footerRights: "保留所有权利。",

  notFoundDescription: "页面似乎迷路了",
  notFoundBackHome: "返回检测中心",
};