// Migrated verbatim from the public Notion technical support page.
// Keep the original Chinese content shared across support routes; do not translate it.
// Source: https://tattered-harrier-abe.notion.site/Posturely-38f21af4323680db99e0d04cebf5812d
export const supportContent = {
  "title": "Posturely 技术支持",
  "description": "感谢你使用 Posturely。Posturely 是一款面向学习和作业场景的坐姿提醒工具，帮助用户在本地设备上进行坐姿监督和提醒。",
  "intro": "感谢你使用 Posturely。Posturely 是一款面向学习和作业场景的坐姿提醒工具，帮助用户在本地设备上进行坐姿监督和提醒。",
  "contact": {
    "title": "联系支持",
    "intro": "如果你在使用 Posturely 时遇到问题，请通过以下方式联系支持：",
    "items": [
      "支持邮箱：diammd@icloud.com",
      "邮件标题建议：Posturely 技术支持",
      "请在邮件中说明你的设备型号、iOS 版本、App 版本、问题发生步骤，以及是否可以稳定复现。"
    ],
    "outro": "我们会尽量根据问题信息进行排查和回复。"
  },
  "faq": {
    "title": "常见问题",
    "items": [
      {
        "question": "App 为什么需要摄像头权限？",
        "paragraphs": [
          "Posturely 使用摄像头在本地进行坐姿检测，用于判断学习过程中是否出现低头、歪头、肩膀不平等坐姿问题。"
        ]
      },
      {
        "question": "Posturely 会上传视频或照片吗？",
        "paragraphs": [
          "不会。Posturely 的 MVP 默认不上传原始摄像头画面、不保存原始视频帧，也不提供远程直播功能。坐姿检测在本地设备上完成。"
        ]
      },
      {
        "question": "为什么我听不到提醒声音？",
        "paragraphs": [
          "请检查："
        ],
        "list": [
          "iPhone 是否处于静音模式。",
          "系统音量是否过低。",
          "App 是否拥有必要的声音播放权限。",
          "设备是否连接了蓝牙耳机或其他音频输出设备。"
        ]
      },
      {
        "question": "为什么坐姿检测不准确？",
        "paragraphs": [
          "坐姿检测效果会受到光线、设备角度、距离、遮挡和坐姿场景影响。建议："
        ],
        "list": [
          "将 iPhone 固定在能看到上半身和头肩位置的角度。",
          "保持光线充足。",
          "避免脸部、肩膀被书本、手臂或桌面遮挡。",
          "开始监督前保持一个正常坐姿作为基准。"
        ]
      },
      {
        "question": "如何恢复购买？",
        "paragraphs": [
          "如果你已经购买 Posturely 会员，但换机或重装后没有显示会员状态，请进入 App 内的服务与权益页面，使用恢复购买功能。购买关系由 Apple App Store / StoreKit 维护，请确认当前设备登录的是购买时使用的同一个 Apple Account。"
        ]
      },
      {
        "question": "如何管理或取消订阅？",
        "paragraphs": [
          "年度会员订阅由 Apple 管理。你可以在 iPhone 中打开：",
          "设置 -> Apple Account -> 订阅",
          "然后找到 Posturely 进行管理或取消。"
        ]
      }
    ]
  },
  "scope": {
    "title": "适用范围",
    "text": "本页面用于 Posturely App Store 技术支持。隐私政策、服务条款和订阅规则以 App 内展示及 App Store Connect 配置为准。"
  }
} as const;
