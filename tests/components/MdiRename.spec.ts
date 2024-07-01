
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRename from "../../src/components/MdiRename.vue";

test("MdiRename snapshot", () => {
  const wrapper = mount(MdiRename, {});
  expect(wrapper.html()).toMatchSnapshot();
});
