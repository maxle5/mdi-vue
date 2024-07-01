
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExpansionCardVariant from "../../src/components/MdiExpansionCardVariant.vue";

test("MdiExpansionCardVariant snapshot", () => {
  const wrapper = mount(MdiExpansionCardVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
