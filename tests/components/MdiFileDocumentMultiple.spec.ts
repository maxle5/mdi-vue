
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentMultiple from "../../src/components/MdiFileDocumentMultiple.vue";

test("MdiFileDocumentMultiple snapshot", () => {
  const wrapper = mount(MdiFileDocumentMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
