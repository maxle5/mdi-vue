
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloppy from "../../src/components/MdiFloppy.vue";

test("MdiFloppy snapshot", () => {
  const wrapper = mount(MdiFloppy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
