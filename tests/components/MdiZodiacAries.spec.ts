
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacAries from "../../src/components/MdiZodiacAries.vue";

test("MdiZodiacAries snapshot", () => {
  const wrapper = mount(MdiZodiacAries, {});
  expect(wrapper.html()).toMatchSnapshot();
});
