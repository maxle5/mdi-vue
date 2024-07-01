
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardAlert from "../../src/components/MdiClipboardAlert.vue";

test("MdiClipboardAlert snapshot", () => {
  const wrapper = mount(MdiClipboardAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
