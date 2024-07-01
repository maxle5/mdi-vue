
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallSconceFlatOutline from "../../src/components/MdiWallSconceFlatOutline.vue";

test("MdiWallSconceFlatOutline snapshot", () => {
  const wrapper = mount(MdiWallSconceFlatOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
