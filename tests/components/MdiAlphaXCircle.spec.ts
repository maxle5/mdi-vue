
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaXCircle from "../../src/components/MdiAlphaXCircle.vue";

test("MdiAlphaXCircle snapshot", () => {
  const wrapper = mount(MdiAlphaXCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
