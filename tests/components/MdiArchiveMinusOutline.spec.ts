
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveMinusOutline from "../../src/components/MdiArchiveMinusOutline.vue";

test("MdiArchiveMinusOutline snapshot", () => {
  const wrapper = mount(MdiArchiveMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
