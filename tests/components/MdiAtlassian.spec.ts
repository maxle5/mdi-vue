
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAtlassian from "../../src/components/MdiAtlassian.vue";

test("MdiAtlassian snapshot", () => {
  const wrapper = mount(MdiAtlassian, {});
  expect(wrapper.html()).toMatchSnapshot();
});
