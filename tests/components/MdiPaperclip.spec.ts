
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPaperclip from "../../src/components/MdiPaperclip.vue";

test("MdiPaperclip snapshot", () => {
  const wrapper = mount(MdiPaperclip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
