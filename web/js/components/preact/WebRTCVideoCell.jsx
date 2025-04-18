/**
 * WebRTCVideoCell Component
 * A reusable component for displaying a WebRTC video stream
 */

import { useState, useEffect, useRef } from 'preact/hooks';
import { startDetectionPolling } from './DetectionOverlay.js';
import { SnapshotButton } from './SnapshotManager.jsx';
import { LoadingIndicator } from './LoadingIndicator.jsx';
// We'll use inline styles for the spinner animation instead of injecting a style tag
// This avoids direct DOM manipulation
const spinnerAnimation = 'spin 1s linear infinite';

// Define the keyframes in a style tag in the JSX instead of injecting it directly

/**
 * WebRTCVideoCell component
 * @param {Object} props - Component props
 * @param {Object} props.stream - Stream object
 * @param {Function} props.onTakeSnapshot - Snapshot handler
 * @param {Function} props.onToggleFullscreen - Fullscreen toggle handler
 * @param {Object} props.webrtcConnections - Reference to WebRTC connections
 * @param {Object} props.detectionIntervals - Reference to detection intervals
 * @param {Function} props.initializeWebRTCPlayer - Function to initialize WebRTC player
 * @param {Function} props.cleanupWebRTCPlayer - Function to cleanup WebRTC player
 * @returns {JSX.Element} WebRTCVideoCell component
 */
