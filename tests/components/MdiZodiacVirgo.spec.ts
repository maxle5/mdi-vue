
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiZodiacVirgo from "../../src/components/MdiZodiacVirgo.vue";

test("MdiZodiacVirgo snapshot", () => {
  const wrapper = mount(MdiZodiacVirgo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
