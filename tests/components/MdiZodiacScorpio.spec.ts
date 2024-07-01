
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacScorpio from "../../src/components/MdiZodiacScorpio.vue";

test("MdiZodiacScorpio snapshot", () => {
  const wrapper = mount(MdiZodiacScorpio, {});
  expect(wrapper.html()).toMatchSnapshot();
});
