export interface Room {
  id: string;
  name: string;
  size: string;
  price: number;
  facilities: string[];
}

export interface PropertyDetails {
  id: string;
  name: string;
  location: string;
  rooms: Room[];
  facilities: string[];
  generatedAt: string;
}

export const getPropertyDetails = async (id: string) => {
  const response = await fetch(`http://localhost:4000/property-details/${id}`);
  if (!response.ok) {
    throw new Error(
      `Error fetching property details for ID ${id}: ${response.statusText}`,
    );
  }
  const data = (await response.json()) as PropertyDetails;
  return data;
};
