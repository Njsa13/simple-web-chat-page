export const {results: data} = {
  results: [
    {
      room: {
        name: "Product A",
        id: 12456,
        image_url: "https://picsum.photos/id/237/200/300",
        participant: [
          {
            id: "admin@mail.com",
            name: "Admin",
            role: 0,
          },
          {
            id: "agent@mail.com",
            name: "Agent A",
            role: 1,
          },
          {
            id: "customer@mail.com",
            name: "king customer",
            role: 2,
          },
        ],
      },
      comments: [
        {
          id: 885512,
          type: "text",
          message: "Selamat malam",
          sender: "customer@mail.com",
        },
        {
          id: 885513,
          type: "text",
          message: "Malam",
          sender: "agent@mail.com",
        },
        {
          id: 885514,
          type: "text",
          message: "Ada yang bisa saya bantu?",
          sender: "agent@mail.com",
        },
        {
          id: 885515,
          type: "text",
          message: "Saya ingin mengirimkan bukti pembayaran, karena diaplikasi selalu gagal",
          sender: "customer@mail.com",
        },
        {
          id: 885516,
          type: "text",
          message: "Baik, silahkan kirimkan lampiran bukti pembayarannya",
          sender: "agent@mail.com",
        },
        {
          id: 885517,
          type: "image",
          message: "https://images.unsplash.com/photo-1753087380647-38a2496b60bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
          sender: "customer@mail.com",
        },
        {
          id: 885518,
          type: "video",
          message: "https://cdn.pixabay.com/video/2024/06/09/215926_large.mp4",
          sender: "customer@mail.com",
        },
        {
          id: 885519,
          type: "pdf",
          message: "/invoice.pdf",
          sender: "customer@mail.com",
        },
      ],
    },
  ],
};
