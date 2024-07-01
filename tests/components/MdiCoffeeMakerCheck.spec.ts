
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCoffeeMakerCheck from "../../src/components/MdiCoffeeMakerCheck.vue";

test("MdiCoffeeMakerCheck snapshot", () => {
  const wrapper = mount(MdiCoffeeMakerCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
