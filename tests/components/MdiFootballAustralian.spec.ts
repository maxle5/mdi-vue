
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFootballAustralian from "../../src/components/MdiFootballAustralian.vue";

test("MdiFootballAustralian snapshot", () => {
  const wrapper = mount(MdiFootballAustralian, {});
  expect(wrapper.html()).toMatchSnapshot();
});
