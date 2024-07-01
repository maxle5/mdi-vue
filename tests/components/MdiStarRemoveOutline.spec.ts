
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStarRemoveOutline from "../../src/components/MdiStarRemoveOutline.vue";

test("MdiStarRemoveOutline snapshot", () => {
  const wrapper = mount(MdiStarRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
