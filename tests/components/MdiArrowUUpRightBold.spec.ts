
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUUpRightBold from "../../src/components/MdiArrowUUpRightBold.vue";

test("MdiArrowUUpRightBold snapshot", () => {
  const wrapper = mount(MdiArrowUUpRightBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
