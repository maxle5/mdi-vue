
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileDocumentPlus from "../../src/components/MdiFileDocumentPlus.vue";

test("MdiFileDocumentPlus snapshot", () => {
  const wrapper = mount(MdiFileDocumentPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
