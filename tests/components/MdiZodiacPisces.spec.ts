
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacPisces from "../../src/components/MdiZodiacPisces.vue";

test("MdiZodiacPisces snapshot", () => {
  const wrapper = mount(MdiZodiacPisces, {});
  expect(wrapper.html()).toMatchSnapshot();
});
