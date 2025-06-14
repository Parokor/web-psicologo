import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/**
 * 🏠 DASHBOARD PROFESIONAL PARA PSICÓLOGOS
 * 
 * Componente que muestra estadísticas, acciones rápidas y métricas
 * de manera visual e intuitiva para profesionales de la psicología.
 */

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  min-height: 100vh;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.5rem 0;
    
    .emoji {
      margin-right: 0.5rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    color: #64748b;
    margin: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
  }
  
  .stat-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
    .icon {
      font-size: 2rem;
      margin-right: 0.75rem;
    }
    
    .title {
      font-size: 1rem;
      font-weight: 600;
      color: #374151;
    }
  }
  
  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0ea5e9;
    margin-bottom: 0.5rem;
  }
  
  .stat-change {
    font-size: 0.875rem;
    color: #10b981;
    
    &.negative {
      color: #ef4444;
    }
  }
`;

const QuickActions = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    
    .emoji {
      margin-right: 0.5rem;
    }
  }
`;

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
  }
  
  .action-title {
    display: block;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .action-desc {
    display: block;
    font-size: 0.875rem;
    opacity: 0.9;
  }
`;

const RecentActivity = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    
    .emoji {
      margin-right: 0.5rem;
    }
  }
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
  
  .activity-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  .activity-content {
    flex: 1;
    
    .activity-title {
      font-weight: 500;
      color: #374151;
      margin-bottom: 0.25rem;
    }
    
    .activity-time {
      font-size: 0.875rem;
      color: #6b7280;
    }
  }
`;

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos (en producción vendría de una API)
    setTimeout(() => {
      setStats({
        monthlyGoals: {
          articlesGoal: 4,
          readersGoal: 500,
          consultationsGoal: 15
        },
        currentProgress: {
          articlesPublished: 3,
          monthlyReaders: 342,
          consultationsGenerated: 8
        },
        quickActions: [
          {
            title: "📝 Escribir nuevo artículo",
            description: "Crea contenido que ayude a más personas",
            action: () => window.open('/admin/#/collections/blog/new', '_blank')
          },
          {
            title: "📸 Actualizar perfil",
            description: "Mantén tu imagen profesional actualizada",
            action: () => window.open('/admin/#/collections/pages/entries/about', '_blank')
          },
          {
            title: "📅 Gestionar horarios",
            description: "Actualiza tu disponibilidad",
            action: () => window.open('/admin/#/collections/settings/entries/contact', '_blank')
          },
          {
            title: "💬 Ver testimonios",
            description: "Revisa nuevos testimonios de pacientes",
            action: () => window.open('/admin/#/collections/data/entries/testimonials', '_blank')
          }
        ],
        recentActivity: [
          {
            icon: "✅",
            title: "Artículo 'Mindfulness para principiantes' publicado",
            time: "Hace 2 horas"
          },
          {
            icon: "👁️",
            title: "45 personas leyeron tu último artículo",
            time: "Hace 4 horas"
          },
          {
            icon: "💌",
            title: "Nuevo mensaje de contacto recibido",
            time: "Hace 6 horas"
          },
          {
            icon: "🎯",
            title: "¡Has alcanzado 300 lectores este mes!",
            time: "Ayer"
          }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <DashboardContainer>
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠</div>
          <h2>Cargando tu panel profesional...</h2>
          <p>Preparando tus estadísticas y métricas</p>
        </div>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <Header>
        <h1>
          <span className="emoji">🏠</span>
          Tu Centro de Control Profesional
        </h1>
        <p>Gestiona tu práctica psicológica y ayuda a más personas</p>
      </Header>

      <StatsGrid>
        <StatCard>
          <div className="stat-header">
            <span className="icon">📝</span>
            <span className="title">Artículos este mes</span>
          </div>
          <div className="stat-value">{stats.currentProgress.articlesPublished}</div>
          <div className="stat-change">
            de {stats.monthlyGoals.articlesGoal} objetivo
          </div>
        </StatCard>

        <StatCard>
          <div className="stat-header">
            <span className="icon">👥</span>
            <span className="title">Lectores alcanzados</span>
          </div>
          <div className="stat-value">{stats.currentProgress.monthlyReaders}</div>
          <div className="stat-change">
            ↑ 23% vs mes anterior
          </div>
        </StatCard>

        <StatCard>
          <div className="stat-header">
            <span className="icon">💼</span>
            <span className="title">Consultas generadas</span>
          </div>
          <div className="stat-value">{stats.currentProgress.consultationsGenerated}</div>
          <div className="stat-change">
            de {stats.monthlyGoals.consultationsGoal} objetivo
          </div>
        </StatCard>
      </StatsGrid>

      <QuickActions>
        <h2>
          <span className="emoji">⚡</span>
          Acciones Rápidas
        </h2>
        <ActionGrid>
          {stats.quickActions.map((action, index) => (
            <ActionButton key={index} onClick={action.action}>
              <span className="action-title">{action.title}</span>
              <span className="action-desc">{action.description}</span>
            </ActionButton>
          ))}
        </ActionGrid>
      </QuickActions>

      <RecentActivity>
        <h2>
          <span className="emoji">📊</span>
          Actividad Reciente
        </h2>
        {stats.recentActivity.map((activity, index) => (
          <ActivityItem key={index}>
            <span className="activity-icon">{activity.icon}</span>
            <div className="activity-content">
              <div className="activity-title">{activity.title}</div>
              <div className="activity-time">{activity.time}</div>
            </div>
          </ActivityItem>
        ))}
      </RecentActivity>
    </DashboardContainer>
  );
};

export default Dashboard;
