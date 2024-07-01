
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationSlabSymbol from "../../src/components/MdiInformationSlabSymbol.vue";

test("MdiInformationSlabSymbol snapshot", () => {
  const wrapper = mount(MdiInformationSlabSymbol, {});
  expect(wrapper.html()).toMatchSnapshot();
});
