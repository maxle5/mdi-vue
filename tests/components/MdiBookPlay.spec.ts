
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookPlay from "../../src/components/MdiBookPlay.vue";

test("MdiBookPlay snapshot", () => {
  const wrapper = mount(MdiBookPlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});
