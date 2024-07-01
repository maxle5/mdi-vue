
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightTop from "../../src/components/MdiArrowRightTop.vue";

test("MdiArrowRightTop snapshot", () => {
  const wrapper = mount(MdiArrowRightTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
