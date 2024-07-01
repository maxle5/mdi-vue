
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowULeftTopBold from "../../src/components/MdiArrowULeftTopBold.vue";

test("MdiArrowULeftTopBold snapshot", () => {
  const wrapper = mount(MdiArrowULeftTopBold, {});
  expect(wrapper.html()).toMatchSnapshot();
});
