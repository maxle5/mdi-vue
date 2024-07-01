
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableSync from "../../src/components/MdiTableSync.vue";

test("MdiTableSync snapshot", () => {
  const wrapper = mount(MdiTableSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
