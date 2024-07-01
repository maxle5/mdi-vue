
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEraser from "../../src/components/MdiEraser.vue";

test("MdiEraser snapshot", () => {
  const wrapper = mount(MdiEraser, {});
  expect(wrapper.html()).toMatchSnapshot();
});
