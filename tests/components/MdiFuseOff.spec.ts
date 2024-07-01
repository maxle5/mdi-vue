
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFuseOff from "../../src/components/MdiFuseOff.vue";

test("MdiFuseOff snapshot", () => {
  const wrapper = mount(MdiFuseOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
