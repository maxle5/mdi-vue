
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookSync from "../../src/components/MdiBookSync.vue";

test("MdiBookSync snapshot", () => {
  const wrapper = mount(MdiBookSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
