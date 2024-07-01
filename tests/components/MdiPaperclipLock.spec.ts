
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaperclipLock from "../../src/components/MdiPaperclipLock.vue";

test("MdiPaperclipLock snapshot", () => {
  const wrapper = mount(MdiPaperclipLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
