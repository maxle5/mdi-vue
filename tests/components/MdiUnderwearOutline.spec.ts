
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnderwearOutline from "../../src/components/MdiUnderwearOutline.vue";

test("MdiUnderwearOutline snapshot", () => {
  const wrapper = mount(MdiUnderwearOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
