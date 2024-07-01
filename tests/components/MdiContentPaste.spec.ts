
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentPaste from "../../src/components/MdiContentPaste.vue";

test("MdiContentPaste snapshot", () => {
  const wrapper = mount(MdiContentPaste, {});
  expect(wrapper.html()).toMatchSnapshot();
});
