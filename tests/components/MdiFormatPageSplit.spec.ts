
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatPageSplit from "../../src/components/MdiFormatPageSplit.vue";

test("MdiFormatPageSplit snapshot", () => {
  const wrapper = mount(MdiFormatPageSplit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
