
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageSync from "../../src/components/MdiImageSync.vue";

test("MdiImageSync snapshot", () => {
  const wrapper = mount(MdiImageSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
