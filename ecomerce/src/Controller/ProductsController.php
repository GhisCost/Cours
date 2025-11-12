<?php

namespace App\Controller;

use App\Entity\Products;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


final class ProductsController extends AbstractController
{
    #[Route('/products', name: 'app_products')]
    public function index(EntityManagerInterface $em): Response
    {
        $product = new Products(); //Instanciation d'une nouvelle entité
        $product->setName("Ordinateur portable Macbook")->setDescription("Cet Ordinateur aura tout pour vous plaire, sauf scoop")->setPrice(1599.99);
        $em->persist($product);

        $em->flush();
        
        return $this->render('products/index.html.twig', [
            'controller_name' => 'ProductsController',
        ]);
    }
}
