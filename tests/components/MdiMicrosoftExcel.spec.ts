
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicrosoftExcel from "../../src/components/MdiMicrosoftExcel.vue";

test("MdiMicrosoftExcel snapshot", () => {
  const wrapper = mount(MdiMicrosoftExcel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
