
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentArrowRightOutline from "../../src/components/MdiFileDocumentArrowRightOutline.vue";

test("MdiFileDocumentArrowRightOutline snapshot", () => {
  const wrapper = mount(MdiFileDocumentArrowRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
