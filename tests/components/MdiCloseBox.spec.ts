
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseBox from "../../src/components/MdiCloseBox.vue";

test("MdiCloseBox snapshot", () => {
  const wrapper = mount(MdiCloseBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
