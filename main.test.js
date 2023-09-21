const {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  isMiddleSchoolTeacher,
  notAnElementarySchoolAdministrator,
} = require('./main')

describe('moreThan5', () => {
  it('returns whether its given number is more than 5', () => {
    expect(moreThan5(3)).toBe(false)
    expect(moreThan5(5)).toBe(false)
    expect(moreThan5(8)).toBe(true)
  })
})

describe('isNewTopScore', () => {
  it('returns whether the first number (the new score) is greater than the second (the old top score)', () => {
    expect(isNewTopScore(5, 15)).toBe(false)
    expect(isNewTopScore(5, 5)).toBe(false)
    expect(isNewTopScore(15, 5)).toBe(true)
  })
})

describe('isInDanger', () => {
  it('returns whether a grade is between 60 and 71, inclusive', () => {
    expect(isInDanger(59)).toBe(false)
    expect(isInDanger(60)).toBe(true);
    expect(isInDanger(71)).toBe(true);
    expect(isInDanger(72)).toBe(false);
  })
})

describe('isCoasting', () => {
  it('returns whether a grade is between 72 and 83, inclusive', () => {
    expect(isCoasting(71)).toBe(false)
    expect(isCoasting(72)).toBe(true);
    expect(isCoasting(83)).toBe(true);
    expect(isCoasting(84)).toBe(false);
  })
})

describe('isSucceeding', () => {
  it('returns whether a grade is between 84 and 92, inclusive', () => {
    expect(isSucceeding(83)).toBe(false)
    expect(isSucceeding(84)).toBe(true);
    expect(isSucceeding(92)).toBe(true);
    expect(isSucceeding(93)).toBe(false);
  })
})

describe('isFailing', () => {
  it('returns whether a grade is below 60', () => {
    expect(isFailing(59)).toBe(true);
    expect(isFailing(60)).toBe(false)
    expect(isFailing(93)).toBe(false);
  })
})

describe('isAcing', () => {
  it('returns whether a grade is above 92', () => {
    expect(isAcing(91)).toBe(false);
    expect(isAcing(92)).toBe(false)
    expect(isAcing(93)).toBe(true);
  })
})

describe('isStudent', () => {
  it('returns whether the given string is `student`', () => {
    expect(isStudent('student')).toBe(true)
    expect(isStudent('studnt')).toBe(false)
    expect(isStudent('students are awesome')).toBe(false)
    expect(isStudent('teacher')).toBe(false)
  })
})

describe('isTeacher', () => {
  it('returns whether the given string is `teacher`', () => {
    expect(isTeacher('student')).toBe(false)
    expect(isTeacher('tchr')).toBe(false)
    expect(isTeacher('teachers are even better')).toBe(false)
    expect(isTeacher('teacher')).toBe(true)
  })
})

describe('isAdmin', () => {
  it('returns whether the given string is `admin`', () => {
    expect(isAdmin('student')).toBe(false)
    expect(isAdmin('admn')).toBe(false)
    expect(isAdmin('admin is hard')).toBe(false)
    expect(isAdmin('admin')).toBe(true)
  })
})

describe('isElementary', () => {
  it('returns whether the given string is `elementary`', () => {
    expect(isElementary('elementary')).toBe(true)
    expect(isElementary('college')).toBe(false)
    expect(isElementary('lmnty')).toBe(false)
    expect(isElementary('elementary my dear watson')).toBe(false)
  })
})

describe('areDifferentPeople', () => {
  it('returns whether two names are different or not', () => {
    expect(areDifferentPeople('colin', 'messi')).toBe(true)
    expect(areDifferentPeople('colin', 'col')).toBe(true)
    expect(areDifferentPeople('colin', 'coln')).toBe(true)
    expect(areDifferentPeople('colin', 'colin is such a doll')).toBe(true)
    expect(areDifferentPeople('colin', 'colin')).toBe(false)
  })
})

describe('isMiddleSchoolTeacher', () => {
  it('returns whether the first parameter is the string `teacher` AND the second parameter is a number from 6-8 inclusive', () => {
    expect(isMiddleSchoolTeacher('admin', 12)).toBe(false)
    expect(isMiddleSchoolTeacher('admin', 7)).toBe(false)
    expect(isMiddleSchoolTeacher('student', 7)).toBe(false)
    expect(isMiddleSchoolTeacher('teacher', 5)).toBe(false)
    expect(isMiddleSchoolTeacher('teacher', 6)).toBe(true)
    expect(isMiddleSchoolTeacher('teacher', 7)).toBe(true)
    expect(isMiddleSchoolTeacher('teacher', 8)).toBe(true)
    expect(isMiddleSchoolTeacher('teacher', 9)).toBe(false)
  })
})

describe('notAnElementarySchoolAdministrator', () => {
  it('returns whether the first given string is NOT `elementary` OR the second given string is NOT `admin`', () => {
    expect(notAnElementarySchoolAdministrator('elementary', 'admin')).toBe(false)
    expect(notAnElementarySchoolAdministrator('college', 'guidance counselor')).toBe(true)
    expect(notAnElementarySchoolAdministrator('elementary', 'teacher')).toBe(true)
    expect(notAnElementarySchoolAdministrator('pre-k', 'admin')).toBe(true)
  })
})
