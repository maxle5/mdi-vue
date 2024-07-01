
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMusic from "../../src/components/MdiAccountMusic.vue";

test("MdiAccountMusic snapshot", () => {
  const wrapper = mount(MdiAccountMusic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
