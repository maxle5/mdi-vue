
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSync from "../../src/components/MdiSync.vue";

test("MdiSync snapshot", () => {
  const wrapper = mount(MdiSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
