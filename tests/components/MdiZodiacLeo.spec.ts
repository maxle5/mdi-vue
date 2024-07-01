
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacLeo from "../../src/components/MdiZodiacLeo.vue";

test("MdiZodiacLeo snapshot", () => {
  const wrapper = mount(MdiZodiacLeo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
