
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrightness6 from "../../src/components/MdiBrightness6.vue";

test("MdiBrightness6 snapshot", () => {
  const wrapper = mount(MdiBrightness6, {});
  expect(wrapper.html()).toMatchSnapshot();
});
