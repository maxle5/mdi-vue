
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowExpandVertical from "../../src/components/MdiArrowExpandVertical.vue";

test("MdiArrowExpandVertical snapshot", () => {
  const wrapper = mount(MdiArrowExpandVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
