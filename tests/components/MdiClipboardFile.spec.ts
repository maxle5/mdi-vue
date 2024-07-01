
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardFile from "../../src/components/MdiClipboardFile.vue";

test("MdiClipboardFile snapshot", () => {
  const wrapper = mount(MdiClipboardFile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
