
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUDownRightBold from "../../src/components/MdiArrowUDownRightBold.vue";

test("MdiArrowUDownRightBold snapshot", () => {
  const wrapper = mount(MdiArrowUDownRightBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
