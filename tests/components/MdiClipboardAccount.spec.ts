
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiClipboardAccount from "../../src/components/MdiClipboardAccount.vue";

test("MdiClipboardAccount snapshot", () => {
  const wrapper = mount(MdiClipboardAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
