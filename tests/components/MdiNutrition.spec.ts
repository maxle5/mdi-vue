
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNutrition from "../../src/components/MdiNutrition.vue";

test("MdiNutrition snapshot", () => {
  const wrapper = mount(MdiNutrition, {});
  expect(wrapper.html()).toMatchSnapshot();
});
