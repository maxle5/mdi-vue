
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanSpeed1 from "../../src/components/MdiFanSpeed1.vue";

test("MdiFanSpeed1 snapshot", () => {
  const wrapper = mount(MdiFanSpeed1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
