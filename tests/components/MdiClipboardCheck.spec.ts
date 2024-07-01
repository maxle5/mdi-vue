
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardCheck from "../../src/components/MdiClipboardCheck.vue";

test("MdiClipboardCheck snapshot", () => {
  const wrapper = mount(MdiClipboardCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
