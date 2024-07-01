
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookRemoveMultipleOutline from "../../src/components/MdiBookRemoveMultipleOutline.vue";

test("MdiBookRemoveMultipleOutline snapshot", () => {
  const wrapper = mount(MdiBookRemoveMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
