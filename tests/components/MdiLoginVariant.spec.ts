
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLoginVariant from "../../src/components/MdiLoginVariant.vue";

test("MdiLoginVariant snapshot", () => {
  const wrapper = mount(MdiLoginVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
