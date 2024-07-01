
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebSync from "../../src/components/MdiWebSync.vue";

test("MdiWebSync snapshot", () => {
  const wrapper = mount(MdiWebSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
