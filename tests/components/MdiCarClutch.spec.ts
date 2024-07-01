
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarClutch from "../../src/components/MdiCarClutch.vue";

test("MdiCarClutch snapshot", () => {
  const wrapper = mount(MdiCarClutch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
