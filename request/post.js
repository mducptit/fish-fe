export const createProfile = async (data) => {
  delete data.file;
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/fish/create-info`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const login = async (data) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/fish/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const twoFactor = async (data) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/fish/2fa`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
