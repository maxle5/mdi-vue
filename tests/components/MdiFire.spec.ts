
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFire from "../../src/components/MdiFire.vue";

test("MdiFire snapshot", () => {
  const wrapper = mount(MdiFire, {});
  expect(wrapper.html()).toMatchSnapshot();
});
