
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextShort from "../../src/components/MdiTextShort.vue";

test("MdiTextShort snapshot", () => {
  const wrapper = mount(MdiTextShort, {});
  expect(wrapper.html()).toMatchSnapshot();
});
