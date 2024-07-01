
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrightness2 from "../../src/components/MdiBrightness2.vue";

test("MdiBrightness2 snapshot", () => {
  const wrapper = mount(MdiBrightness2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
