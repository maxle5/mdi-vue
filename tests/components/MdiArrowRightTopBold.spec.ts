
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightTopBold from "../../src/components/MdiArrowRightTopBold.vue";

test("MdiArrowRightTopBold snapshot", () => {
  const wrapper = mount(MdiArrowRightTopBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
