
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSealVariant from "../../src/components/MdiSealVariant.vue";

test("MdiSealVariant snapshot", () => {
  const wrapper = mount(MdiSealVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
