
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveCheckOutline from "../../src/components/MdiArchiveCheckOutline.vue";

test("MdiArchiveCheckOutline snapshot", () => {
  const wrapper = mount(MdiArchiveCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
