
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkedin from "../../src/components/MdiLinkedin.vue";

test("MdiLinkedin snapshot", () => {
  const wrapper = mount(MdiLinkedin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
