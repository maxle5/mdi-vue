
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPigVariant from "../../src/components/MdiPigVariant.vue";

test("MdiPigVariant snapshot", () => {
  const wrapper = mount(MdiPigVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
