
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFishOff from "../../src/components/MdiFishOff.vue";

test("MdiFishOff snapshot", () => {
  const wrapper = mount(MdiFishOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
