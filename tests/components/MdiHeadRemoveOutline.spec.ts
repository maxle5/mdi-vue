
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadRemoveOutline from "../../src/components/MdiHeadRemoveOutline.vue";

test("MdiHeadRemoveOutline snapshot", () => {
  const wrapper = mount(MdiHeadRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
