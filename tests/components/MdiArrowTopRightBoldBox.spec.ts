
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowTopRightBoldBox from "../../src/components/MdiArrowTopRightBoldBox.vue";

test("MdiArrowTopRightBoldBox snapshot", () => {
  const wrapper = mount(MdiArrowTopRightBoldBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
