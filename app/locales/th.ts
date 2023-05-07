import { SubmitKey } from "../store/config";
import type { LocaleType } from "./index";

const th: LocaleType = {
  WIP: "เร็วๆนี้...",
  Error: {
    Unauthorized:
      "ไม่อนุญาติให้เข้าถึง กรุณาใส่รหัสสำหรับการเข้าถึงในหน้าตั้งค่า",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} ข้อความ`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} ข้อความกับ ChatGPT`,
    Actions: {
      ChatList: "ไปยังรายการแชต",
      CompressedHistory: "Compressed History Memory Prompt",
      Export: "Export All Messages as Markdown",
      Copy: "คัดลอก",
      Stop: "หยุด",
      Retry: "ลองใหม่",
      Delete: "ลบ",
    },
    Rename: "แก้ไขชื่อแชต",
    Typing: "กำลังพิม…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} เพื่อส่งข้อความ`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", Shift + Enter to wrap";
      }
      return inputHints + ", / เพื่อค้นหา prompts";
    },
    Send: "ส่ง",
    Config: {
      Reset: "ย้อนกลับไปสู่ค่าตั้งต้น",
      SaveAs: "Save as Mask",
    },
  },
  Export: {
    Title: "ข้อความทั้งหมด",
    Copy: "คัดลอกทั้งหมด",
    Download: "ดาวโหลด",
    MessageFromYou: "ข้อความจากคุณ",
    MessageFromChatGPT: "ข้อความจาก ChatGPT",
  },
  Memory: {
    Title: "Memory Prompt",
    EmptyContent: "Nothing yet.",
    Send: "Send Memory",
    Copy: "Copy Memory",
    Reset: "Reset Session",
    ResetConfirm:
      "Resetting will clear the current conversation history and historical memory. Are you sure you want to reset?",
  },
  Home: {
    NewChat: "สร้างแชตใหม่",
    DeleteChat: "ยืนยันที่จะลบบทสนทนาที่เลือกใช่ไหม?",
    DeleteToast: "ลบแชตแล้ว",
    Revert: "กลับคืน",
  },
  Settings: {
    Title: "การตั้งค่า",
    SubTitle: "การตั้งค่าทั้งหมด",
    Actions: {
      ClearAll: "ล้างข้อมูลทั้งหมด",
      ResetAll: "ตั้งค่าใหม่ทั้งหมด",
      Close: "ปิด",
      ConfirmResetAll: "Are you sure you want to reset all configurations?",
      ConfirmClearAll: "Are you sure you want to reset all data?",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "ภาษาทั้่งหมด",
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        tr: "Türkçe",
        jp: "日本語",
        de: "Deutsch",
        th: "ภาษาไทย",
      },
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "ขนาดตัวหนังสือ",
      SubTitle: "ปรับขนาดตัวหนังสือของเนื้อหาแชตA",
    },
    Update: {
      Version: (x: string) => `เวอร์ชั่น: ${x}`,
      IsLatest: "เวอร์ชั่นล่าสุด",
      CheckUpdate: "ตรวจสอบการอัพเดท",
      IsChecking: "กำลังตรวจสอบการอัพเดท...",
      FoundUpdate: (x: string) => `มีอัพเดทเวอร์ชั่นใหม่: ${x}`,
      GoToUpdate: "อัพเดท",
    },
    SendKey: "ส่งคีย์",
    Theme: "ธีม",
    TightBorder: "Tight Border",
    SendPreviewBubble: {
      Title: "Send Preview Bubble",
      SubTitle: "Preview markdown in bubble",
    },
    Mask: {
      Title: "Mask Splash Screen",
      SubTitle: "Show a mask splash screen before starting new chat",
    },
    Prompt: {
      Disable: {
        Title: "ปิด auto-completion",
        SubTitle: "Input / to trigger auto-completion",
      },
      List: "รายการ Prompt",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "แก้ไข",
      Modal: {
        Title: "รายการ Prompt",
        Add: "เพิ่ม",
        Search: "ค้นหา Prompts",
      },
      EditModal: {
        Title: "แก้ไข Prompt",
      },
    },
    HistoryCount: {
      Title: "Attached Messages Count",
      SubTitle: "Number of sent messages attached per request",
    },
    CompressThreshold: {
      Title: "History Compression Threshold",
      SubTitle:
        "Will compress if uncompressed messages length exceeds the value",
    },
    Token: {
      Title: "API Key",
      SubTitle: "Use your key to ignore access code limit",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "ยอดคงเหลือ",
      SubTitle(used: any, total: any) {
        return `ใช้งานในเดือนนี้ $${used}, จาก $${total}`;
      },
      IsChecking: "กำลังตรวจสอบ...",
      Check: "ตรวจสอบ",
      NoAccess: "ใส่ API Key เพื่อเช็คยอดคงเหลือ",
    },
    AccessCode: {
      Title: "Access Code",
      SubTitle: "Access control เปิดแล้ว",
      Placeholder: "ต้องการ Access Code",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperature",
      SubTitle: "A larger value makes the more random output",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximum length of input tokens and generated tokens",
    },
    PresencePenlty: {
      Title: "Presence Penalty",
      SubTitle:
        "A larger value increases the likelihood to talk about new topics",
    },
  },
  Store: {
    DefaultTopic: "บทสนทนาใหม่",
    BotHello: "สวัสดีครับ ฉันจะช่วยเหลือคุณได้อย่างไรบ้างอ่ะ?",
    Error: "มีบางอย่างผิดพลาด โปรดลองใหม่ในภายหลัง",
    Prompt: {
      History: (content: string) =>
        "This is a summary of the chat history between the AI and the user as a recap: " +
        content,
      Topic:
        "Please generate a four to five word title summarizing our conversation without any lead-in, punctuation, quotation marks, periods, symbols, or additional text. Remove enclosing quotation marks.",
      Summarize:
        "Summarize our discussion briefly in 200 words or less to use as a prompt for future context.",
    },
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant permission to access clipboard",
  },
  Context: {
    Toast: (x: any) => `With ${x} contextual prompts`,
    Edit: "Contextual and Memory Prompts",
    Add: "Add a Prompt",
  },
  Plugin: {
    Name: "ปลั๊กอิน",
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Prompt Template",
      SubTitle: (count: number) => `${count} prompt templates`,
      Search: "Search Templates",
      Create: "Create",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "พูดคุย",
      View: "ดู",
      Edit: "แก้ไข",
      Delete: "ลบ",
      DeleteConfirm: "ยืนยันที่จะลบใช่หรือไม่",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Prompt Template ${readonly ? "(readonly)" : ""}`,
      Download: "Download",
      Clone: "Clone",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Name",
    },
  },
  NewChat: {
    Return: "ย้อนกลับ",
    Skip: "ข้าม",
    Title: "Pick a Mask",
    SubTitle: "Chat with the Soul behind the Mask",
    More: "Find More",
    NotShow: "Not Show Again",
    ConfirmNoShow: "Confirm to disable？You can enable it in settings later.",
  },

  UI: {
    Confirm: "ยืนยัน",
    Cancel: "ยกเลิก",
    Close: "ปิด",
    Create: "สร้าง",
    Edit: "แก้ไข",
  },
};

export default th;
