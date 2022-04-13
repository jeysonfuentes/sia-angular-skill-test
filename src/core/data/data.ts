import { IMessage } from "../models/message.interface";
import { SEND_TO_OPTIONS } from "../utils/app.constants";

export const MessagesMock: IMessage[] = [
  {
    id: 1,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JHON DOE',
    organizationLevelId: 1,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''

  },
  {
    id: 2,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 3,
    sendToName: SEND_TO_OPTIONS[2].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JHON DOE',
    workerId: 2,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 3,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JHON DOE',
    organizationLevelId: 1,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 4,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 5,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 6,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 3,
    sendToName: SEND_TO_OPTIONS[2].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JHON DOE',
    workerId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 7,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 8,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 9,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 3,
    sendToName: SEND_TO_OPTIONS[2].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JHON DOE',
    workerId: 1,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 10,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 11,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 12,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 13,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 14,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 15,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 16,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 17,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 2,
    sendToName: SEND_TO_OPTIONS[1].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JHON DOE',
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 18,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 19,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  },
  {
    id: 20,
    sendDate: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
    sendToOption: 1,
    sendToName: SEND_TO_OPTIONS[0].label,
    title: 'Test',
    content: 'Test',
    sendBy: 'JIMMY JEY',
    organizationLevelId: 3,
    seen: [
      {
        id: 1,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'ENRIQUE PEREZ'
      },
      {
        id: 2,
        date: randomDate(new Date(2012, 0, 1), new Date()).toDateString(),
        readBy: 'MIGUEL JIMENEZ'
      }
    ],
    image: ''
  }
];


function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
