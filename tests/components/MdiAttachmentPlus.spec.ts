
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAttachmentPlus from "../../src/components/MdiAttachmentPlus.vue";

test("MdiAttachmentPlus snapshot", () => {
  const wrapper = mount(MdiAttachmentPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
