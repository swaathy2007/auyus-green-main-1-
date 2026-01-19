import { useState, useEffect } from "react";

export interface Bookmark {
  plantId: string;
  addedAt: Date;
}

export interface Note {
  id: string;
  plantId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const BOOKMARKS_KEY = "herbal-garden-bookmarks";
const NOTES_KEY = "herbal-garden-notes";

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem(BOOKMARKS_KEY);
    const storedNotes = localStorage.getItem(NOTES_KEY);
    
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const addBookmark = (plantId: string) => {
    const newBookmark: Bookmark = { plantId, addedAt: new Date() };
    const updated = [...bookmarks, newBookmark];
    setBookmarks(updated);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  };

  const removeBookmark = (plantId: string) => {
    const updated = bookmarks.filter(b => b.plantId !== plantId);
    setBookmarks(updated);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  };

  const isBookmarked = (plantId: string): boolean => {
    return bookmarks.some(b => b.plantId === plantId);
  };

  const toggleBookmark = (plantId: string) => {
    if (isBookmarked(plantId)) {
      removeBookmark(plantId);
    } else {
      addBookmark(plantId);
    }
  };

  const addNote = (plantId: string, content: string) => {
    const newNote: Note = {
      id: crypto.randomUUID(),
      plantId,
      content,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const updated = [...notes, newNote];
    setNotes(updated);
    localStorage.setItem(NOTES_KEY, JSON.stringify(updated));
    return newNote;
  };

  const updateNote = (noteId: string, content: string) => {
    const updated = notes.map(note =>
      note.id === noteId
        ? { ...note, content, updatedAt: new Date() }
        : note
    );
    setNotes(updated);
    localStorage.setItem(NOTES_KEY, JSON.stringify(updated));
  };

  const deleteNote = (noteId: string) => {
    const updated = notes.filter(note => note.id !== noteId);
    setNotes(updated);
    localStorage.setItem(NOTES_KEY, JSON.stringify(updated));
  };

  const getNotesByPlant = (plantId: string): Note[] => {
    return notes.filter(note => note.plantId === plantId);
  };

  return {
    bookmarks,
    notes,
    addBookmark,
    removeBookmark,
    isBookmarked,
    toggleBookmark,
    addNote,
    updateNote,
    deleteNote,
    getNotesByPlant
  };
};
