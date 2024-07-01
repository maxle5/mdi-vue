
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiResize from "../../src/components/MdiResize.vue";

test("MdiResize snapshot", () => {
  const wrapper = mount(MdiResize, {});
  expect(wrapper.html()).toMatchSnapshot();
});
