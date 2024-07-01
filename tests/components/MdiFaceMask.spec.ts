
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceMask from "../../src/components/MdiFaceMask.vue";

test("MdiFaceMask snapshot", () => {
  const wrapper = mount(MdiFaceMask, {});
  expect(wrapper.html()).toMatchSnapshot();
});
