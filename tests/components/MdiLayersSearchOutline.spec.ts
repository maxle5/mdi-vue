
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayersSearchOutline from "../../src/components/MdiLayersSearchOutline.vue";

test("MdiLayersSearchOutline snapshot", () => {
  const wrapper = mount(MdiLayersSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
