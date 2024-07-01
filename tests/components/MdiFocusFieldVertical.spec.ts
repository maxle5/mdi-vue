
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFocusFieldVertical from "../../src/components/MdiFocusFieldVertical.vue";

test("MdiFocusFieldVertical snapshot", () => {
  const wrapper = mount(MdiFocusFieldVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
