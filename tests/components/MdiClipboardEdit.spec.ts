
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardEdit from "../../src/components/MdiClipboardEdit.vue";

test("MdiClipboardEdit snapshot", () => {
  const wrapper = mount(MdiClipboardEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
