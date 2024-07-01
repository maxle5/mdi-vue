
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStorefront from "../../src/components/MdiStorefront.vue";

test("MdiStorefront snapshot", () => {
  const wrapper = mount(MdiStorefront, {});
  expect(wrapper.html()).toMatchSnapshot();
});
