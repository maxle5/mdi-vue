
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAttachmentMinus from "../../src/components/MdiAttachmentMinus.vue";

test("MdiAttachmentMinus snapshot", () => {
  const wrapper = mount(MdiAttachmentMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
