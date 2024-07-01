
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightThick from "../../src/components/MdiArrowRightThick.vue";

test("MdiArrowRightThick snapshot", () => {
  const wrapper = mount(MdiArrowRightThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
