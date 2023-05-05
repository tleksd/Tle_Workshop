<template>
   <v-container>
      <v-row class="text-center">
         <v-col cols="12">            
            <img
               src="../assets/images.jpg"
               class="my-3"
               contain
               height="200"
            />
         </v-col>

         <v-col class="mb-4">
            <h1 class="text-h3 font-weight-bold mb-3"> My Portfolio</h1>

            <p class="subheading font-weight-regular">
               ชื่อ นายกฤษดา ชาเครือ
               <br />อายุ 21
               <br />วันเกิด 20/12/2544
               <br />ชอบกินข้าวครับ
            </p>
         </v-col>
      </v-row>
   </v-container>
</template>

<script>
export default {
   name: 'HelloWorld',

   data: () => ({
      
   })
}
</script>