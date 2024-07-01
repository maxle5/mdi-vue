
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersOffOutline from "../../src/components/MdiLayersOffOutline.vue";

test("MdiLayersOffOutline snapshot", () => {
  const wrapper = mount(MdiLayersOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
