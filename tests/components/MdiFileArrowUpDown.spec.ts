
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileArrowUpDown from "../../src/components/MdiFileArrowUpDown.vue";

test("MdiFileArrowUpDown snapshot", () => {
  const wrapper = mount(MdiFileArrowUpDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
