
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentArrowRight from "../../src/components/MdiFileDocumentArrowRight.vue";

test("MdiFileDocumentArrowRight snapshot", () => {
  const wrapper = mount(MdiFileDocumentArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
