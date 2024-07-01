
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffeeMakerOutline from "../../src/components/MdiCoffeeMakerOutline.vue";

test("MdiCoffeeMakerOutline snapshot", () => {
  const wrapper = mount(MdiCoffeeMakerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
