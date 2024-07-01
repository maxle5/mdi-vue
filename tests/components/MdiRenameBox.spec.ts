
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRenameBox from "../../src/components/MdiRenameBox.vue";

test("MdiRenameBox snapshot", () => {
  const wrapper = mount(MdiRenameBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
