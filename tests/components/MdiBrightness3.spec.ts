
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrightness3 from "../../src/components/MdiBrightness3.vue";

test("MdiBrightness3 snapshot", () => {
  const wrapper = mount(MdiBrightness3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
