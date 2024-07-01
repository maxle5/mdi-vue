
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDnsOutline from "../../src/components/MdiDnsOutline.vue";

test("MdiDnsOutline snapshot", () => {
  const wrapper = mount(MdiDnsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
