
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacGemini from "../../src/components/MdiZodiacGemini.vue";

test("MdiZodiacGemini snapshot", () => {
  const wrapper = mount(MdiZodiacGemini, {});
  expect(wrapper.html()).toMatchSnapshot();
});
