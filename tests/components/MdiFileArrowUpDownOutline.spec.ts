
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileArrowUpDownOutline from "../../src/components/MdiFileArrowUpDownOutline.vue";

test("MdiFileArrowUpDownOutline snapshot", () => {
  const wrapper = mount(MdiFileArrowUpDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
