
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileRestoreOutline from "../../src/components/MdiFileRestoreOutline.vue";

test("MdiFileRestoreOutline snapshot", () => {
  const wrapper = mount(MdiFileRestoreOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
