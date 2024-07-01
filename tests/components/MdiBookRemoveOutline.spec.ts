
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookRemoveOutline from "../../src/components/MdiBookRemoveOutline.vue";

test("MdiBookRemoveOutline snapshot", () => {
  const wrapper = mount(MdiBookRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