export function WebRTCVideoCell({
  stream,
  onTakeSnapshot,
  onToggleFullscreen,
  webrtcConnections,
  detectionIntervals,
  initializeWebRTCPlayer,
  cleanupWebRTCPlayer
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cellRef = useRef(null);

  // Initialize WebRTC player when component mounts
  useEffect(() => {
    if (!stream) return;

    console.log(`WebRTCVideoCell: Initializing player for stream ${stream.name}`);

    // Check if this stream already has a connection
    const hasExistingConnection = webrtcConnections.current[stream.name];
    if (hasExistingConnection) {
      console.log(`WebRTCVideoCell: Stream ${stream.name} already has a connection, skipping initialization`);
      setIsLoading(false);
      return;
    }

    // Initialize WebRTC player with a short delay to ensure DOM is ready
    console.log(`WebRTCVideoCell: Will initialize stream ${stream.name} after a short delay`);

    const initTimeout = setTimeout(() => {
      if (videoRef.current && canvasRef.current) {
        console.log(`WebRTCVideoCell: Now initializing stream ${stream.name}`);
        initializeWebRTCPlayer(stream, videoRef.current, canvasRef.current, {
          onLoadedData: () => {
            console.log(`Video data loaded for stream ${stream.name}`);
            setIsLoading(false);
          },
          onPlaying: () => {
            console.log(`Video playing for stream ${stream.name}`);
            setIsLoading(false);

            // Start detection polling if enabled
            if (stream.detection_based_recording && stream.detection_model && canvasRef.current) {
              console.log(`Starting detection polling for stream ${stream.name}`);
              startDetectionPolling(stream.name, canvasRef.current, videoRef.current, detectionIntervals);
            }
          },
          onError: (errorMessage) => {
            console.error(`Video error for stream ${stream.name}:`, errorMessage);
            setError(errorMessage || 'Video playback error');
            setIsLoading(false);
          }
        });
      }
    }, 100); // Short 100ms delay to ensure DOM is ready

    // Cleanup function
    return () => {
      clearTimeout(initTimeout);
      if (stream) {
        console.log(`WebRTCVideoCell: Cleaning up player for stream ${stream.name}`);
        cleanupWebRTCPlayer(stream.name);
      }
    };
  }, [stream.name]); // Only depend on stream.name to prevent unnecessary re-renders

  // Handle retry button click
  const handleRetry = () => {
    if (!stream) return;

    console.log(`Retrying connection for stream ${stream.name}`);
    setIsLoading(true);
    setError(null);

    // Clean up existing connection
    cleanupWebRTCPlayer(stream.name);

    // Force a small delay to ensure cleanup is complete
    setTimeout(() => {
      if (videoRef.current && canvasRef.current) {
        console.log(`Reinitializing WebRTC player for stream ${stream.name}`);
        initializeWebRTCPlayer(stream, videoRef.current, canvasRef.current, {
          onLoadedData: () => {
            console.log(`Video data loaded for stream ${stream.name}`);
            setIsLoading(false);
          },
          onPlaying: () => {
            console.log(`Video playing for stream ${stream.name}`);
            setIsLoading(false);
          },
          onError: (errorMessage) => {
            console.error(`Video error for stream ${stream.name}:`, errorMessage);
            // Try one more time with a longer delay
            console.log(`Trying one more time for stream ${stream.name} with a longer delay`);

            setTimeout(() => {
              if (videoRef.current && canvasRef.current) {
                initializeWebRTCPlayer(stream, videoRef.current, canvasRef.current, {
                  onLoadedData: () => {
                    console.log(`Video data loaded for stream ${stream.name} on second attempt`);
                    setIsLoading(false);
                  },
                  onPlaying: () => {
                    console.log(`Video playing for stream ${stream.name} on second attempt`);
                    setIsLoading(false);
                  },
                  onError: (secondErrorMessage) => {
                    console.error(`Video error for stream ${stream.name} on second attempt:`, secondErrorMessage);
                    setError(secondErrorMessage || 'Video playback error');
                    setIsLoading(false);
                  }
                });
              }
            }, 1000); // Try again after 1 second
          }
        });
      }
    }, 200);
  };

  return (
    <div
      className="video-cell"
      data-stream-name={stream.name}
      data-stream-id={stream.id || stream.name}
      ref={cellRef}
      style={{
        position: 'relative',
        // Ensure the video cell doesn't interfere with navigation elements
        pointerEvents: isLoading ? 'none' : 'auto'
      }}
    >
      {/* Add keyframes for spinner animation in the component */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      {/* Video element */}
      <video
        id={`video-${stream.name.replace(/\s+/g, '-')}`}
        className="video-element"
        ref={videoRef}
        playsInline
        autoPlay
        muted
        style={{ pointerEvents: 'none', width: '100%', height: '100%', objectFit: 'contain', zIndex: 1 }}
      />

      {/* Canvas overlay for detection */}
      <canvas
        id={`canvas-${stream.name.replace(/\s+/g, '-')}`}
        className="detection-overlay"
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2 /* Lower z-index to ensure it doesn't block navigation */
        }}
      />

      {/* Stream name overlay */}
      <div
        className="stream-name-overlay"
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          padding: '5px 10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          borderRadius: '4px',
          fontSize: '14px',
          zIndex: 3, /* Lower z-index to ensure it doesn't block navigation */
          pointerEvents: 'none'
        }}
      >
        {stream.name}
      </div>

      {/* Stream controls */}
      <div
        className="stream-controls"
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          display: 'flex',
          gap: '10px',
          zIndex: 5, /* Lower z-index but still above video and overlays */
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '5px',
          borderRadius: '4px',
          pointerEvents: 'auto' /* Keep pointer events enabled for controls */
        }}
      >
        <div
          style={{
            backgroundColor: 'transparent',
            padding: '5px',
            borderRadius: '4px',
            position: 'relative',
            zIndex: 1 /* Lower z-index to prevent blocking */
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <SnapshotButton
            streamId={stream.id || stream.name}
            streamName={stream.name}
          />
        </div>
        <button
          className="fullscreen-btn"
          title="Toggle Fullscreen"
          data-id={stream.id || stream.name}
          data-name={stream.name}
          onClick={(e) => onToggleFullscreen(stream.name, e, cellRef.current)}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: '5px',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1 /* Lower z-index to prevent blocking */
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
        </button>
      </div>

      {/* Loading indicator */}
      {isLoading && (<LoadingIndicator message="Connecting..." />)}

      {/* Error indicator */}
      {error && (
        <div
          className="error-indicator"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            zIndex: 10,
            pointerEvents: 'auto', /* Keep pointer events enabled for error state to allow retry button clicks */
            textAlign: 'center',
            // Ensure the error indicator is contained within the video cell
            overflow: 'hidden'
          }}
        >
          <div
            className="error-content"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%',
              maxWidth: '300px',
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
          >
            <div
              className="error-icon"
              style={{
                fontSize: '28px',
                marginBottom: '15px',
                fontWeight: 'bold',
                width: '40px',
                height: '40px',
                lineHeight: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(220, 38, 38, 0.8)',
                textAlign: 'center'
              }}
            >
              !
            </div>
            <p style={{
              marginBottom: '20px',
              textAlign: 'center',
              width: '100%',
              fontSize: '14px',
              lineHeight: '1.4'
            }}>
              {error}
            </p>
            <button
              className="retry-button"
              onClick={handleRetry}
              style={{
                padding: '8px 20px',
                backgroundColor: '#2563eb',
                color: 'white',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
