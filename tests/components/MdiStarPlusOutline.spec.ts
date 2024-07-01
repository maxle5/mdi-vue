
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarPlusOutline from "../../src/components/MdiStarPlusOutline.vue";

test("MdiStarPlusOutline snapshot", () => {
  const wrapper = mount(MdiStarPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
