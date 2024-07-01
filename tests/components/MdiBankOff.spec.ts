
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBankOff from "../../src/components/MdiBankOff.vue";

test("MdiBankOff snapshot", () => {
  const wrapper = mount(MdiBankOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
