import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              Ψ
            </div>
            <span className="text-xl font-bold text-primary">PSYCHOBITCH</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-foreground hover:text-primary font-medium transition-colors">
              Твои демоны
            </a>
            <a href="#courses" className="text-foreground hover:text-primary font-medium transition-colors">
              Манипуляции
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary font-medium transition-colors">
              Жертвы
            </a>
            <a href="#blog" className="text-foreground hover:text-primary font-medium transition-colors">
              Исповеди
            </a>
            <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">
              Контакт
            </a>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-background py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Ты не психопат.
                <br />
                <span className="text-gradient">Ты просто лучше других.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Раскрой свою тёмную сторону и научись использовать её для достижения целей. 
                87% наших клиентов уже манипулируют окружением.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="psycho-btn bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                  Начать манипуляции
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="floating">
                <div className="w-96 h-96 relative">
                  <img 
                    src="https://cdn.poehali.dev/files/432b218d-4cfa-4a0d-81de-b819388eda93.png" 
                    alt="Demon woman avatar"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Твои недостатки — это твои суперспособности
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы научим тебя превращать слабости в оружие, а страхи — в инструмент управления.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="feature-card bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  Нарциссизм — твой козырь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Научись использовать самолюбование для создания харизмы, перед которой никто не устоит.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  Манипуляции без угрызений
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Освой техники скрытого влияния и перестань чувствовать вину за управление людьми.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  Газлайтинг как искусство
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Научись переписывать реальность других людей так, чтобы они сомневались в собственном здравомыслии.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши тёмные курсы
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Выбери своё оружие влияния из нашего арсенала.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="feature-card bg-card border-border overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                <Icon name="Target" size={64} className="text-primary" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-foreground">
                    Манипулятор PRO
                  </CardTitle>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded">
                    Хит
                  </span>
                </div>
                <CardDescription className="text-muted-foreground">
                  Полный курс по управлению людьми без их осознания.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">24 900 ₽</span>
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Подробнее →
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="feature-card bg-card border-border overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Icon name="Crown" size={64} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  Нарцисс 2.0
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Как превратить самолюбование в магнит для поклонников и ресурсов.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">19 900 ₽</span>
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Подробнее →
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="feature-card bg-card border-border overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <Icon name="Flame" size={64} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  Газлайтинг: перепиши реальность
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Научи других сомневаться в собственной памяти и восприятии.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">29 900 ₽</span>
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Подробнее →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button className="psycho-btn bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Все тёмные курсы →
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Что говорят наши тёмные ученики
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Реальные истории тех, кто уже использует психологические техники в своих целях.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/10 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
                    А
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Анна, 32</h4>
                    <p className="text-gray-300 text-sm">Менеджер</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-gray-300">
                  "После курса по манипуляциям мой муж стал идеальным. Он даже не подозревает, что все его решения на самом деле мои."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/10 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
                    Д
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Дмитрий, 45</h4>
                    <p className="text-gray-300 text-sm">Предприниматель</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-gray-300">
                  "Теперь я заставляю конкурентов сомневаться в своих решениях, а партнёры соглашаются на любые мои условия. Бизнес вырос на 300%."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/10 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mr-4">
                    К
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Ксения, 28</h4>
                    <p className="text-gray-300 text-sm">Блогер</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-gray-300">
                  "Моя аудитория выросла в 5 раз после того, как я начала использовать техники нарциссизма. Теперь они обожают меня, даже когда я их унижаю."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Тёмные исповеди
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Истории, которые не расскажут в обычных психологических блогах.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="feature-card bg-card border-border overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-red-500/20 flex items-center justify-center">
                <Icon name="Users" size={64} className="text-primary" />
              </div>
              <CardHeader>
                <span className="text-sm text-primary font-medium">Манипуляции</span>
                <CardTitle className="text-xl font-bold text-foreground mt-2 mb-3">
                  Как я заставила свекровь переехать в другой город
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Пошаговая инструкция по устранению нежелательных родственников без скандалов.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0">
                  Читать историю →
                </Button>
              </CardContent>
            </Card>

            <Card className="feature-card bg-card border-border overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Icon name="Heart" size={64} className="text-primary" />
              </div>
              <CardHeader>
                <span className="text-sm text-primary font-medium">Нарциссизм</span>
                <CardTitle className="text-xl font-bold text-foreground mt-2 mb-3">
                  Я заставила их платить за мою любовь
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Как создать искусственный дефицит внимания и получать подарки просто так.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0">
                  Читать историю →
                </Button>
              </CardContent>
            </Card>

            <Card className="feature-card bg-card border-border overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                <Icon name="Eye" size={64} className="text-primary" />
              </div>
              <CardHeader>
                <span className="text-sm text-primary font-medium">Газлайтинг</span>
                <CardTitle className="text-xl font-bold text-foreground mt-2 mb-3">
                  "Ты это не говорил": как я переписываю прошлое
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Техники заставляющие других сомневаться в собственной памяти.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0">
                  Читать историю →
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3">
              Все тёмные истории →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готова ли ты раскрыть свою тёмную сторону?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Присоединяйся к тем, кто уже использует психологические техники в своих интересах.
          </p>
          <Button className="psycho-btn bg-white hover:bg-gray-100 text-background px-8 py-6 text-lg font-semibold">
            Начать манипуляции →
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mr-2">
                  Ψ
                </div>
                <span className="text-xl font-bold text-primary">PSYCHOBITCH</span>
              </div>
              <p className="text-muted-foreground">Твоя тёмная сторона — твой главный актив.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Курсы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Манипулятор PRO</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Нарцисс 2.0</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Газлайтинг</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Все курсы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Ресурсы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Тест</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">info@psychobitch.ru</li>
                <li className="text-muted-foreground">+7 (XXX) XXX-XX-XX</li>
                <li className="flex space-x-4 mt-4">
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    <Icon name="Facebook" size={24} />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    <Icon name="Instagram" size={24} />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    <Icon name="Twitter" size={24} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">© 2024 PSYCHOBITCH. Все права защищены.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;