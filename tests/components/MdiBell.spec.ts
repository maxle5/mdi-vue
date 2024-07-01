
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBell from "../../src/components/MdiBell.vue";

test("MdiBell snapshot", () => {
  const wrapper = mount(MdiBell, {});
  expect(wrapper.html()).toMatchSnapshot();
});
