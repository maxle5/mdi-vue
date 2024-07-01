
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboard from "../../src/components/MdiClipboard.vue";

test("MdiClipboard snapshot", () => {
  const wrapper = mount(MdiClipboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
