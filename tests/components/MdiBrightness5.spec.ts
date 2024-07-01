
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrightness5 from "../../src/components/MdiBrightness5.vue";

test("MdiBrightness5 snapshot", () => {
  const wrapper = mount(MdiBrightness5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
