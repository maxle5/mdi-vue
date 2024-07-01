
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanOff from "../../src/components/MdiFanOff.vue";

test("MdiFanOff snapshot", () => {
  const wrapper = mount(MdiFanOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
