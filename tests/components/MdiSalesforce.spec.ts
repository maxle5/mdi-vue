
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSalesforce from "../../src/components/MdiSalesforce.vue";

test("MdiSalesforce snapshot", () => {
  const wrapper = mount(MdiSalesforce, {});
  expect(wrapper.html()).toMatchSnapshot();
});
