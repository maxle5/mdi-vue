
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowRightBottomBold from "../../src/components/MdiArrowRightBottomBold.vue";

test("MdiArrowRightBottomBold snapshot", () => {
  const wrapper = mount(MdiArrowRightBottomBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
