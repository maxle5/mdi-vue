
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentRefreshOutline from "../../src/components/MdiFileDocumentRefreshOutline.vue";

test("MdiFileDocumentRefreshOutline snapshot", () => {
  const wrapper = mount(MdiFileDocumentRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
