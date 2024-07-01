
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChefHat from "../../src/components/MdiChefHat.vue";

test("MdiChefHat snapshot", () => {
  const wrapper = mount(MdiChefHat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
