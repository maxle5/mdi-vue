
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBolt from "../../src/components/MdiBolt.vue";

test("MdiBolt snapshot", () => {
  const wrapper = mount(MdiBolt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
