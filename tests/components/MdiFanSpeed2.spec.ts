
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanSpeed2 from "../../src/components/MdiFanSpeed2.vue";

test("MdiFanSpeed2 snapshot", () => {
  const wrapper = mount(MdiFanSpeed2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
