
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentRemove from "../../src/components/MdiFileDocumentRemove.vue";

test("MdiFileDocumentRemove snapshot", () => {
  const wrapper = mount(MdiFileDocumentRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
