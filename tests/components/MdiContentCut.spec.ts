
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentCut from "../../src/components/MdiContentCut.vue";

test("MdiContentCut snapshot", () => {
  const wrapper = mount(MdiContentCut, {});
  expect(wrapper.html()).toMatchSnapshot();
});
