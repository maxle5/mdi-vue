
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentCheck from "../../src/components/MdiFileDocumentCheck.vue";

test("MdiFileDocumentCheck snapshot", () => {
  const wrapper = mount(MdiFileDocumentCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
