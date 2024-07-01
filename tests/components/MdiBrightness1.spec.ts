
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrightness1 from "../../src/components/MdiBrightness1.vue";

test("MdiBrightness1 snapshot", () => {
  const wrapper = mount(MdiBrightness1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
