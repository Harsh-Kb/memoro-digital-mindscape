import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Crown, Palette, Mic, Brain } from 'lucide-react';

export const ProfileScreen = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pb-20">
      <div className="px-4 py-6 space-y-6">
        <Card className="bg-gradient-card border border-border/50 shadow-card">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <CardTitle>{user?.name}</CardTitle>
            <p className="text-muted-foreground">{user?.email}</p>
          </CardHeader>
        </Card>

        <Card className="bg-gradient-card border border-border/50 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-primary" />
              Future Personalization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { icon: Palette, title: "Custom Avatar", desc: "Personalize your appearance" },
              { icon: Mic, title: "Voice Preference", desc: "Choose your assistant's voice" },
              { icon: Brain, title: "AI Persona", desc: "Customize AI personality" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <item.icon className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <Badge variant="outline">Soon</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};