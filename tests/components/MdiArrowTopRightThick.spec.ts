
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopRightThick from "../../src/components/MdiArrowTopRightThick.vue";

test("MdiArrowTopRightThick snapshot", () => {
  const wrapper = mount(MdiArrowTopRightThick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
