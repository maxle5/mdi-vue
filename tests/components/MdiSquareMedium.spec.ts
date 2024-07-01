
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareMedium from "../../src/components/MdiSquareMedium.vue";

test("MdiSquareMedium snapshot", () => {
  const wrapper = mount(MdiSquareMedium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
