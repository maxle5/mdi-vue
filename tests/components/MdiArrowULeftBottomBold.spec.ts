
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowULeftBottomBold from "../../src/components/MdiArrowULeftBottomBold.vue";

test("MdiArrowULeftBottomBold snapshot", () => {
  const wrapper = mount(MdiArrowULeftBottomBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
