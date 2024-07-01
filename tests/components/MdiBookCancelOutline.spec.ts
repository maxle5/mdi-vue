
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookCancelOutline from "../../src/components/MdiBookCancelOutline.vue";

test("MdiBookCancelOutline snapshot", () => {
  const wrapper = mount(MdiBookCancelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
