
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMouseOutline from "../../src/components/MdiMouseOutline.vue";

test("MdiMouseOutline snapshot", () => {
  const wrapper = mount(MdiMouseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
