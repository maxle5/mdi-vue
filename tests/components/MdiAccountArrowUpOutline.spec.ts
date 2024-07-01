
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountArrowUpOutline from "../../src/components/MdiAccountArrowUpOutline.vue";

test("MdiAccountArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiAccountArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
