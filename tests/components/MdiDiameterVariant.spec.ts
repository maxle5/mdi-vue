
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiameterVariant from "../../src/components/MdiDiameterVariant.vue";

test("MdiDiameterVariant snapshot", () => {
  const wrapper = mount(MdiDiameterVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
