
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentCheckOutline from "../../src/components/MdiFileDocumentCheckOutline.vue";

test("MdiFileDocumentCheckOutline snapshot", () => {
  const wrapper = mount(MdiFileDocumentCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
