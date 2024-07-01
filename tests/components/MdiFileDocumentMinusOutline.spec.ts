
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentMinusOutline from "../../src/components/MdiFileDocumentMinusOutline.vue";

test("MdiFileDocumentMinusOutline snapshot", () => {
  const wrapper = mount(MdiFileDocumentMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
