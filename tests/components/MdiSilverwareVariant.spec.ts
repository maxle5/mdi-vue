
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSilverwareVariant from "../../src/components/MdiSilverwareVariant.vue";

test("MdiSilverwareVariant snapshot", () => {
  const wrapper = mount(MdiSilverwareVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
