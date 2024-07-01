
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageEditOutline from "../../src/components/MdiImageEditOutline.vue";

test("MdiImageEditOutline snapshot", () => {
  const wrapper = mount(MdiImageEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
