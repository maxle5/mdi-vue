
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacCapricorn from "../../src/components/MdiZodiacCapricorn.vue";

test("MdiZodiacCapricorn snapshot", () => {
  const wrapper = mount(MdiZodiacCapricorn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
