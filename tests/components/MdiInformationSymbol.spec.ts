
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationSymbol from "../../src/components/MdiInformationSymbol.vue";

test("MdiInformationSymbol snapshot", () => {
  const wrapper = mount(MdiInformationSymbol, {});
  expect(wrapper.html()).toMatchSnapshot();
});
