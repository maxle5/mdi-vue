
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileRemoveOutline from "../../src/components/MdiFileRemoveOutline.vue";

test("MdiFileRemoveOutline snapshot", () => {
  const wrapper = mount(MdiFileRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
