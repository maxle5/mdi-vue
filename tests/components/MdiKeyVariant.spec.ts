
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyVariant from "../../src/components/MdiKeyVariant.vue";

test("MdiKeyVariant snapshot", () => {
  const wrapper = mount(MdiKeyVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
