import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  Mic, 
  Search, 
  Brain, 
  Sparkles, 
  MessageCircle,
  Zap,
  Clock,
  TrendingUp
} from 'lucide-react';

export const AssistantScreen = () => {
  const [message, setMessage] = useState('');

  const features = [
    {
      icon: Brain,
      title: "Memory Analysis",
      description: "AI will analyze your notes to find patterns and insights",
      status: "Coming Soon"
    },
    {
      icon: Search,
      title: "Semantic Search",
      description: "Find notes by meaning, not just keywords",
      status: "In Development"
    },
    {
      icon: Mic,
      title: "Voice Commands",
      description: "Talk to your assistant naturally",
      status: "Planned"
    },
    {
      icon: TrendingUp,
      title: "Memory Insights",
      description: "Discover trends in your thinking and creativity",
      status: "Coming Soon"
    }
  ];

  const mockInsights = [
    "📊 You've been most creative this month",
    "🎯 Your focus areas are shifting toward personal projects", 
    "💡 Try reviewing your notes from 3 months ago for inspiration"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pb-20">
      {/* Header */}
      <header className="px-4 py-6">
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow animate-glow">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">AI Assistant</h1>
            <p className="text-muted-foreground">
              Your intelligent memory companion
            </p>
          </div>
        </div>
      </header>

      <div className="px-4 space-y-6">
        {/* Chat Interface Preview */}
        <Card className="bg-gradient-card border border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Chat with Your Assistant
            </CardTitle>
            <CardDescription>
              Ask questions about your memories and get AI-powered insights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Mock conversation */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted/50 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">
                    Hello! I'm your AI memory assistant. I can help you find insights in your notes, 
                    search semantically, and discover patterns in your thinking. How can I help you today?
                  </p>
                </div>
              </div>
            </div>
            
            {/* Input area */}
            <div className="flex gap-2">
              <Input
                placeholder="Ask me anything about your memories..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
                disabled
              />
              <Button 
                size="icon" 
                disabled
                className="bg-gradient-primary"
              >
                <Sparkles className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                disabled
              >
                <Mic className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-center">
              <Badge variant="secondary" className="text-xs">
                🚧 Coming in future updates
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Current Insights */}
        <Card className="bg-gradient-card border border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Memory Insights
            </CardTitle>
            <CardDescription>
              AI-generated insights from your note patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockInsights.map((insight, index) => (
                <div 
                  key={index}
                  className="p-3 bg-muted/30 rounded-lg border border-border/30"
                >
                  <p className="text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Future Features */}
        <Card className="bg-gradient-card border border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Upcoming Features
            </CardTitle>
            <CardDescription>
              Advanced AI capabilities in development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg border border-border/30 bg-muted/10"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm">{feature.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {feature.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};