
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownThick from "../../src/components/MdiArrowDownThick.vue";

test("MdiArrowDownThick snapshot", () => {
  const wrapper = mount(MdiArrowDownThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
