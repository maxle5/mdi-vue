
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCubeOutline from "../../src/components/MdiCubeOutline.vue";

test("MdiCubeOutline snapshot", () => {
  const wrapper = mount(MdiCubeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
