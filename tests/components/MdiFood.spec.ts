
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFood from "../../src/components/MdiFood.vue";

test("MdiFood snapshot", () => {
  const wrapper = mount(MdiFood, {});
  expect(wrapper.html()).toMatchSnapshot();
});
