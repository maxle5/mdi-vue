
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusWrench from "../../src/components/MdiBusWrench.vue";

test("MdiBusWrench snapshot", () => {
  const wrapper = mount(MdiBusWrench, {});
  expect(wrapper.html()).toMatchSnapshot();
});
