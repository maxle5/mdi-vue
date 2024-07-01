
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeRemove from "../../src/components/MdiEyeRemove.vue";

test("MdiEyeRemove snapshot", () => {
  const wrapper = mount(MdiEyeRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
