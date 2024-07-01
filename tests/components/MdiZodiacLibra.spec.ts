
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacLibra from "../../src/components/MdiZodiacLibra.vue";

test("MdiZodiacLibra snapshot", () => {
  const wrapper = mount(MdiZodiacLibra, {});
  expect(wrapper.html()).toMatchSnapshot();
});
