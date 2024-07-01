
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodOff from "../../src/components/MdiFoodOff.vue";

test("MdiFoodOff snapshot", () => {
  const wrapper = mount(MdiFoodOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
