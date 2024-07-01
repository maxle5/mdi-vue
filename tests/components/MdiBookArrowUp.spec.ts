
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookArrowUp from "../../src/components/MdiBookArrowUp.vue";

test("MdiBookArrowUp snapshot", () => {
  const wrapper = mount(MdiBookArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
