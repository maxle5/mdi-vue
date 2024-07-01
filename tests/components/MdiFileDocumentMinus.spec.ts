
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentMinus from "../../src/components/MdiFileDocumentMinus.vue";

test("MdiFileDocumentMinus snapshot", () => {
  const wrapper = mount(MdiFileDocumentMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
