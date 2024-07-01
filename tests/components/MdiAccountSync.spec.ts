
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSync from "../../src/components/MdiAccountSync.vue";

test("MdiAccountSync snapshot", () => {
  const wrapper = mount(MdiAccountSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
