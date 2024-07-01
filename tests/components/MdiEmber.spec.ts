
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmber from "../../src/components/MdiEmber.vue";

test("MdiEmber snapshot", () => {
  const wrapper = mount(MdiEmber, {});
  expect(wrapper.html()).toMatchSnapshot();
});
