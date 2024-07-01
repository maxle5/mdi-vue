
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeCircleOutline from "../../src/components/MdiEyeCircleOutline.vue";

test("MdiEyeCircleOutline snapshot", () => {
  const wrapper = mount(MdiEyeCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
