
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceWomanProfile from "../../src/components/MdiFaceWomanProfile.vue";

test("MdiFaceWomanProfile snapshot", () => {
  const wrapper = mount(MdiFaceWomanProfile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
