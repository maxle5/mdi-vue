
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRenameOutline from "../../src/components/MdiRenameOutline.vue";

test("MdiRenameOutline snapshot", () => {
  const wrapper = mount(MdiRenameOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
