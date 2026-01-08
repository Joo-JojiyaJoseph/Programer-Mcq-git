import React, { useState, useEffect, useRef } from 'react'
import { subjects as SUBJECTS } from './data/subjects'

const STORAGE_KEY = 'pscAssistant2026Data'

export default function App() {
  const [userData, setUserData] = useState(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      if (s) {
        return JSON.parse(s)
      }
    } catch (e) {
      console.error('Error parsing localStorage data:', e)
    }
    return { subjects: {} }
  })

  const [testOpen, setTestOpen] = useState(false)
  const [resultsOpen, setResultsOpen] = useState(false)
  const [analyticsOpen, setAnalyticsOpen] = useState(null)
  const [currentTest, setCurrentTest] = useState(null)
  const [showCancelConfirm, setShowCancelConfirm] = useState(false)
  const timerRef = useRef(null)

  // Initialize subjects in localStorage
  useEffect(() => {
    const initializedData = { ...userData }
    let needsUpdate = false
    
    Object.keys(SUBJECTS).forEach(id => {
      if (!initializedData.subjects[id]) {
        initializedData.subjects[id] = {
          testsTaken: 0,
          totalScore: 0,
          bestScore: 0,
          averageScore: 0,
          totalCorrect: 0,
          totalIncorrect: 0,
          topicPerformance: {},
        }
        needsUpdate = true
      }
    })
    
    if (needsUpdate) {
      setUserData(initializedData)
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))
  }, [userData])

  // Start Test - Now uses ALL questions
  function startTest(subjectId) {
    const subject = SUBJECTS[subjectId]
    const questions = [...subject.questions]
      .sort(() => Math.random() - 0.5)
      .map(q => ({ ...q })) // Remove the slice to use all questions
    
    // Calculate time based on number of questions (60 seconds per question, max 2 hours)
    const totalTime = Math.min(questions.length * 60, 7200)
    
    setCurrentTest({
      subjectId,
      questions,
      userAnswers: {},
      index: 0,
      timeRemaining: totalTime,
      submitted: false
    })
    setTestOpen(true)
    setResultsOpen(false)
    setAnalyticsOpen(null)
    setShowCancelConfirm(false)
  }

  // Timer
  useEffect(() => {
    if (!currentTest || currentTest.submitted) return
    
    timerRef.current = setInterval(() => {
      setCurrentTest(prev => {
        if (!prev || prev.timeRemaining <= 1) {
          clearInterval(timerRef.current)
          if (!prev.submitted) {
            submitTest(prev)
          }
          return prev
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 }
      })
    }, 1000)
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [currentTest])

  // Select option
  function selectOption(qId, letter) {
    if (!currentTest || currentTest.submitted) return
    
    setCurrentTest(prev => ({
      ...prev,
      userAnswers: { ...prev.userAnswers, [qId]: letter },
    }))
  }

  // Cancel test
  function cancelTest() {
    if (currentTest && !currentTest.submitted) {
      setShowCancelConfirm(true)
    }
  }

  // Confirm cancel test
  function confirmCancelTest() {
    clearInterval(timerRef.current)
    setCurrentTest(null)
    setTestOpen(false)
    setShowCancelConfirm(false)
  }

  // Continue test (from cancel confirmation)
  function continueTest() {
    setShowCancelConfirm(false)
  }

  // Submit test
  function submitTest(testState = currentTest) {
    if (!testState || testState.submitted) return
    
    clearInterval(timerRef.current)
    
    let correct = 0
    const topicPerformance = {}
    
    testState.questions.forEach(q => {
      if (testState.userAnswers[q.id] === q.answer) {
        correct++
      }
      
      if (!topicPerformance[q.topic]) {
        topicPerformance[q.topic] = { correct: 0, total: 0 }
      }
      topicPerformance[q.topic].total++
      if (testState.userAnswers[q.id] === q.answer) {
        topicPerformance[q.topic].correct++
      }
    })
    
    const score = Math.round((correct / testState.questions.length) * 100)
    
    setUserData(prev => {
      const next = { ...prev }
      if (!next.subjects) next.subjects = {}
      if (!next.subjects[testState.subjectId]) {
        next.subjects[testState.subjectId] = {
          testsTaken: 0,
          totalScore: 0,
          bestScore: 0,
          averageScore: 0,
          totalCorrect: 0,
          totalIncorrect: 0,
          topicPerformance: {},
        }
      }
      
      const s = next.subjects[testState.subjectId]
      
      s.testsTaken++
      s.totalScore += score
      s.averageScore = Math.round(s.totalScore / s.testsTaken)
      s.bestScore = Math.max(s.bestScore || 0, score)
      s.totalCorrect += correct
      s.totalIncorrect += testState.questions.length - correct
      
      Object.entries(topicPerformance).forEach(([topic, data]) => {
        if (!s.topicPerformance[topic]) {
          s.topicPerformance[topic] = { correct: 0, total: 0 }
        }
        s.topicPerformance[topic].correct += data.correct
        s.topicPerformance[topic].total += data.total
      })
      
      return next
    })
    
    setCurrentTest(prev => prev ? { ...prev, submitted: true } : null)
    setTestOpen(false)
    setResultsOpen(true)
    setShowCancelConfirm(false)
  }

  // Subject Card component
  const SubjectCard = ({ subjectId }) => {
    const subject = SUBJECTS[subjectId]
    const sdata = userData?.subjects?.[subjectId] || {
      testsTaken: 0,
      averageScore: 0,
      bestScore: 0
    }
    
    if (!subject) return null
    
    return (
      <div className="bg-white rounded-xl shadow p-6 border-l-4 h-full" style={{ borderColor: subject.iconColor }}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: subject.iconColor }}>
            <i className={subject.icon}></i>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold truncate">{subject.name}</h3>
            <p className="text-sm text-gray-500 truncate">{subject.details}</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 text-center mt-6">
          <div>
            <div className="font-bold">{sdata.averageScore || 0}%</div>
            <div className="text-xs text-gray-500">Avg</div>
          </div>
          <div>
            <div className="font-bold">{sdata.testsTaken || 0}</div>
            <div className="text-xs text-gray-500">Tests</div>
          </div>
          <div>
            <div className="font-bold">{sdata.bestScore || 0}%</div>
            <div className="text-xs text-gray-500">Best</div>
          </div>
          <div>
            <div className="font-bold">{subject.questions.length}</div>
            <div className="text-xs text-gray-500">Questions</div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button 
            onClick={() => startTest(subjectId)} 
            className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Take Test
          </button>
          <button 
            onClick={() => setAnalyticsOpen(subjectId)} 
            className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50"
          >
            Analytics
          </button>
        </div>
      </div>
    )
  }

  // Handle close analytics
  const closeAnalytics = () => {
    setAnalyticsOpen(null)
  }

  // Format time display
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <i className="fas fa-laptop-code text-indigo-600"></i> Assistant Computer Programmer
        </h1>
        <p className="text-gray-600 mt-2">MCQ Practice • Analytics • PSC Pattern</p>
      </header>

      {/* Grid Subject Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {Object.keys(SUBJECTS).map(id => (
            <SubjectCard key={id} subjectId={id} />
          ))}
        </div>
      </div>

      {/* TEST MODAL */}
      {testOpen && currentTest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Header with subject, progress, and cancel button */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: SUBJECTS[currentTest.subjectId]?.iconColor }}
                >
                  <i className={SUBJECTS[currentTest.subjectId]?.icon}></i>
                </div>
                <div>
                  <h3 className="font-bold">{SUBJECTS[currentTest.subjectId]?.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Question {currentTest.index + 1} of {currentTest.questions.length}</span>
                    <span>•</span>
                    <span>
                      {formatTime(currentTest.timeRemaining)}
                    </span>
                    <span>•</span>
                    <span>{currentTest.questions.length} questions total</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={cancelTest}
                className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
              >
                <i className="fas fa-times"></i>
                Cancel Test
              </button>
            </div>

            {/* Question */}
            <div className="mb-6">
              <p className="text-lg font-medium mb-6">{currentTest.questions[currentTest.index].question}</p>
              
              <div className="grid gap-3">
                {['A', 'B', 'C', 'D'].map((letter, i) => {
                  const questionId = currentTest.questions[currentTest.index].id
                  const isSelected = currentTest.userAnswers[questionId] === letter
                  
                  return (
                    <button
                      key={letter}
                      onClick={() => selectOption(questionId, letter)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        isSelected 
                          ? 'border-indigo-600 bg-indigo-50' 
                          : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                      }`}
                    >
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border mr-3 font-medium">
                        {letter}
                      </span>
                      {currentTest.questions[currentTest.index].options[i]}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <button
                onClick={() => setCurrentTest(t => ({ ...t, index: Math.max(0, t.index - 1) }))}
                disabled={currentTest.index === 0}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg ${
                  currentTest.index === 0 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <i className="fas fa-arrow-left"></i>
                Previous
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => cancelTest()}
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                
                <button
                  onClick={() => submitTest()}
                  className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Submit Test
                </button>
                
                {currentTest.index < currentTest.questions.length - 1 && (
                  <button
                    onClick={() => setCurrentTest(t => ({ ...t, index: t.index + 1 }))}
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Next
                    <i className="fas fa-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Question navigation dots */}
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-500 mb-3">Jump to question:</p>
              <div className="flex flex-wrap gap-2">
                {currentTest.questions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTest(t => ({ ...t, index: idx }))}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all relative ${
                      idx === currentTest.index
                        ? 'bg-indigo-600 text-white scale-105'
                        : currentTest.userAnswers[currentTest.questions[idx].id]
                        ? 'bg-green-100 text-green-800 border border-green-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {idx + 1}
                    {currentTest.userAnswers[currentTest.questions[idx].id] && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress stats */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-indigo-600">
                    {Object.keys(currentTest.userAnswers).length}
                  </div>
                  <div className="text-sm text-gray-500">Answered</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-600">
                    {currentTest.questions.length - Object.keys(currentTest.userAnswers).length}
                  </div>
                  <div className="text-sm text-gray-500">Remaining</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">
                    {currentTest.questions.length}
                  </div>
                  <div className="text-sm text-gray-500">Total Questions</div>
                </div>
                <div>
                  <div className="text-lg font-bold" style={{ color: SUBJECTS[currentTest.subjectId]?.iconColor }}>
                    {formatTime(currentTest.timeRemaining)}
                  </div>
                  <div className="text-sm text-gray-500">Time Left</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CANCEL CONFIRMATION MODAL */}
      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white p-8 rounded-xl w-full max-w-md text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <i className="fas fa-exclamation-triangle text-red-600 text-3xl"></i>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Cancel Test?</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel this test? All your progress will be lost and won't be saved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={continueTest}
                className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Continue Test
              </button>
              <button
                onClick={confirmCancelTest}
                className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
              >
                <i className="fas fa-times mr-2"></i>
                Yes, Cancel Test
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Time remaining: {formatTime(currentTest.timeRemaining)}
            </p>
          </div>
        </div>
      )}

      {/* RESULT MODAL */}
      {resultsOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-xl w-full max-w-md text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <i className="fas fa-check text-green-600 text-3xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Test Completed!</h2>
            <p className="text-gray-500 mt-2">Your score has been saved successfully</p>
            
            <div className="mt-8">
              <button
                onClick={() => {
                  setResultsOpen(false)
                  setAnalyticsOpen(currentTest?.subjectId)
                }}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 mb-3"
              >
                View Detailed Analytics
              </button>
              <button
                onClick={() => setResultsOpen(false)}
                className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ANALYTICS MODAL */}
      {analyticsOpen && userData?.subjects?.[analyticsOpen] && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && closeAnalytics()}
        >
          <div className="bg-white p-6 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Analytics – {SUBJECTS[analyticsOpen]?.name}
                </h2>
                <p className="text-gray-500 mt-1">Performance breakdown by topic</p>
              </div>
              <button
                onClick={closeAnalytics}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Overall Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">
                  {userData.subjects[analyticsOpen].averageScore || 0}%
                </div>
                <div className="text-sm text-gray-600 mt-1">Average Score</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-700">
                  {userData.subjects[analyticsOpen].bestScore || 0}%
                </div>
                <div className="text-sm text-gray-600 mt-1">Best Score</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-700">
                  {userData.subjects[analyticsOpen].testsTaken || 0}
                </div>
                <div className="text-sm text-gray-600 mt-1">Tests Taken</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-700">
                  {userData.subjects[analyticsOpen].totalCorrect || 0}
                </div>
                <div className="text-sm text-gray-600 mt-1">Correct Answers</div>
              </div>
            </div>

            {/* Topic Performance */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Topic-wise Performance</h3>
              
              {Object.keys(userData.subjects[analyticsOpen].topicPerformance || {}).length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-chart-bar text-4xl mb-3 opacity-50"></i>
                  <p>No test data available yet.</p>
                  <p className="text-sm mt-2">Take a test to see your performance analytics</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {Object.entries(userData.subjects[analyticsOpen].topicPerformance || {}).map(([topic, data]) => {
                    const percentage = Math.round((data.correct / data.total) * 100) || 0
                    
                    return (
                      <div key={topic} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{topic}</span>
                          <span className="font-bold">
                            {data.correct} / {data.total} correct ({percentage}%)
                          </span>
                        </div>
                        <div className="bg-gray-100 h-3 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${percentage}%`,
                              backgroundColor: percentage >= 70 ? '#10b981' : 
                                             percentage >= 50 ? '#3b82f6' : 
                                             '#ef4444'
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                          <span>0%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t">
              <button
                onClick={() => startTest(analyticsOpen)}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
              >
                Take Another Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}