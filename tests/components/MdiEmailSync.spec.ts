
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailSync from "../../src/components/MdiEmailSync.vue";

test("MdiEmailSync snapshot", () => {
  const wrapper = mount(MdiEmailSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
