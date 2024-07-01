
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSync from "../../src/components/MdiFileSync.vue";

test("MdiFileSync snapshot", () => {
  const wrapper = mount(MdiFileSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
