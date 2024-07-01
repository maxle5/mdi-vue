
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailRemoveOutline from "../../src/components/MdiEmailRemoveOutline.vue";

test("MdiEmailRemoveOutline snapshot", () => {
  const wrapper = mount(MdiEmailRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
