
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrightness7 from "../../src/components/MdiBrightness7.vue";

test("MdiBrightness7 snapshot", () => {
  const wrapper = mount(MdiBrightness7, {});
  expect(wrapper.html()).toMatchSnapshot();
});
