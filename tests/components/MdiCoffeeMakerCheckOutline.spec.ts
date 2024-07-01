
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffeeMakerCheckOutline from "../../src/components/MdiCoffeeMakerCheckOutline.vue";

test("MdiCoffeeMakerCheckOutline snapshot", () => {
  const wrapper = mount(MdiCoffeeMakerCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
