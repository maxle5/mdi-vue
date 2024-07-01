
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRenameBoxOutline from "../../src/components/MdiRenameBoxOutline.vue";

test("MdiRenameBoxOutline snapshot", () => {
  const wrapper = mount(MdiRenameBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
