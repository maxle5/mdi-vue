
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrbitVariant from "../../src/components/MdiOrbitVariant.vue";

test("MdiOrbitVariant snapshot", () => {
  const wrapper = mount(MdiOrbitVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
