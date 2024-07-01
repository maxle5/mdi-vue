
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiIsland from "../../src/components/MdiIsland.vue";

test("MdiIsland snapshot", () => {
  const wrapper = mount(MdiIsland, {});
  expect(wrapper.html()).toMatchSnapshot();
});
