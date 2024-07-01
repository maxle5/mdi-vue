
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailVariant from "../../src/components/MdiEmailVariant.vue";

test("MdiEmailVariant snapshot", () => {
  const wrapper = mount(MdiEmailVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
