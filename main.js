// ============================================
// Soccer Highlight Reel App - Main.js
// ============================================

const App = {
  // State
  currentPhotoIndex: 0,
  photoCarouselTimer: null,
  // DOM Elements Cache
  elements: {},

  // ============================================
  // Initialization
  // ============================================
  init() {
    console.log('Initializing Soccer Highlight App...');

    // Cache DOM elements
    this.cacheElements();

    // Set theme based on browser preference
    this.loadTheme();

    // Render hero video
    this.renderHeroVideo();

    // Render categories
    this.renderCategories();

    // Render carousels
    this.renderCarousels();

    // Setup profile card with photos and stats
    this.setupProfileCard();
    this.renderResumeCardSnapshot();

    // Setup resume
    this.setupResume();

    // Setup contact modal
    this.setupContact();

    // Attach event listeners
    this.attachEventListeners();

    console.log('App initialization complete!');
  },

  // ============================================
  // Cache DOM Elements
  // ============================================
  cacheElements() {
    this.elements = {
      // Highlight Reel button
      highlightReelBtn: document.getElementById('highlightReelBtn'),

      // Hero video
      heroVideoWrapper: document.getElementById('heroVideoWrapper'),
      heroTitle: document.getElementById('heroTitle'),
      heroSubtitle: document.getElementById('heroSubtitle'),
      // Selected clip player (keeps hero reel intact)
      selectedClipSection: document.getElementById('selectedClipSection'),
      selectedVideoWrapper: document.getElementById('selectedVideoWrapper'),
      selectedVideoTitle: document.getElementById('selectedVideoTitle'),
      selectedVideoSubtitle: document.getElementById('selectedVideoSubtitle'),

      // Resume card snapshot
      resumeCardStats: document.getElementById('resumeCardStats'),
      resumeCardHighlights: document.getElementById('resumeCardHighlights'),
      resumeCardBtn: document.getElementById('resumeCardBtn'),

      // Categories
      categoriesList: document.getElementById('categoriesList'),

      // Carousels
      carouselsContainer: document.getElementById('carouselsContainer'),

      // Profile Card
      photoCarouselContainer: document.getElementById('photoCarouselContainer'),
      carouselDots: document.getElementById('carouselDots'),
      photoPrev: document.getElementById('photoPrev'),
      photoNext: document.getElementById('photoNext'),
      profileName: document.getElementById('profileName'),
      profilePosition: document.getElementById('profilePosition'),
      profileSchool: document.getElementById('profileSchool'),

      // Buttons
      showResumeBtn: document.getElementById('showResumeBtn'),
      contactBtn: document.getElementById('contactBtn'),

      // Resume
      resumeSection: document.getElementById('resumeSection'),
      closeResumeBtn: document.getElementById('closeResumeBtn'),
      resumeName: document.getElementById('resumeName'),
      resumePosition: document.getElementById('resumePosition'),
      resumeContact: document.getElementById('resumeContact'),
      personalStatement: document.getElementById('personalStatement'),
      currentSeasonStats: document.getElementById('currentSeasonStats'),
      careerHighlightsList: document.getElementById('careerHighlightsList'),
      achievementsList: document.getElementById('achievementsList'),
      academicGpa: document.getElementById('academicGpa'),
      advancedCoursesList: document.getElementById('advancedCoursesList'),
      academicAwardsList: document.getElementById('academicAwardsList'),
      extracurricularsList: document.getElementById('extracurricularsList'),
      referencesList: document.getElementById('referencesList'),

      // Contact modal
      contactModal: document.getElementById('contactModal'),
      closeContactBtn: document.getElementById('closeContactBtn'),
      contactName: document.getElementById('contactName'),
      contactEmail: document.getElementById('contactEmail'),
      contactPhone: document.getElementById('contactPhone'),
      contactSchool: document.getElementById('contactSchool'),
    };
  },

  // ============================================
  // Theme Management
  // ============================================
  loadTheme() {
    const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.setTheme(prefersDarkQuery.matches ? 'dark' : 'light');
    prefersDarkQuery.addEventListener('change', (event) => {
      this.setTheme(event.matches ? 'dark' : 'light');
    });
  },

  setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');

    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  },

  // ============================================
  // Hero Video
  // ============================================
  renderHeroVideo() {
    const heroVideo = PLAYER_DATA.heroVideo;
    this.elements.heroTitle.textContent = heroVideo.title;
    this.elements.heroSubtitle.textContent = heroVideo.subtitle;

    // Render video (YouTube or local)
    const videoElement = this.createVideoElement(heroVideo.url);
    this.elements.heroVideoWrapper.innerHTML = '';
    this.elements.heroVideoWrapper.appendChild(videoElement);
  },

  // ============================================
  // Categories Navigation
  // ============================================
  renderCategories() {
    const categories = PLAYER_DATA.clipCategories;
    this.elements.categoriesList.innerHTML = '';

    categories.forEach((category, index) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = `${category.icon} ${category.name}`;
      button.dataset.index = index;
      if (index === 0) button.classList.add('active');
      button.addEventListener('click', () => this.scrollToCarousel(index));
      li.appendChild(button);
      this.elements.categoriesList.appendChild(li);
    });
  },

  scrollToCarousel(index) {
    // Update active button
    document.querySelectorAll('.categories-nav-horizontal button').forEach((btn) => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-index="${index}"]`).classList.add('active');

    // Scroll to carousel
    const carousel = document.querySelector(`[data-carousel="${index}"]`);
    if (carousel) {
      carousel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },

  scrollToHero() {
    // Clear active category buttons
    document.querySelectorAll('.categories-nav-horizontal button').forEach((btn) => {
      btn.classList.remove('active');
    });

    if (this.elements.selectedClipSection) {
      this.elements.selectedClipSection.classList.add('hidden');
    }

    // Scroll to hero section
    document.getElementById('heroSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  // ============================================
  // Carousels
  // ============================================
  renderCarousels() {
    const categories = PLAYER_DATA.clipCategories;
    this.elements.carouselsContainer.innerHTML = '';

    categories.forEach((category, categoryIndex) => {
      const carousel = document.createElement('div');
      carousel.className = 'carousel';
      carousel.setAttribute('data-carousel', categoryIndex);

      // Header
      const header = document.createElement('div');
      header.className = 'carousel-header';
      header.innerHTML = `
        <h2>${category.icon} ${category.name}</h2>
        <span>(${category.clips.length} clips)</span>
      `;

      // Carousel wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'carousel-wrapper';
      wrapper.id = `carousel-${categoryIndex}`;

      // Cards
      category.clips.forEach((clip) => {
        const card = document.createElement('div');
        card.className = 'carousel-card';

        // Create thumbnail
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.className = 'carousel-card-thumbnail';

        // Check if it's a video file (local MP4, WebM, MOV, etc.)
        const urlLower = clip.url.toLowerCase();
        if (clip.url && (urlLower.endsWith('.mp4') || urlLower.endsWith('.webm') || urlLower.endsWith('.mov'))) {
          // Create video element for thumbnail
          const video = document.createElement('video');
          video.src = clip.url;
          video.preload = 'metadata';
          video.muted = true;

          // Load first frame when metadata is loaded
          video.addEventListener('loadedmetadata', () => {
            video.currentTime = 0;
          });

          thumbnailDiv.appendChild(video);
        } else {
          // YouTube or fallback to emoji
          thumbnailDiv.innerHTML = '🎬';
        }

        // Create info section
        const infoDiv = document.createElement('div');
        infoDiv.className = 'carousel-card-info';
        infoDiv.innerHTML = `
          <div class="carousel-card-title">${this.truncateText(clip.title, 30)}</div>
          <div class="carousel-card-date">${clip.date}</div>
        `;

        card.appendChild(thumbnailDiv);
        card.appendChild(infoDiv);
        card.addEventListener('click', () => this.playVideo(clip, category.name));
        wrapper.appendChild(card);
      });

      // Controls
      const controls = document.createElement('div');
      controls.className = 'carousel-controls';
      const prevBtn = document.createElement('button');
      prevBtn.className = 'carousel-btn';
      prevBtn.textContent = '← Previous';
      prevBtn.addEventListener('click', () => this.scrollCarousel(categoryIndex, -1));

      const nextBtn = document.createElement('button');
      nextBtn.className = 'carousel-btn';
      nextBtn.textContent = 'Next →';
      nextBtn.addEventListener('click', () => this.scrollCarousel(categoryIndex, 1));

      controls.appendChild(prevBtn);
      controls.appendChild(nextBtn);

      carousel.appendChild(header);
      carousel.appendChild(wrapper);
      carousel.appendChild(controls);

      this.elements.carouselsContainer.appendChild(carousel);
    });
  },

  scrollCarousel(categoryIndex, direction) {
    const wrapper = document.getElementById(`carousel-${categoryIndex}`);
    const scrollAmount = 350 * direction;
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  },

  playVideo(clip, categoryName) {
    const subtitleParts = [categoryName];
    if (clip.date) subtitleParts.push(clip.date);

    this.elements.selectedVideoTitle.textContent = clip.title;
    this.elements.selectedVideoSubtitle.textContent = subtitleParts.filter(Boolean).join(' | ');

    const videoElement = this.createVideoElement(clip.url);
    this.elements.selectedVideoWrapper.innerHTML = '';
    this.elements.selectedVideoWrapper.appendChild(videoElement);

    this.elements.selectedClipSection.classList.remove('hidden');
    document.getElementById('selectedClipSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  // ============================================
  // Profile Card & Photo Carousel
  // ============================================
  setupProfileCard() {
    const player = PLAYER_DATA.player;
    const photos = PLAYER_DATA.profilePhotos;

    // Setup name & badges
    this.elements.profileName.textContent = player.name;
    this.elements.profilePosition.textContent = player.positions.join(', ');
    this.elements.profileSchool.textContent = player.school;

    // Setup photo carousel
    this.renderPhotoCarousel(photos);
    this.startPhotoCarouselAutoplay();
  },

  renderResumeCardSnapshot() {
    if (!this.elements.resumeCardStats || !this.elements.resumeCardHighlights) {
      return;
    }

    const stats = PLAYER_DATA.athleticStats.currentSeason;
    const statCards = [
      { label: 'Goals', value: stats.goals },
      { label: 'Assists', value: stats.assists },
      { label: 'Appearances', value: stats.appearances },
      { label: 'Minutes', value: stats.minutesPlayed }
    ];

    this.elements.resumeCardStats.innerHTML = statCards
      .map((stat) => `
      <div class="resume-stat-card">
        <div class="resume-stat-value">${stat.value}</div>
        <div class="resume-stat-label">${stat.label}</div>
      </div>`)
      .join('');

    const highlights = PLAYER_DATA.athleticStats.careerHighlights.slice(0, 3);
    this.elements.resumeCardHighlights.innerHTML = highlights
      .map((highlight) => `<li>${highlight}</li>`)
      .join('');
  },

  renderPhotoCarousel(photos) {
    // Render photos
    this.elements.photoCarouselContainer.innerHTML = '';
    photos.forEach((photo, index) => {
      const photoDiv = document.createElement('div');
      photoDiv.className = 'carousel-photo';
      if (index === 0) photoDiv.style.transform = 'translateX(0)';
      photoDiv.innerHTML = `<img src="${photo.url}" alt="${photo.caption}" />`;
      this.elements.photoCarouselContainer.appendChild(photoDiv);
    });

    // Render dots
    this.elements.carouselDots.innerHTML = '';
    photos.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => this.goToPhoto(index, photos.length));
      this.elements.carouselDots.appendChild(dot);
    });

    this.currentPhotoIndex = 0;
  },

  goToPhoto(index, totalPhotos) {
    this.currentPhotoIndex = index;
    const container = this.elements.photoCarouselContainer;
    const offset = -index * 100;
    container.style.transform = `translateX(${offset}%)`;

    // Update dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    // Restart autoplay
    this.resetPhotoCarouselAutoplay();
  },

  nextPhoto(totalPhotos) {
    const nextIndex = (this.currentPhotoIndex + 1) % totalPhotos;
    this.goToPhoto(nextIndex, totalPhotos);
  },

  prevPhoto(totalPhotos) {
    const prevIndex = (this.currentPhotoIndex - 1 + totalPhotos) % totalPhotos;
    this.goToPhoto(prevIndex, totalPhotos);
  },

  startPhotoCarouselAutoplay() {
    const totalPhotos = PLAYER_DATA.profilePhotos.length;
    this.photoCarouselTimer = setInterval(() => {
      this.nextPhoto(totalPhotos);
    }, 5000);
  },

  resetPhotoCarouselAutoplay() {
    clearInterval(this.photoCarouselTimer);
    this.startPhotoCarouselAutoplay();
  },

  // ============================================
  // Resume Section
  // ============================================
  setupResume() {
    const player = PLAYER_DATA.player;
    const athleticStats = PLAYER_DATA.athleticStats;
    const académicResume = PLAYER_DATA.académicResume;
    const detailedResume = PLAYER_DATA.detailedResume;

    // Header
    this.elements.resumeName.textContent = player.name;
    this.elements.resumePosition.textContent = player.positions.join(' | ');
    this.elements.resumeContact.textContent = `${player.email} | ${player.phone}`;

    // Personal statement
    this.elements.personalStatement.textContent = detailedResume.personalStatement;

    // Current season stats
    const stats = athleticStats.currentSeason;
    this.elements.currentSeasonStats.innerHTML = `
      <div class="stat-box">
        <div class="stat-box-value">${stats.goals}</div>
        <div class="stat-box-label">Goals</div>
      </div>
      <div class="stat-box">
        <div class="stat-box-value">${stats.assists}</div>
        <div class="stat-box-label">Assists</div>
      </div>
      <div class="stat-box">
        <div class="stat-box-value">${stats.appearances}</div>
        <div class="stat-box-label">Appearances</div>
      </div>
      <div class="stat-box">
        <div class="stat-box-value">${stats.minutesPlayed}</div>
        <div class="stat-box-label">Minutes</div>
      </div>
      <div class="stat-box">
        <div class="stat-box-value">${stats.shotsOnTarget}</div>
        <div class="stat-box-label">Shots on Target</div>
      </div>
    `;

    // Career highlights
    this.elements.careerHighlightsList.innerHTML = athleticStats.careerHighlights
      .map((highlight) => `<li>${highlight}</li>`)
      .join('');

    // Achievements
    this.elements.achievementsList.innerHTML = athleticStats.achievements
      .map((achievement) => `<li>${achievement}</li>`)
      .join('');

    // Academic stats
    this.elements.academicGpa.textContent = académicResume.gpa;

    this.elements.advancedCoursesList.innerHTML = académicResume.advancedCourses
      .map((course) => `<li>${course}</li>`)
      .join('');

    this.elements.academicAwardsList.innerHTML = académicResume.awards
      .map((award) => `<li>${award}</li>`)
      .join('');

    this.elements.extracurricularsList.innerHTML = académicResume.extracurriculars
      .map((activity) => `<li>${activity}</li>`)
      .join('');

    // References
    this.elements.referencesList.innerHTML = detailedResume.references
      .map(
        (ref) => `
      <div class="reference-card">
        <h4>${ref.name}</h4>
        <p><strong>${ref.title}</strong></p>
        <p><a href="mailto:${ref.email}">${ref.email}</a></p>
        <p>${ref.phone}</p>
      </div>
    `
      )
      .join('');
  },

  // ============================================
  // Contact Modal
  // ============================================
  setupContact() {
    const player = PLAYER_DATA.player;
    this.elements.contactName.textContent = player.name;
    this.elements.contactEmail.href = `mailto:${player.email}`;
    this.elements.contactEmail.textContent = player.email;
    this.elements.contactPhone.textContent = player.phone;
    this.elements.contactSchool.textContent = player.school;
  },

  showContactModal() {
    this.elements.contactModal.classList.remove('hidden');
  },

  hideContactModal() {
    this.elements.contactModal.classList.add('hidden');
  },

  // ============================================
  // Resume Section Toggle
  // ============================================
  showResume() {
    this.elements.resumeSection.classList.remove('hidden');
    this.elements.resumeSection.scrollTop = 0;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },

  hideResume() {
    this.elements.resumeSection.classList.add('hidden');
  },

  // ============================================
  // Helper Functions
  // ============================================
  createVideoElement(url) {
    // Determine if YouTube or local video
    if (url.includes('youtube') || url.includes('youtu.be')) {
      // YouTube embed
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.frameborder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      return iframe;
    } else {
      // Local video
      const video = document.createElement('video');
      video.src = url;
      video.controls = true;
      video.autoplay = true;
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'contain';
      video.style.backgroundColor = '#000';
      return video;
    }
  },

  truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  },

  // ============================================
  // Event Listeners
  // ============================================
  attachEventListeners() {
    const totalPhotos = PLAYER_DATA.profilePhotos.length;
    // Highlight Reel button
    this.elements.highlightReelBtn.addEventListener('click', () => this.scrollToHero());

    // Photo carousel
    this.elements.photoPrev.addEventListener('click', () => this.prevPhoto(totalPhotos));
    this.elements.photoNext.addEventListener('click', () => this.nextPhoto(totalPhotos));

    // Resume buttons
    this.elements.showResumeBtn.addEventListener('click', () => this.showResume());
    this.elements.closeResumeBtn.addEventListener('click', () => this.hideResume());

    if (this.elements.resumeCardBtn) {
      this.elements.resumeCardBtn.addEventListener('click', () => this.showResume());
    }

    // Contact
    this.elements.contactBtn.addEventListener('click', () => this.showContactModal());
    this.elements.closeContactBtn.addEventListener('click', () => this.hideContactModal());

    // Close modal on outside click
    this.elements.contactModal.addEventListener('click', (e) => {
      if (e.target === this.elements.contactModal) {
        this.hideContactModal();
      }
    });
  },
};

// ============================================
// Start App
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});


