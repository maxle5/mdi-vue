
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaXCircleOutline from "../../src/components/MdiAlphaXCircleOutline.vue";

test("MdiAlphaXCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaXCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
