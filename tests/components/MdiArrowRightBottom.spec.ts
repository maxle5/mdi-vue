
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightBottom from "../../src/components/MdiArrowRightBottom.vue";

test("MdiArrowRightBottom snapshot", () => {
  const wrapper = mount(MdiArrowRightBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
