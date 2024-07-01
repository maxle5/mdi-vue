
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagRemoveOutline from "../../src/components/MdiTagRemoveOutline.vue";

test("MdiTagRemoveOutline snapshot", () => {
  const wrapper = mount(MdiTagRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
